import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../model/product.dto";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_LABEL_GLOBAL_OPTIONS} from "@angular/material";
import {ProductService} from "../service/product.service";
import {NgForm} from "@angular/forms";
import {ItineraryTableComponent} from "./itinerary-table.component";

@Component({
    selector: 'uparis-product-form',
    templateUrl: './product-form.component.html',
    styles: [],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}}]
})
export class ProductFormComponent implements OnInit {

    @ViewChild(ItineraryTableComponent) itineraryTable: ItineraryTableComponent;

    _product: Product;

    _disabled = true;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: ProductService) {
    }


    ngOnInit(): void {
        this.route.data.subscribe((data: { product: Product }) => {
            this._product = data.product;
        });

        if (!this._product) {
            this.add();
        }
    }

    add(): void {
        this._disabled = false;

        this._product = new Product();
        this._product.listItinerary = [];
        this._product.listPicture = [];
        this._product.listTrip = [];
    }

    save(form: NgForm) {
        this.itineraryTable.prepareSave()
        if (form.valid && this._product) {
            this.service.saveProduct(this._product).subscribe((id: number) => {
                this._disabled = true;
                this.router.navigate(['/admin/products', id]);
            });
        }
    }

    delete(form: NgForm) {
        if (this._product) {
        }
    }
}
