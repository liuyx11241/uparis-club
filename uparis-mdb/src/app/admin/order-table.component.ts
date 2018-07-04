import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {OrderTableDataSource} from './order-table-datasource';
import {GetService} from "../service/http-get.service";

@Component({
    selector: 'uparis-admin/order-table',
    templateUrl: './order-table.component.html',
    styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: OrderTableDataSource;

    displayedColumns = ['id', 'product', 'trip', 'participant', 'reference', 'status', 'payer', 'listOption', 'amount', 'actions'];

    constructor(private service: GetService) {
    }

    ngOnInit() {
        this.dataSource = new OrderTableDataSource(this.paginator, this.sort, this.service);
    }

    ngAfterViewInit(): void {
        this.dataSource.reload();
    }
}