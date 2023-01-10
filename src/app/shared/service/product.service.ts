import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: any = 'https://run.mocky.io/v3/f1aae6da-2c58-4dc9-8f2c-2027f5a29656';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);

  }
}
