import { Component, OnInit } from '@angular/core';
//import { Address } from 'src/app/shared/interface/address';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AddressService } from 'src/app/shared/webservice/address.service';
import { Address } from 'src/app/shared/class/address';

@Component({
  selector: 'app-add-adress-form-customer',
  templateUrl: './add-adress-form-customer.component.html',
  styleUrls: ['./add-adress-form-customer.component.scss']
})
export class AddAdressFormCustomerComponent implements OnInit {

  newAddress = new Address();
  constructor(private addressService: AddressService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }
  addCustomerAddress() {
    this.ref.close(this.newAddress);
  }
}
