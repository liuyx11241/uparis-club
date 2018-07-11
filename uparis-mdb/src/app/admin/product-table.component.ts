import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ProductTableDataSource} from './product-table-datasource';
import {GetService} from "../service/http-get.service";
import {Router} from "@angular/router";
import {Product} from "../model/product.dto";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'admin/product-table',
    templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    _dataSource: ProductTableDataSource;

    _displayedColumns = ['id', 'name', 'alias', 'status', 'duration', 'actions'];

    constructor(private router: Router,
                private productService: GetService,
                private auth: AuthService) {

    }

    ngOnInit() {
        this._dataSource = new ProductTableDataSource(this.paginator, this.sort, this.productService);
    }


    ngAfterViewInit(): void {
        if (this.auth.authenticated) {
            this._dataSource.reload();
        }
    }

    createTrip(product: Product) {
        this.router.navigate(['/admin/trips/new'], {
            queryParams: {
                idProduct: product.id
            }
        });
    }

}
