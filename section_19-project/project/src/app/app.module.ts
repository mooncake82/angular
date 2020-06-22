// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// extra
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
// components
import { AppComponent } from './app.component';
import { ProductsIndexComponent } from './components/products/products-index/products-index.component';
import { ProductsShowComponent } from './components/products/products-show/products-show.component';
import { BootstrapFormComponent } from './reusable-components/bootstrap-form/bootstrap-form.component';
import { BootstrapInputComponent } from './reusable-components/bootstrap-input/bootstrap-input.component';
import { BootstrapSelectComponent } from './reusable-components/bootstrap-select/bootstrap-select.component';
import { BootstrapListComponent } from './reusable-components/bootstrap-list/bootstrap-list.component';
import { BootstrapNavbarComponent } from './components/bootstrap-navbar/bootstrap-navbar.component';
import { BootstrapCardGroupComponent } from './reusable-components/bootstrap-card/bootstrap-cards-group.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsIndexComponent,
        ProductsShowComponent,
        BootstrapFormComponent,
        BootstrapInputComponent,
        BootstrapSelectComponent,
        BootstrapListComponent,
        BootstrapCardGroupComponent,
        BootstrapNavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAnalyticsModule,
        ReactiveFormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }