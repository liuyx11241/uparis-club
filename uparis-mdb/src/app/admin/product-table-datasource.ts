import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {Observable} from 'rxjs';
import {GetService} from "../service/http-get.service";
import {Product} from "../model/product.dto";

/**
 * Data source for the ProductTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductTableDataSource extends DataSource<Product> {
    constructor(private paginator: MatPaginator,
                private sort: MatSort,
                private productService: GetService) {
        super();
    }


    connect(collectionViewer: CollectionViewer): Observable<Product[]> {
        return this.productService.getAllProducts();
    }

    disconnect(collectionViewer: CollectionViewer): void {

    }

}