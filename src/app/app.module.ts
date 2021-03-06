import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { SpinnerModule } from 'primeng/spinner';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';

/****** COMPONENTS *******/
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
//import { DeliveryFormComponent } from './shared/component/delivery-form/delivery-form.component';
//import { AllCustomerComponent } from './shared/component/all.customer/all.customer.component';

import { CrudCarrierComponent } from './shared/component/carrier/crud-carrier/crud-carrier.component';
import { CrudCustomerComponent } from './shared/component/customer/crud-customer/crud-customer.component';
import { CrudAddressComponent } from './shared/component/address/crud-address/crud-address.component';
import { CrudDeliveryComponent } from './shared/component/delivery/crud-delivery/crud-delivery.component';
import { CrudPricingComponent } from './shared/component/pricing/crud-pricing/crud-pricing.component';
import { CrudPriceComponent } from './shared/component/pricing/crud-price/crud-price.component';
import { StatComponent } from './shared/component/stat/stat.component';
import { PrintingComponent } from './shared/component/printing/printing.component';


/***SERVICE*******/
import { CustomerService } from './shared/webservice/customer.service';
import { DeliveryService } from './shared/webservice/delivery.service';
import { CarrierService } from './shared/webservice/carrier.service';
import { AddressService } from './shared/webservice/address.service';
import { PricingService } from './shared/webservice/pricing.service';
import { PriceService } from './shared/webservice/price.service';
import { StatService } from './shared/webservice/stat.service';
import { PrintService } from './shared/webservice/print.service';


import { AddAdressFormCustomerComponent } from './shared/component/customer/add-adress-form-customer/add-adress-form-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    
    CrudCarrierComponent,
    CrudCustomerComponent,
    CrudAddressComponent,
    CrudDeliveryComponent,
    CrudPricingComponent,
    CrudPriceComponent,
    StatComponent,
    PrintingComponent,
    AddAdressFormCustomerComponent
  ],
  entryComponents:[
    AddAdressFormCustomerComponent
  ]
  ,
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
    DialogModule,
    CalendarModule,
    SpinnerModule,
    DropdownModule,
    ChartModule,
    DynamicDialogModule
  ],
  providers: [
    CustomerService,
    DeliveryService,
    CarrierService,
    AddressService,
    PricingService,
    PriceService,
    StatService,
    DatePipe,
    PrintService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
