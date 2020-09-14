import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneSelfComponent } from './oneself.component';


const routes: Routes = [
	{  path:'**',component:OneSelfComponent }
];

export const PageRoutes = RouterModule.forChild(routes);
