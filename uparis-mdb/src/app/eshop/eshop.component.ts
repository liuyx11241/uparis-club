import {Component} from '@angular/core';

@Component({
    selector: 'eshop',
    templateUrl: './eshop.component.html',
    styles: [`
        :host {
            display: flex;
            flex-flow: column;
            height: 100vh;
        }

        #main {
            flex: 1;
        }
    `]
})
export class EshopComponent {
    constructor() {
    }
}
