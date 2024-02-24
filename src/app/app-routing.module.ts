import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/order/product-details/product-details.component';
import { authGuard } from './Guards/auth.guard';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/add', component: AddProductComponent },
      { path: 'products/:pid', component: ProductDetailsComponent },
      { path: 'order', component: OrderMasterComponent, canActivate: [authGuard] },
      {
        path: 'user', 
        loadChildren: () => import('src/app/Components/user-module/user.module').then(m => m.UserModule)
      },
    ]
  },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'logout', component: UserLoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
