import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule, MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {LayoutModule} from "@angular/cdk/layout";
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,

  ],
  exports: [
    MDBBootstrapModule,

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
  ]
})
export class MaterialModule {
}
