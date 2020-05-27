import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/webservice/customer.service';
import { Customer } from 'src/app/shared/interface/customer';
import { Address } from 'src/app/shared/interface/address';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog/public_api';
import { AddAdressFormCustomerComponent } from '../add-adress-form-customer/add-adress-form-customer.component';


@Component({
  selector: 'app-crud-customer',
  templateUrl: './crud-customer.component.html',
  styleUrls: ['./crud-customer.component.scss'],
  providers: [DialogService]
})
export class CrudCustomerComponent implements OnInit {

  displayDialog: boolean;
  customer: Customer;
  selectedCustomer: Customer;
  isNewCustomer: boolean;
  customers: Customer[];
  cols: any;
  newAddress: Address;

  ref: DynamicDialogRef;

  constructor(private customerService: CustomerService, public dialogService: DialogService) { }

  ngOnInit() {

    this.getAllCustomers();

    this.cols = [
      { field: 'customerNumber', header: 'Num Client' },
      { field: 'customerListDeliveryAddress', header: 'Adresses' },
      { field: 'phone', header: 'Telephone' },
      { field: 'contactName', header: 'Nom' },
      { field: 'arragement', header: 'Rangement' }
    ];
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(
      (reponse) => {
        this.customers = reponse;
      }, (error) => {
        console.error(error);
      }
    );
  }

  showDialogToAdd() {
    this.isNewCustomer = true;
    this.customer = {};
    this.newAddress = {};
    this.displayDialog = true;
    console.log(this.customer);
  }

  save() {
    const customers = [...this.customers];
    if (this.isNewCustomer) {
      if (this.customer.customerListDeliveryAddress === undefined) {
        this.customer.customerListDeliveryAddress = [];
      }
      this.customer.customerListDeliveryAddress.push(this.newAddress);
      customers.push(this.customer);

      // console.log('dans le save : ' + this.customer);
      // console.log('JSON Stringfy : ' + JSON.stringify(this.customer));

      this.customerService.addCustomer(this.customer).subscribe();
    } else {
      customers[this.customers.indexOf(this.selectedCustomer)] = this.customer;
      this.customerService.updateCustomer(this.customer).subscribe();
    }
    this.customers = customers;
    this.customer = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.customers.indexOf(this.selectedCustomer);
    this.customerService.deleteCustomer(this.customer.customerNumber).subscribe();
    this.customers = this.customers.filter((val, i) => i !== index);
    this.customer = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.isNewCustomer = false;
    this.customer = this.cloneCustomer(event.data);
    this.displayDialog = true;
  }
  cloneCustomer(c: Customer): Customer {
    let customer = {};
    for (let prop in c) {
      customer[prop] = c[prop];
    }
    return customer;
  }
  show() {
    console.warn('test show()');
    const ref = this.dialogService.open(
      AddAdressFormCustomerComponent, {
      header: 'Ajouter une adresse',
      height: 'auto'

    });

    ref.onClose.subscribe((address: Address) => {
      if (address) {
        this.customer.customerListDeliveryAddress.push(address);
      }
    });


  }
  
}
