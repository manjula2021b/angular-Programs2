import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './all/all.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // {path:'',},
  // {path:'',redirectTo:'about',pathMatch:'full'},
  // {path:'home',component:HomeComponent},
  // {path:'about',component:AboutComponent},
  // {path:'contact',component:ContactComponent},
  // {path:'products',component:ProductsComponent}
  // {path:'**',component:ErrorComponent}

  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'all',component:AllComponent},
  {path:'products',component:ProductsComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
