import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {TripTableDataSource} from './trip-table-datasource';
import {GetService} from "../service/http-get.service";

@Component({
    selector: 'uparis-trip-table',
    templateUrl: './trip-table.component.html',
})
export class TripTableComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    _dataSource: TripTableDataSource;

    _displayedColumns = ['id', 'idProduct', 'dateStart', 'dateEnd', 'stock', 'mainPrice', 'actions'];

    constructor(private service: GetService) {
    }

    ngOnInit() {
        this._dataSource = new TripTableDataSource(this.paginator, this.sort, this.service);
    }


    ngAfterViewInit(): void {
        this._dataSource.reload();
    }
}
