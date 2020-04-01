import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../List/list.component';
import { TableComponent } from '../table/table.component'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LogComponent } from '../log/log.component';

const routes : Routes = [
{
  path:"",
  component: ListComponent
},
{
  path : 'List',
  component: ListComponent
}, 
{
  path :'table',
  component : TableComponent
},
{
  path :'log',
  component : LogComponent
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
