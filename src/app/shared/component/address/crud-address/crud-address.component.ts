import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/shared/webservice/address.service';
import { Address } from 'src/app/shared/interface/address';

@Component({
  selector: 'app-crud-address',
  templateUrl: './crud-address.component.html',
  styleUrls: ['./crud-address.component.scss']
})
export class CrudAddressComponent implements OnInit {

  displayDialog: boolean;
  address: Address;
  selectedAddress: Address;
  isNewAddress: boolean;
  allAddress: Address[];
  cols: any;

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.getAllAddress();

    this.cols = [
      { field: 'idAddress', header: 'Id Address' },
      { field: 'streetOne', header: 'Rue 1' },
      { field: 'streetTwo', header: 'Rue 2' },
      { field: 'streetThree', header: 'Rue 3' },
      { field: 'zipCode', header: 'Code Postale' },
      { field: 'city', header: 'Ville' },
      { field: 'floor', header: 'Etage' }
    ];
  }
  getAllAddress() {
    this.addressService.getAllAddress().subscribe(
      (reponse) => {
        this.allAddress = reponse;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showDialogToAdd() {
    this.isNewAddress = true;
    this.address = {};
    this.displayDialog = true;
  }

  save() {
    const allAddress = [...this.allAddress];
    if (this.isNewAddress) {
      allAddress.push(this.address);
      this.addressService.addAddress(this.address).subscribe();
    } else {
      allAddress[this.allAddress.indexOf(this.selectedAddress)] = this.address;
      this.addressService.updateAddress(this.address).subscribe();
    }

    this.allAddress = allAddress;
    this.address = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.allAddress.indexOf(this.selectedAddress);
    this.addressService.deleteAddress(this.address).subscribe();
    this.allAddress = this.allAddress.filter((val, i) => i !== index);
    this.address = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.isNewAddress = false;
    this.address = this.cloneAddress(event.data);
    this.displayDialog = true;
  }
  cloneAddress(a: Address): Address {
    const address = {};
    // tslint:disable-next-line: forin
    for (const prop in a) {
      address[prop] = a[prop];
    }
    return address;
  }

  //end
}
