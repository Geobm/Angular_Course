import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from '../model';

@Component({
  selector: 'app-modal-add-car',
  templateUrl: './modal-add-car.component.html',
  styleUrls: ['./modal-add-car.component.css']
})
export class ModalAddCarComponent {
car : Car;
  constructor(public activeModal: NgbActiveModal) { }
}