import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../webservice/customer.service';
import { Customer } from '../../class/customer';


@Component({
  selector: 'app-all.customer',
  templateUrl: './all.customer.component.html',
  styleUrls: ['./all.customer.component.scss']
})
export class AllCustomerComponent implements OnInit {
  customers: Customer[];
  cols: any[];

  first = 0;
  rows = 10;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();

    this.cols = [
      { field: 'customerNumber', header: 'Num Client' },
      { field: 'contactName', header: 'Nom Contact' },
      { field: 'customerListDeliveryAddress', header: 'Address' },
      { field: 'phone', header: 'Telephone' },
      { field: 'arragement', header: 'Rangement' }
    ];
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.first === (this.customers.length - this.rows);
  }

  isFirstPage(): boolean {
    return this.first === 0;
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
}
