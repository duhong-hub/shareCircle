import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceComponent } from './choice.component';


const routes: Routes = [
	{  path:'**',component:ChoiceComponent }
];

export const PageRoutes = RouterModule.forChild(routes);
