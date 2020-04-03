import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudCarrierComponent } from './shared/component/carrier/crud-carrier/crud-carrier.component';
import { CrudCustomerComponent } from './shared/component/customer/crud-customer/crud-customer.component';
import { CrudAddressComponent } from './shared/component/address/crud-address/crud-address.component';
import { CrudDeliveryComponent } from './shared/component/delivery/crud-delivery/crud-delivery.component';

const routes: Routes = [

  

  // { path: 'carrier', component: AddCarrierComponent },
  // { path: 'list-carrier', component: ListCarrierComponent },
  // { path: 'update-carrier', component: UpdateCarriersComponent },
  { path: 'crud-carrier', component: CrudCarrierComponent },
  { path: 'crud-address', component: CrudAddressComponent },
  { path: 'crud-customer', component: CrudCustomerComponent },
  { path: 'crud-delivery', component: CrudDeliveryComponent },
  { path: '**', redirectTo: 'crud-customer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
