import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatBindComponent } from './seatbind.component';


const routes: Routes = [
  {  path:'**',component:SeatBindComponent }
];

export const PageRoutes = RouterModule.forChild(routes);
