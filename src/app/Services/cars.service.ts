import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../model";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { MessageService } from "../Services/message.service";

@Injectable({
  providedIn: "root"
})
export class CarsService {
  private CarURL = "https://catalogo-autos.herokuapp.com/api/autos/limit/300";
  private CarActionURL = "https://catalogo-autos.herokuapp.com/api/autos";

  constructor(
    private http: HttpClient,
    private messagesService: MessageService
  ) {}

  getCars(): Observable<any> {
    return this.http.get<any>(this.CarURL).pipe(
      catchError(this.handleError<any>("getCars")),
      tap(() => this.messagesService.add("Obtained Cars"))
    );
  }

  updateCars(car: Car): Observable<any> {
    return this.http.put<any>(`${this.CarActionURL}/${car._id}`, car).pipe(
      catchError(this.handleError<any>("updateCars")),
      tap(result =>
        this.messagesService.add(
          `Car updated correctly with ID :${result.data._id}`
        )
      )
    );
  }

  addCars(car: Car): Observable<any> {
    return this.http.post<any>(this.CarActionURL, car).pipe(
      catchError(this.handleError<any>("addCars")),
      tap(result =>
        this.messagesService.add(
          `Car added correctly with ID :${result.data._id}`
        )
      )
    );
  }

  deleteCars(car: Car): Observable<any> {
    return this.http.delete<any>(`${this.CarActionURL}/${car._id}`).pipe(
      catchError(this.handleError<any>("deleteCars")),
      tap(() => this.messagesService.add("Car deleted correctly"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      this.messagesService.add(`${operation} failed : ${error.message}`);
      return of(result as T);
    };
  }
}
