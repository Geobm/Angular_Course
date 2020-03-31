import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VIewsComponent } from './views/views.component';
import { ListComponent } from './List/list.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarsService } from './Services/cars.service';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from './modal-confirm-action/modal-confirm-action.component';
import { ModalAddCarComponent } from './modal-add-car/modal-add-car.component';
import { ModelsFormatPipe } from './models-format.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, AppRoutingModule,HttpClientModule,],
  declarations: [ AppComponent, HeaderComponent, VIewsComponent, ListComponent, TableComponent, PageNotFoundComponent, ModalAddUpdateComponent, ModalConfirmActionComponent, ModalAddCarComponent, ModelsFormatPipe ],
  bootstrap:    [ AppComponent ],
  providers: [CarsService],
  entryComponents : [ModalAddUpdateComponent,ModalConfirmActionComponent,ModalAddCarComponent]
})
export class AppModule { }
