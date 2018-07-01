import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule, MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import {LayoutModule} from "@angular/cdk/layout";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {BsDatepickerModule, CollapseModule, SortableModule} from "ngx-bootstrap";

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
        MatBadgeModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,

        BsDatepickerModule.forRoot(),
        SortableModule.forRoot(),
        CollapseModule.forRoot(),
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
        MatBadgeModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,

        BsDatepickerModule,
        SortableModule,
        CollapseModule,
    ]
})
export class MaterialModule {
}
