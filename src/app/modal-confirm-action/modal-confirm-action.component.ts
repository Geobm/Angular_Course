import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from '../model';

@Component({
  selector: 'app-modal-confirm-action',
  templateUrl: './modal-confirm-action.component.html',
  styleUrls: ['./modal-confirm-action.component.css']
})
export class ModalConfirmActionComponent{

car : Car = {} as Car;
  constructor(public activeModal: NgbActiveModal) { }

}