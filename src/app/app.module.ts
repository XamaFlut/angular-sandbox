import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { CarsComponent } from './components/cars/cars.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { UserComponent } from './components/user/user.component';
import { CarFormComponent } from './components/cars/car-form/car-form.component';
import { NgxLoadingModule } from 'ngx-loading';
import { InterceptorsProviders } from './interceptors/interceptors';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { UploadDirective } from './directives/upload.directive';
import { ListComponent } from './components/user/list/list.component';
import { CardListTemplateComponent } from './components/shared/card-list-template/card-list-template.component';
import { StarshipsComponent } from './components/starships/starships/starships.component';
import { StarshipDetailComponent } from './components/starships/starship-detail/starship-detail.component';
import { RegisterComponent } from './components/user/register/register.component';
import { PasswordPeakDirective } from './directives/password-peak.directive';
import { ChatComponent } from './components/chat/chat.component';
import { ChatModalComponent } from './components/shared/chat-modal/chat-modal.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/cart.reducer';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CarsComponent,
    NavComponent,
    ModalComponent,
    UserComponent,
    CarFormComponent,
    LoadingComponent,
    UploadDirective,
    ListComponent,
    CardListTemplateComponent,
    StarshipsComponent,
    StarshipDetailComponent,
    RegisterComponent,
    PasswordPeakDirective,
    ChatComponent,
    ChatModalComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    StoreModule.forRoot({ cart:reducer })
  ],
  providers: [
    InterceptorsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
