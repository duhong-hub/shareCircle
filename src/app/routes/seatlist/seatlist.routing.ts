import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatListComponent } from './seatlist.component';


const routes: Routes = [
  {  path:'**',component:SeatListComponent }
];

export const PageRoutes = RouterModule.forChild(routes);
