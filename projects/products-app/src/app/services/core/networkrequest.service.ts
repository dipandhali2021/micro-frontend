import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkRequestService {
  baseurl = "https://fakestoreapi.com/";
  constructor(private http: HttpClient) { }

  getProducts(endPoint: string) {
    return this.http.get(this.baseurl + endPoint);
  }
}
