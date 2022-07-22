import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProDetailsService {

  private url: string = "localhost:3080/accounts"


  constructor(private http: HttpClient) {
  }
  public getDetails(): Observable<Iproduct[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get<Iproduct[]>(this.url);
  }
}
