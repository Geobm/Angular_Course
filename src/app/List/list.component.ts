import { Component, OnInit } from '@angular/core';
import {Car }from '../model';
import {CARS }from '../data';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;
  closeResult = '';

  constructor(private modalService : NgbModal) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.cars = CARS;
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