import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products/:_id', component: ProductDetailsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'cart', component: CartComponent},
  {path: 'dashboard/edit/:_id', component: EditProductComponent}
  // {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  // {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
