import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ProductTableDataSource} from './product-table-datasource';
import {GetService} from "../service/http-get.service";
import {Router} from "@angular/router";
import {Product} from "../model/product.dto";

@Component({
    selector: 'admin/product-table',
    templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    _dataSource: ProductTableDataSource;

    _displayedColumns = ['id', 'name', 'alias', 'status', 'duration', 'timeCreated', 'timeModified', 'actions'];

    constructor(private router: Router,
                private productService: GetService,) {

    }

    ngOnInit() {
        this._dataSource = new ProductTableDataSource(this.paginator, this.sort, this.productService);
    }

    createTrip(product: Product) {
        this.router.navigate(['/admin/trips/new'], {
            queryParams: {
                idProduct: product.id
            }
        });
    }

}
