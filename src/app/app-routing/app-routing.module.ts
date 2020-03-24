import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../List/list.component';
import { TableComponent } from '../table/table.component'

const routes : Routes = [
{
  path : 'List',
  component: ListComponent
}, 
{
  path :'table',
  component : TableComponent
}
];

@NgModule({
  imports: [RouterModule ,
  RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }