import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetListComponent } from './meetlist.component';


const routes: Routes = [
  {  path:'**',component:MeetListComponent }
];

export const PageRoutes = RouterModule.forChild(routes);
