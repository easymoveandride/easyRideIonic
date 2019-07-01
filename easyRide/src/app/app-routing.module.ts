import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './user/login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './user/registration/registration.module#RegistrationPageModule' },
  { path: 'selection', loadChildren: './allPages/selection/selection.module#SelectionPageModule' },
  { path: 'from-where', loadChildren: './allPages/fromWhere/from-where/from-where.module#FromWherePageModule' },
  { path: 'cars', loadChildren: './allPages/cars/cars.module#CarsPageModule' },
  { path: 'driver-choice', loadChildren: './allPages/driver-choice/driver-choice.module#DriverChoicePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
