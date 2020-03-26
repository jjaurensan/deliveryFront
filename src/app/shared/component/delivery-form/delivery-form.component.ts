import { Component, OnInit, Injectable } from '@angular/core';
import { CustomerService } from '../../webservice/customer.service';
import { Customer } from '../../class/customer';
import { Address } from '../../class/address';


@Injectable()
@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent implements OnInit {

  customerNumber = '';
  public customer: Customer;
  cols: any[];
  selectedAddress: Address;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.cols = [
      { field: 'idAddress', header: 'id' },
      { field: 'streetOne', header: 'Rue 1' },
      { field: 'streetTwo', header: 'Rue 2' },
      { field: 'streetThree', header: 'Rue 3' },
      { field: 'zipCode', header: 'Code Postale' },
      { field: 'city', header: 'Ville' },
      { field: 'floor', header: 'Etage' },

    ];
  }


  getUser(customerNumber) {
    this.customerService.getCustomerByNumber(customerNumber).subscribe(
      (reponse) => {
        // getUsers Next
        console.log('TestWebServiceComponent getUsers', reponse);
        console.log(this.cols);
        this.customer = reponse;
      }, (error) => {
        console.error(error);
      }
    );
  }

}
