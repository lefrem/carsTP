import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { EditComponent } from './components/edit/edit.component';
import { ManagementComponent } from './components/management/management.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent
  },
  {
    path: 'carDetail/:id',
    component: CarComponent
  },
  {
    path: 'mangement',
    component: ManagementComponent
  },
  {
    path: 'carEdit/:id',
    component: EditComponent
  },
  {
    path: '**',
    component: CarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
