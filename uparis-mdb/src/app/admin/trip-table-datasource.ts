import {MatPaginator, MatSort} from '@angular/material';
import {Trip} from "../model/trip.dto";
import {GetService} from "../service/http-get.service";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, merge, Observable, of} from "rxjs/index";
import {catchError, finalize, tap} from "rxjs/internal/operators";

/**
 * Data source for the TripTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TripTableDataSource extends DataSource<Trip> {

    private tripSubject = new BehaviorSubject<Trip[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private paginator: MatPaginator,
                private sort: MatSort,
                private service: GetService) {
        super();
    }


    connect(collectionViewer: CollectionViewer): Observable<Trip[]> {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(x => this.reload())
            ).subscribe();

        return this.tripSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.tripSubject.complete();
        this.loadingSubject.complete();
    }

    reload(filter = {}) {
        this.loadingSubject.next(true);

        this.service.getTrips(filter,
            this.paginator.pageIndex, this.paginator.pageSize,
            this.sort.active ? this.sort.active : '', this.sort.direction)
            .pipe(
                catchError(err => of([])),
                finalize(() => this.loadingSubject.next(false))
            ).subscribe(
            res => {
                this.paginator.length = res['totalElements'];
                this.tripSubject.next(res['content']);
            });
    }

}
