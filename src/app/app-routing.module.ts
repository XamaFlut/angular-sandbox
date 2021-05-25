import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

const routes: Routes = [
  { path: 'hello', component: HelloWorldComponent },
  { path: 'car', component: CarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
