import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AllCustomerComponent } from './shared/component/all.customer/all.customer.component';
import { AddCarrierComponent } from './shared/component/carrier/add-carrier/add-carrier.component';
import { DeliveryFormComponent } from './shared/component/delivery-form/delivery-form.component';
import { ListCarrierComponent } from './shared/component/carrier/list-carrier/list-carrier.component';
import { UpdateCarriersComponent } from './shared/component/carrier/update-carriers/update-carriers.component';
import { CrudCarrierComponent } from './shared/component/carrier/crud-carrier/crud-carrier.component';

const routes: Routes = [
  { path: 'customers', component: AllCustomerComponent },

  { path: 'delivery-form', component: DeliveryFormComponent },

  { path: 'carrier', component: AddCarrierComponent },
  { path: 'list-carrier', component: ListCarrierComponent },
  { path: 'update-carrier', component: UpdateCarriersComponent },
  { path: 'crud-carrier', component: CrudCarrierComponent },

  { path: '**', redirectTo: 'customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
