import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'uparis-eshop',
    templateUrl: './eshop.component.html',
    styleUrls: ['./eshop.component.css']
})
export class EshopComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

}
