import { Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddEditComponent
  },
];
