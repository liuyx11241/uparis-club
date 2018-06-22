import {Component} from '@angular/core';
import {BsLocaleService} from "ngx-bootstrap";

@Component({
    selector: 'eshop',
    templateUrl: './eshop.component.html',
    styleUrls: ['./eshop.component.scss']
})
export class EshopComponent {
    constructor(private localeService: BsLocaleService) {
        this.localeService.use("zh-cn");
    }
}
