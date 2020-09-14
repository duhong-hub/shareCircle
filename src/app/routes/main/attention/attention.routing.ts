import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttentionComponent } from './attention.component';


const routes: Routes = [
	{  path:'**',component:AttentionComponent }
];

export const PageRoutes = RouterModule.forChild(routes);
