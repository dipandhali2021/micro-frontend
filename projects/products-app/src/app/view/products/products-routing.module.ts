import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,CommonModule]
})
export class ProductsRoutingModule { }
