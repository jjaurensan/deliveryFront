import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';

/****** COMPONENTS *******/
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DeliveryFormComponent } from './shared/component/delivery-form/delivery-form.component';
import { AllCustomerComponent } from './shared/component/all.customer/all.customer.component';
import { AddCarrierComponent } from './shared/component/carrier/add-carrier/add-carrier.component';
import { ListCarrierComponent } from './shared/component/carrier/list-carrier/list-carrier.component';
import { UpdateCarriersComponent } from './shared/component/carrier/update-carriers/update-carriers.component';
import { CrudCarrierComponent } from './shared/component/carrier/crud-carrier/crud-carrier.component';



/***SERVICE*******/
import { CustomerService } from './shared/webservice/customer.service';
import { DeliveryService } from './shared/webservice/delivery.service';
import { CarrierService } from './shared/webservice/carrier.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeliveryFormComponent,
    AllCustomerComponent,
    AddCarrierComponent,
    ListCarrierComponent,
    UpdateCarriersComponent,
    CrudCarrierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    FieldsetModule,
    TableModule,
    CheckboxModule,
    MenubarModule,
    PanelModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [
    CustomerService,
    DeliveryService,
    CarrierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
