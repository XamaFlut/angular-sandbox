import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './components/cars/car-form/car-form.component';
import { CarsComponent } from './components/cars/cars.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { StarshipDetailComponent } from './components/starships/starship-detail/starship-detail.component';
import { StarshipsComponent } from './components/starships/starships/starships.component';
import { ListComponent } from './components/user/list/list.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: 'hello', component: HelloWorldComponent, canActivate: [RoleGuard], data: { role:'admin'} },
  { path: 'car', component: CarsComponent},
  { path: 'profile', component: UserComponent},
  { path: 'car/add', component: CarFormComponent, canActivate: [ AuthGuard]},
  { path: 'car/edit/:slug', component: CarFormComponent},
  { path: 'users', component: ListComponent },
  { path: 'starships', component: StarshipsComponent, 
    children: [ 
      { path: ':id', component: StarshipDetailComponent }
    ]},
  { path: 'signup', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
