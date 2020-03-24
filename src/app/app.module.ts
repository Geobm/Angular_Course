import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VIewsComponent } from './views/views.component';
import { ListComponent } from './List/list.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  declarations: [ AppComponent, HeaderComponent, VIewsComponent, ListComponent, TableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
