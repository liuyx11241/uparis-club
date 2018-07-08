import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {PersonTableDataSource} from './person-table-datasource';
import {GetService} from "../service/http-get.service";

@Component({
    selector: 'uparis-person-table',
    templateUrl: './person-table.component.html',
    styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: PersonTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = [
        'id', 'gender', 'lastName', 'birthday', 'birthplace', 'wechat', 'telephone', 'email',
        'address', 'zipCode', 'city', 'country', 'actions'];

    private _idTrip: number;

    constructor(private service: GetService) {
    }

    ngOnInit() {
        this.dataSource = new PersonTableDataSource(this.paginator, this.sort, this.service);
    }


    ngAfterViewInit(): void {
        if(!this._idTrip) {
            this.dataSource.reload();
        }
    }

    @Input()
    set idTrip(value: number) {
        this._idTrip = value;
    }

    reload(): void {
        this.dataSource.reload(this._idTrip ? {idTrip: this._idTrip} : {});
    }
}