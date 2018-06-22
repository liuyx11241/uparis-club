import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ProductTableDataSource} from './product-table-datasource';
import {ProductService} from "../service/product.service";

@Component({
    selector: 'admin/product-table',
    templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: ProductTableDataSource;

    displayedColumns = ['id', 'name', 'alias', 'duration', 'actions'];

    constructor(private productService: ProductService) {

    }

    ngOnInit() {
        this.dataSource = new ProductTableDataSource(this.paginator, this.sort, this.productService);
    }
}
