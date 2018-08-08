import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
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
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),

        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatDialogModule,
    ],
    exports: [
        MDBBootstrapModule,

        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatDialogModule
    ]
})
export class MaterialModule {
}
