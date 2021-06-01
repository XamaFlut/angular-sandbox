import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { CarsComponent } from './components/cars/cars.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { UserComponent } from './components/user/user.component';
import { CarFormComponent } from './components/cars/car-form/car-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CarsComponent,
    NavComponent,
    ModalComponent,
    UserComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
