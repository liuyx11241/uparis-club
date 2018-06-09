import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EshopModule} from './eshop/eshop.module';
import {ErrorModule} from './error/error.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ErrorModule,
        NgbModule.forRoot(),

        // Routing Base
        AuthModule,
        AdminModule,
        EshopModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
