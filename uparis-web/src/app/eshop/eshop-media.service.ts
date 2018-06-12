import {ChangeDetectorRef, Injectable, OnDestroy} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

@Injectable()
export class EshopMediaService implements OnDestroy {

    private _mobileQuery$: MediaQueryList;

    private _mobileQueryListener$: () => void;

    constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
        this._mobileQuery$ = media.matchMedia('(max-width: 600px');
        this._mobileQueryListener$ = () => this.changeDetectorRef.detectChanges();
        this._mobileQuery$.addListener(this._mobileQueryListener$);
    }

    get isMobileMode(): boolean {
        return this._mobileQuery$.matches;
    }

    ngOnDestroy(): void {
        this._mobileQuery$.removeListener(this._mobileQueryListener$);
    }
}
