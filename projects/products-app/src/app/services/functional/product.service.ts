import { Injectable } from '@angular/core';
import { NetworkRequestService } from '../core/networkrequest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private networkRequestService:NetworkRequestService) { }

  getProducts(){
    return this.networkRequestService.getProducts('products');
  }
}
