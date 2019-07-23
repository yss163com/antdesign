import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import '../mock/index.js';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

constructor(private http: HttpClient) { }

getHeroes(): Observable<any> {
  return this.http.get('/get');
}
}
