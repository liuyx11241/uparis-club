import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject, merge, Observable, of} from 'rxjs';
import {GetService} from "../service/http-get.service";
import {Product} from "../model/product.dto";
import {catchError, finalize, tap} from "rxjs/internal/operators";

/**
 * Data source for the ProductTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductTableDataSource extends DataSource<Product> {

    private productSubject = new BehaviorSubject<Product[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private paginator: MatPaginator,
                private sort: MatSort,
                private service: GetService) {
        super();
    }


    connect(collectionViewer: CollectionViewer): Observable<Product[]> {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(x => this.reload())
            ).subscribe();

        return this.productSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.productSubject.complete();
        this.loadingSubject.complete();
    }

    reload(filter = {}) {
        this.loadingSubject.next(true);

        this.service.getProducts(filter,
            this.paginator.pageIndex, this.paginator.pageSize,
            this.sort.active ? this.sort.active : '', this.sort.direction)
            .pipe(
                catchError(err => of([])),
                finalize(() => this.loadingSubject.next(false))
            ).subscribe(
            res => {
                this.paginator.length = res['totalElements'];
                this.productSubject.next(res['content']);
            });
    }

}