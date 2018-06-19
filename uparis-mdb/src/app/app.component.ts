import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>`,
    styles: [],
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        console.log('configured routes: ', this.router.config);
    }
}
