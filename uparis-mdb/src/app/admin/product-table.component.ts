import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ProductTableDataSource} from './product-table-datasource';
import {HttpService} from "../service/product.service";

@Component({
    selector: 'admin/product-table',
    templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    _dataSource: ProductTableDataSource;

    _displayedColumns = ['id', 'name', 'alias', 'duration', 'actions'];

    constructor(private productService: HttpService) {

    }

    ngOnInit() {
        this._dataSource = new ProductTableDataSource(this.paginator, this.sort, this.productService);
    }
}
