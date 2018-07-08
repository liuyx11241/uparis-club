import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {OrderTableDataSource} from './order-table-datasource';
import {GetService} from "../service/http-get.service";

@Component({
    selector: 'uparis-order-table',
    templateUrl: './order-table.component.html',
    styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: OrderTableDataSource;

    displayedColumns = ['id', 'tripProduct', 'trip', 'participant', 'reference', 'status', 'payer', 'listOption', 'amount', 'actions'];

    private _idTrip: number;

    constructor(private service: GetService) {
    }

    ngOnInit() {
        this.dataSource = new OrderTableDataSource(this.paginator, this.sort, this.service);
    }

    ngAfterViewInit(): void {
        if(!this._idTrip) {
            this.reload();
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
