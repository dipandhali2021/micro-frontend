import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'products', loadChildren: () => import('products/Module').then(m => m.ProductsModule)},
  {path: 'carts', loadChildren: () => import('carts/Module').then(m => m.CartsModule)},
  {path:'orders', loadChildren: () => import('orders/Module').then(m => m.OrdersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }
