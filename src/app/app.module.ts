import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VIewsComponent } from './views/views.component';
import { ListComponent } from './List/list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule],
  declarations: [ AppComponent, HeaderComponent, VIewsComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
