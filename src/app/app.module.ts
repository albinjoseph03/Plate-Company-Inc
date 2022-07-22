import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CardOfProductsComponent } from './Components/card-of-products/card-of-products.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { Plate1Component } from './productDetails/plate1/plate1.component';
import { HomeScreenComponent } from './Components/home-screen/home-screen.component';
import { Plate2Component } from './productDetails/plate2/plate2.component';
import { Plate3Component } from './productDetails/plate3/plate3.component';
import { Plate4Component } from './productDetails/plate4/plate4.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardOfProductsComponent,
    NavbarComponent,
    Plate1Component,
    HomeScreenComponent,
    Plate2Component,
    Plate3Component,
    Plate4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
