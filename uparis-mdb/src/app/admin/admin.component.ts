import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'uparis-admin',
    templateUrl: './admin.component.html',
})
export class AdminComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver,
                private auth: AuthService,
                private router: Router) {
    }

    logout() {
        this.auth.logout();
    }
}
