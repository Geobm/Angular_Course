import { Component, OnInit } from '@angular/core';
import {Car }from '../model';
import {CARS }from '../data';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarsService } from '../Services/cars.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  // Pagination
  page = 1;
  pageSize = 10;
  cars: Car[];
  selectedCar: Car;

  constructor( private carService: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    
    this.carService.getCars().subscribe((carsTemp)=>{
      this.cars = carsTemp.data;
    })
  }
}
