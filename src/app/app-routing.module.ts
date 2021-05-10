import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { CreateslotComponent } from './home/createslot/createslot.component';
const routes: Routes = [

{
      path: 'home',
      children: [
      {
          path: '',
          component: AppointmentsComponent
        },
        {
          path: 'slot',
          component: CreateslotComponent
        },
        
    ]
 
  },{
    path: '',
  component: AppointmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
