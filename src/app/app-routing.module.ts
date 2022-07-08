import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './Components/footer/footer.component';
import { CardOfProductsComponent } from './Components/card-of-products/card-of-products.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { Plate1Component } from './productDetails/plate1/plate1.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"details", component:Plate1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
