import { Component, OnInit } from '@angular/core';
import { Carrier } from 'src/app/shared/interface/carrier';
import { Price } from 'src/app/shared/interface/price';
import { Pricing } from 'src/app/shared/interface/pricing';
import { CarrierService } from 'src/app/shared/webservice/carrier.service';
import { PricingService } from 'src/app/shared/webservice/pricing.service';


@Component({
  selector: 'app-crud-pricing',
  templateUrl: './crud-pricing.component.html',
  styleUrls: ['./crud-pricing.component.scss']
})
export class CrudPricingComponent implements OnInit {

  displayDialog: boolean;
  pricing: Pricing;
  selectPricing: Pricing;
  pricings: Pricing[];
  isNewPricing: boolean;
  cols: any;
  newPrice: Price;

  carriers: Carrier[];


  constructor(private pricingService: PricingService, private carrierService: CarrierService) { }

  ngOnInit() {

    this.getAllPricing();
    this.getAllCarrier();

    this.cols = [
      { field: 'idPricing', header: 'Index' },
      { field: 'arragement', header: 'Rangement' },
      { field: 'floor', header: 'Etage' },
      { field: 'listPrice', header: 'Liste Prix' },
      { field: 'carrier', header: 'Livreur' }
    ];

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

  getAllPricing() {
    this.pricingService.getAllPricing().subscribe(
      (reponse) => {
        this.pricings = reponse;
      }, (error) => {
        console.error(error);
      }
    );
  }

  showDialogToAdd() {
    this.isNewPricing = true;
    this.pricing = {};
    this.newPrice = {};
    this.displayDialog = true;
    console.log(this.pricing);
  }

  save() {
    const pricings = [...this.pricings];
    if (this.isNewPricing) {
      if (this.pricing.listPrice === undefined) {
        this.pricing.listPrice = [];
      }
      this.pricing.listPrice.push(this.newPrice);
      pricings.push(this.pricing);

      console.log('dans le save : ' + this.pricing);
      // console.log('JSON Stringfy : ' + JSON.stringify(this.customer));

      this.pricingService.addPricing(this.pricing).subscribe();
    } else {
      pricings[this.pricings.indexOf(this.selectPricing)] = this.pricing;
      this.pricingService.updatePricing(this.pricing).subscribe();
    }
    this.pricings = pricings;
    this.pricing = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.pricings.indexOf(this.selectPricing);
    this.pricingService.deletePricing(this.pricing.idPricing).subscribe();
    this.pricings = this.pricings.filter((val, i) => i !== index);
    this.pricing = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.isNewPricing = false;
    this.pricing = this.clonePricing(event.data);
    this.displayDialog = true;
  }


  clonePricing(p: Pricing): Pricing {
    let pricing = {};
    for (let prop in p) {
      pricing[prop] = p[prop];
    }
    return pricing;
  }
  addPrice(event) {
    console.log(event);
    this.pricing.listPrice = event;
  }
}
