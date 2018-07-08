import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
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

    _displayedColumns = ['id', 'idProduct', 'dateStart', 'dateEnd', 'stock', 'price', 'priceVAT', 'actions'];

    private _idProduct: number;

    constructor(private service: GetService) {
    }

    ngOnInit() {
        this._dataSource = new TripTableDataSource(this.paginator, this.sort, this.service);
    }


    ngAfterViewInit(): void {
        if(!this._idProduct) {
            this.reload();
        }
    }

    @Input()
    set idProduct(value: number) {
        this._idProduct = value;
    }

    reload(): void {
        this._dataSource.reload(this._idProduct ? {idProduct: this._idProduct} : {})
    }
}
