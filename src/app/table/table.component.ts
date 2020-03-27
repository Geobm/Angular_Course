import { Component, OnInit } from '@angular/core';
import {Car }from '../model';
import {CARS }from '../data';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarsService } from '../Services/cars.service';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';

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

  constructor( private carService: CarsService,private modalService : NgbModal) { }

  ngOnInit() {
    this.getCars();
  }

openModalEdit(car :Car) {

  const modalRef= this.modalService.open(ModalAddUpdateComponent
  ,{centered : true});
  modalRef.componentInstance.car = car;
  modalRef.componentInstance.action ='Editar';
}


  getCars(): void {
    
    this.carService.getCars().subscribe((response)=>{
      this.cars = response.data;
    })
  }
}
