import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car} from '../model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class CarsService {
  private CarURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/5';

  constructor(private http: HttpClient) { }

 getCars(): Observable<any>{

   return this.http.get<any>(this.CarURL);
   
 }
}