import { Component, OnInit } from '@angular/core';
import {Car }from '../model';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarsService } from '../Services/cars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;
  closeResult = '';

  constructor(private modalService : NgbModal, private carService: CarsService) { }

  ngOnInit() {
    
    this.getCars();
  }

  getCars(): void {
    
    this.carService.getCars().subscribe((carsTemp)=>{
      this.cars = carsTemp.data;
    })
  }

  onSelect(car: Car, content): void {
    this.selectedCar = car;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  open(car: Car, Modalcar) {
    this.selectedCar = car;

    this.modalService.open(Modalcar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
