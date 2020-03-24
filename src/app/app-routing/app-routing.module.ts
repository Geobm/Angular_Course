import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../List/list.component';
import { TableComponent } from '../table/table.component'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes : Routes = [
{
  path : 'List',
  component: ListComponent
}, 
{
  path :'table',
  component : TableComponent
},
{
path : "**",
component : PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule ,
  RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }