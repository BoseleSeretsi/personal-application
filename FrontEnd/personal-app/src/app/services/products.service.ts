import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:4000/products'

const hhtpOptions = {headers: new HttpHeaders({'content-type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(baseURL);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(baseURL, product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(baseURL, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(baseURL + id);
  }
}
