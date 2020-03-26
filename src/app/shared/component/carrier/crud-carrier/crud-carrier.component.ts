import { Component, OnInit } from '@angular/core';
import { Carrier } from 'src/app/shared/class/carrier';
import { CarrierService } from 'src/app/shared/webservice/carrier.service';

@Component({
  selector: 'app-crud-carrier',
  templateUrl: './crud-carrier.component.html',
  styleUrls: ['./crud-carrier.component.scss']
})
export class CrudCarrierComponent implements OnInit {

  displayDialog: boolean;
  carrier: Carrier;
  selectedCarrier: Carrier;
  newCarrier: boolean;
  carriers: Carrier[];
  cols: any;

  constructor(private carrierService: CarrierService) { }

  ngOnInit() {

    this.getAllCarriers();

    this.cols = [
      { field: 'name', header: 'Nom' },
      { field: 'streetOne', header: 'Rue 1' },
      { field: 'streetTwo', header: 'Rue 2' },
      { field: 'cityCode', header: 'Code Postale' },
      { field: 'city', header: 'Ville' },
      { field: 'phone', header: 'Telephone' }
    ];
  }

  getAllCarriers() {
    this.carrierService.getAllCarriers().subscribe(
      (reponse) => {
        this.carriers = reponse;
      }, (error) => {
        console.error(error);
      }
    );
  }


  showDialogToAdd() {
    this.newCarrier = true;
    this.carrier = {};
    this.displayDialog = true;
  }

  save() {
    const carriers = [...this.carriers];
    if (this.newCarrier) {
      carriers.push(this.carrier);
      this.carrierService.addCarrier(this.carrier).subscribe();
    } else {
      carriers[this.carriers.indexOf(this.selectedCarrier)] = this.carrier;
      this.carrierService.updateCarrier(this.carrier).subscribe();
    }

    this.carriers = carriers;
    this.carrier = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.carriers.indexOf(this.selectedCarrier);
    this.carrierService.deleteCarrier(this.carrier).subscribe();
    this.carriers = this.carriers.filter((val, i) => i !== index);
    this.carrier = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCarrier = false;
    this.carrier = this.cloneCarrier(event.data);
    this.displayDialog = true;
  }
  cloneCarrier(c: Carrier): Carrier {
    let carrier = {};
    for (let prop in c) {
      carrier[prop] = c[prop];
    }
    return carrier;
  }
}
