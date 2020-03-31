import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryFormComponent } from './shared/component/delivery-form/delivery-form.component';
import { CrudCarrierComponent } from './shared/component/carrier/crud-carrier/crud-carrier.component';
import { CrudCustomerComponent } from './shared/component/customer/crud-customer/crud-customer.component';
import { CrudAddressComponent } from './shared/component/address/crud-address/crud-address.component';

const routes: Routes = [

  { path: 'delivery-form', component: DeliveryFormComponent },

  // { path: 'carrier', component: AddCarrierComponent },
  // { path: 'list-carrier', component: ListCarrierComponent },
  // { path: 'update-carrier', component: UpdateCarriersComponent },
  { path: 'crud-carrier', component: CrudCarrierComponent },
  { path: 'crud-address', component: CrudAddressComponent },
  { path: 'crud-customer', component: CrudCustomerComponent },

  { path: '**', redirectTo: 'crud-customer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
