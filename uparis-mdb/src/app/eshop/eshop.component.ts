import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BsLocaleService} from "ngx-bootstrap";

@Component({
    selector: 'eshop',
    templateUrl: './eshop.component.html',
    styleUrls: ['./eshop.component.scss']
})
export class EshopComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver, private localeService: BsLocaleService) {
        this.localeService.use("zh-cn");
    }

}
