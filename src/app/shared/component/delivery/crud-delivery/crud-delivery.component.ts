import { Component, OnInit } from '@angular/core';
import { Carrier } from 'src/app/shared/interface/carrier';
import { Customer } from 'src/app/shared/interface/customer';
import { Delivery } from 'src/app/shared/interface/delivery';
import { CarrierService } from 'src/app/shared/webservice/carrier.service';
import { CustomerService } from 'src/app/shared/webservice/customer.service';
import { DeliveryService } from 'src/app/shared/webservice/delivery.service';


@Component({
  selector: 'app-crud-delivery',
  templateUrl: './crud-delivery.component.html',
  styleUrls: ['./crud-delivery.component.scss']
})
export class CrudDeliveryComponent implements OnInit {

  displayDialog: boolean;
  delivery: Delivery;
  selectedDelivery: Delivery;
  isNewDelivery: boolean;
  allDelivery: Delivery[];
  cols: any;

  carriers: Carrier[];
  customers: Customer[];


  // tslint:disable-next-line: max-line-length
  constructor(private deliveryService: DeliveryService, private customerService: CustomerService, private carrierService: CarrierService) { }

  ngOnInit() {

    this.getAllDelivery();
    this.getAllCustomer();
    this.getAllCarrier();
    this.cols = [
      { field: 'idDelivery', header: 'Id Delivery' },
      { field: 'createDateDelivery', header: 'Date Crea' },
      { field: 'carrier', header: 'Livreur' },
      { field: 'customer', header: 'Client' },
      { field: 'numberOfPackage', header: 'Nb Colis' },
      { field: 'price', header: 'Montant' }
    ];
  }
  getAllCustomer() {
    this.customerService.getAllCustomers().subscribe(
      (reponse) => {
        this.customers = reponse;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getAllCarrier() {
    this.carrierService.getAllCarriers().subscribe(
      (reponse) => {
        this.carriers = reponse;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  getAllDelivery() {
    this.deliveryService.getAllDelivery().subscribe(
      (reponse) => {
        this.allDelivery = reponse;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showDialogToAdd() {
    this.isNewDelivery = true;
    this.delivery = {};
    this.displayDialog = true;
  }
  save() {
    const allDelivery = [...this.allDelivery];
    if (this.isNewDelivery) {
      console.log(this.delivery);
      this.deliveryService.addDelivery(this.delivery).subscribe(
        (reponse) => {
          this.delivery = reponse;
          allDelivery.push(this.delivery);
        }, (error) => {
          console.error(error);
        }
      );
    } else {
      allDelivery[this.allDelivery.indexOf(this.selectedDelivery)] = this.delivery;
      this.deliveryService.updateDelivery(this.delivery).subscribe();
    }

    this.allDelivery = allDelivery;
    this.delivery = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.allDelivery.indexOf(this.selectedDelivery);
    this.deliveryService.deleteDelivery(this.delivery.idDelivery).subscribe();
    this.allDelivery = this.allDelivery.filter((val, i) => i !== index);
    this.delivery = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.isNewDelivery = false;
    this.delivery = this.cloneDelivery(event.data);
    this.displayDialog = true;
  }
  cloneDelivery(d: Delivery): Delivery {
    const delivery = {};
    // tslint:disable-next-line: forin
    for (const prop in d) {
      delivery[prop] = d[prop];
    }
    return delivery;
  }
}
