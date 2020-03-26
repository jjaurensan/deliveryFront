import { Component, OnInit } from '@angular/core';
import { Carrier } from 'src/app/shared/class/carrier';
import { CarrierService } from 'src/app/shared/webservice/carrier.service';

@Component({
  selector: 'app-list-carrier',
  templateUrl: './list-carrier.component.html',
  styleUrls: ['./list-carrier.component.scss']
})
export class ListCarrierComponent implements OnInit {
  carriers: Carrier[];
  cols: any[];

  first = 0;
  rows = 10;


  constructor(private carrierService: CarrierService) { }

  ngOnInit() {
    this.getAllCarrier();

    this.cols = [
      { field: 'name', header: 'Nom' },
      { field: 'streetOne', header: 'Rue 1' },
      { field: 'streetTwo', header: 'Rue 2' },
      { field: 'cityCode', header: 'Code Postale' },
      { field: 'city', header: 'Ville' },
      { field: 'phone', header: 'Telephone' }
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
    return this.first === (this.carriers.length - this.rows);
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }
  getAllCarrier() {
    this.carrierService.getAllCarriers().subscribe(
      (reponse) => {
        this.carriers = reponse;
      }, (error) => {
        console.error(error);
      }
    );

  }

}
