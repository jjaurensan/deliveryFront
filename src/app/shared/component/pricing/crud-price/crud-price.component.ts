import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Price } from 'src/app/shared/interface/price';
import { PriceService } from 'src/app/shared/webservice/price.service';


@Component({
  selector: 'app-crud-price',
  templateUrl: './crud-price.component.html',
  styleUrls: ['./crud-price.component.scss']
})
export class CrudPriceComponent implements OnInit {

  @Output() addPrice = new EventEmitter<Price[]>();
  @Input() prices: Price[];
  // prices: Price[];
  displayDialog: boolean;

  price: Price = {};

  selectedPrice: Price;

  isNewPrice: boolean;

  cols: any[];
  test: Price[];
  constructor(private priceService: PriceService) { }

  ngOnInit() {
    // this.getAllPrice();
    this.cols = [
      { field: 'amount', header: 'Montant' },
      { field: 'minWeightValue', header: 'Poids min' },
      { field: 'maxWeightValue', header: 'Poids max' }
    ];
  }

  // getAllPrice() {
  //   this.priceService.getAllPrice().subscribe(
  //     (reponse) => {
  //       this.prices = reponse;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  showDialogToAdd() {
    this.isNewPrice = true;
    this.price = {};
    this.displayDialog = true;
  }

  save() {
    if (this.prices === undefined) {
      console.log("je suis undifened");
      this.prices = [];
    }
    const prices = [...this.prices];
    if (this.isNewPrice) {
      prices.push(this.price);
    } else {
      prices[this.prices.indexOf(this.selectedPrice)] = this.price;
    }
    
    this.prices = prices;
    this.price = null;
    this.displayDialog = false;
    this.onAddPrice();
  }

  delete() {
    let index = this.prices.indexOf(this.selectedPrice);
    this.prices = this.prices.filter((val, i) => i != index);
    this.price = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.isNewPrice = false;
    this.price = this.clonePrice(event.data);
    this.displayDialog = true;
  }

  clonePrice(p: Price): Price {
    let Price = {};
    for (let prop in p) {
      this.price[prop] = p[prop];
    }
    return this.price;
  }
  onAddPrice() {
    this.addPrice.emit(this.prices);
  }
}
