import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ProductTableDataSource} from './product-table-datasource';
import {GetService} from "../service/http-get.service";

@Component({
    selector: 'admin/product-table',
    templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    _dataSource: ProductTableDataSource;

    _displayedColumns = ['id', 'name', 'alias', 'duration', 'actions'];

    constructor(private productService: GetService) {

    }

    ngOnInit() {
        this._dataSource = new ProductTableDataSource(this.paginator, this.sort, this.productService);
    }


    ngAfterViewInit(): void {
        this._dataSource.reload();
        // fromEvent(this.input.nativeElement,'keyup')
        //     .pipe(
        //         debounceTime(150),
        //         distinctUntilChanged(),
        //         tap(() => {
        //             this.paginator.pageIndex = 0;
        //             this.loadLessonsPage();
        //         })
        //     )
        //     .subscribe();
    }
}
