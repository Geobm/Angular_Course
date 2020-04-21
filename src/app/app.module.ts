import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { ModelsFormatPipe } from "./models-format.pipe";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { VIewsComponent } from "./views/views.component";
import { ListComponent } from "./List/list.component";
import { TableComponent } from "./table/table.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CarsService } from "./Services/cars.service";
import { ModalAddUpdateComponent } from "./modal-add-update/modal-add-update.component";
import { ModalConfirmActionComponent } from "./modal-confirm-action/modal-confirm-action.component";
import { ModalAddCarComponent } from "./modal-add-car/modal-add-car.component";
import { LogComponent } from "./log/log.component";
import { MessageService } from "./Services/message.service";
import { ForbiddenNameDirective } from './Directives/forbidden-name.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    VIewsComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalAddUpdateComponent,
    ModalConfirmActionComponent,
    ModalAddCarComponent,
    ModelsFormatPipe,
    LogComponent,
    ForbiddenNameDirective
  ],
  bootstrap: [AppComponent],
  providers: [CarsService, MessageService],
  entryComponents: [
    ModalAddUpdateComponent,
    ModalConfirmActionComponent,
    ModalAddCarComponent
  ]
})
export class AppModule {}
