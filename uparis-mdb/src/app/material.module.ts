import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatMenuModule, MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule, MatSortModule, MatStepperModule, MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import {LayoutModule} from "@angular/cdk/layout";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {BsDatepickerModule} from "ngx-bootstrap";

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
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatStepperModule,
        MatCheckboxModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,

        BsDatepickerModule.forRoot(),
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
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatStepperModule,
        MatCheckboxModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,

        BsDatepickerModule,
    ]
})
export class MaterialModule {
}
