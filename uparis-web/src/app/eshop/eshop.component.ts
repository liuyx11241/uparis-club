import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'uparis-eshop',
    templateUrl: './eshop.component.html',
    styleUrls: ['./eshop.component.css']
})
export class EshopComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  title="UPARIS"

  constructor(private breakpointObserver: BreakpointObserver) {}

  }
