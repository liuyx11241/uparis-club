import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {OrderTableDataSource} from './order-table-datasource';
import {GetService} from "../service/http-get.service";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'uparis-order-table',
    templateUrl: './order-table.component.html',
    styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: OrderTableDataSource;

    displayedColumns = ['id', 'tripProduct', 'trip', 'participant', 'reference', 'status', 'payer', 'listOption', 'listAnswer', 'amount', 'actions'];

    private _idTrip: number;

    private _idParticipant: number;

    constructor(private service: GetService, private auth: AuthService) {
    }

    ngOnInit() {
        this.dataSource = new OrderTableDataSource(this.paginator, this.sort, this.service);
    }

    ngAfterViewInit(): void {
        if (this.auth.authenticated && !this._idTrip && !this._idParticipant) {
            this.reload();
        }
    }

    @Input()
    set idTrip(value: number) {
        this._idTrip = value;
    }

    @Input()
    set idParticipant(value: number) {
        this._idParticipant = value;
    }

    reload(): void {
        let filter = {};
        if (this._idTrip) {
            filter['idTrip'] = this._idTrip;
        } else if (this._idParticipant) {
            filter['idParticipant'] = this._idParticipant;
        }

        this.dataSource.reload(filter);
    }
}
