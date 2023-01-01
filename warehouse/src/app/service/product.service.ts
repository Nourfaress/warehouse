import { HttpClient, HttpHeaders , HttpEvent} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Product } from "../models/Product";
import { map, Observable, switchMap, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  // jsonURL = 'assets/data.json';
  warehouseURL = 'http://localhost:5000/v1/products/';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.warehouseURL)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
      );
  }
  getProduct(_id: string): Observable<Product | any> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p._id === _id)
        )
      )
  }

  RemoveProduct(_id: string){
    this.http.delete<Product[]>(this.warehouseURL+ _id)
    .subscribe(()=>{
    })
  }
  postProduct(data: any): Observable<any>{
    return this.http.post(`${this.warehouseURL}`, data)
    .pipe(
      tap(data),
    );
  }
  updateProduct(_id: string){
    return this.http.put(`${this.warehouseURL}`, _id)
    console.log(_id);
  }

}
