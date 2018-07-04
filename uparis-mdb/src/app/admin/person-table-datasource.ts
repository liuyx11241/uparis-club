import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject, merge, Observable, of} from 'rxjs';
import {Person} from "../model/person.dto";
import {GetService} from "../service/http-get.service";
import {catchError, finalize, tap} from "rxjs/internal/operators";

export class PersonTableDataSource extends DataSource<Person> {

    private subject = new BehaviorSubject<Person[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private paginator: MatPaginator,
                private sort: MatSort,
                private service: GetService) {
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<Person[]> {
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

    reload(filter = '') {
        this.loadingSubject.next(true);

        this.service.getPersons(filter,
            this.paginator.pageIndex, this.paginator.pageSize,
            this.sort.active ? this.sort.active : '', this.sort.direction)
            .pipe(
                catchError(err => of([])),
                finalize(() => this.loadingSubject.next(false))
            ).subscribe(
            res => {
                this.paginator.length = res['totalElements'];
                this.subject.next(res['content']);
            });
    }
}

