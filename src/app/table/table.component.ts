import { Component, OnInit } from '@angular/core';
import {Car }from '../model';
import {CARS }from '../data';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarsService } from '../Services/cars.service';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import {ModalConfirmActionComponent} from '../modal-confirm-action/modal-confirm-action.component'
import {ModalAddCarComponent} from '../modal-add-car/modal-add-car.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  // Pagination
  page = 1;
  pageSize = 15;
  cars: Car[];
  selectedCar: Car;
  displayProgressBar : boolean;

  constructor( private carService: CarsService,private modalService : NgbModal) { }

  ngOnInit() {
  this.displayProgressBar = true;    
    this.getCars();
  }

openModalEdit(car :Car) {

  const modalRef= this.modalService.open(ModalAddUpdateComponent
  ,{centered : true});
  modalRef.componentInstance.car = car;
  modalRef.componentInstance.action ='Editar';

  modalRef.result.then(
    (car)=> {
      this.carService.updateCars(car).subscribe(
        response => console.log(response)
      );
    },
    (reason) => console.log(reason)
    );
}

openModalAdd(car :Car) {

  const modalRef= this.modalService.open(ModalAddCarComponent
  ,{centered : true});
  modalRef.componentInstance.car = car;
  modalRef.componentInstance.action ='Agregar';

  modalRef.result.then(
    (car)=> {
      this.carService.addCars(car).subscribe(
        response => console.log(response));
    },
    (reason) => console.log(reason)
    );
}


openModalConfirmDelete(car :Car) {

  const modalRef= this.modalService.open(ModalConfirmActionComponent
  ,{centered : true});
  modalRef.componentInstance.car = car;
  modalRef.result.then(
    (carTemp)=> {
      this.carService.deleteCars(carTemp).subscribe(
        response => console.log(response)
      );
    },
    (reason) => console.log(reason)
    );
}
  getCars(): void {
    
    this.carService.getCars().subscribe((response)=>{
      setTimeout(() => { 
      this.displayProgressBar = false;
      this.cars = response.data; },1500)
    })
  }
}
