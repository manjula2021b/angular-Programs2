import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { AllComponent } from './all/all.component';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    LandingComponent,
    ProductsComponent,
    AllComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
