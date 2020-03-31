import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car} from '../model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class CarsService {
  private CarURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/300';
  private CarActionURL = 'https://catalogo-autos.herokuapp.com/api/autos';

  constructor(private http: HttpClient) { }

 getCars(): Observable<any>{

   return this.http.get<any>(this.CarURL);
   
 }

 updateCars(car:Car): Observable <any>{
   return this.http.put<any>(`${this.CarActionURL}/${car._id}`, car);
 }

 addCars(car : Car): Observable<any>{
   return this.http.post<any>(this.CarActionURL,car);
 }

 deleteCars(car : Car): Observable<any>{
   return this.http.delete<any>(`${this.CarActionURL}/${car._id}`);
 }
}
