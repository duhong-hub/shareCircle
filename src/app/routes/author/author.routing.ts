import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author.component';


const routes: Routes = [
	{ path:'**',component:AuthorComponent }
];

export const PageRoutes = RouterModule.forChild(routes);
