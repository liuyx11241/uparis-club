import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject, merge, Observable, of} from 'rxjs';
import {Order} from "../model/order.dto";
import {catchError, finalize, tap} from "rxjs/internal/operators";
import {GetService} from "../service/http-get.service";

/**
 * Data source for the OrderTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OrderTableDataSource extends DataSource<Order> {
    private subject = new BehaviorSubject<Order[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private paginator: MatPaginator, private sort: MatSort, private service: GetService) {
        super();
    }


    connect(collectionViewer: CollectionViewer): Observable<Order[]> {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(x => this.reload())
            ).subscribe();

        return this.subject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.subject.complete();
        this.loadingSubject.complete();
    }

    reload(filter = ''): void {
        this.loadingSubject.next(true);

        this.service.getOrders(filter,
            this.paginator.pageIndex, this.paginator.pageSize,
            this.sort.active ? this.sort.active : '', this.sort.direction)
            .pipe(
                catchError(err => of([])),
                finalize(() => this.loadingSubject.next(false))
            ).subscribe(
            res => {
                console.info(res);
                this.paginator.length = res['totalElements'];
                this.subject.next(res['content']);
            });
    }
}
