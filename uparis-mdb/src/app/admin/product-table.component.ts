import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProductTableDataSource } from './product-table-datasource';

@Component({
  selector: 'admin-product-table',
  templateUrl: './product-table.component.html',
  styles: []
})
export class ProductTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProductTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProductTableDataSource(this.paginator, this.sort);
  }
}
