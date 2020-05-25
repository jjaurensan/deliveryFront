import { Component, OnInit, Injectable } from '@angular/core';
import { Carrier } from '../../interface/carrier';
import { CarrierService } from '../../webservice/carrier.service';
import { HttpHeaders } from '@angular/common/http';
import { PrintService } from '../../webservice/print.service';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.scss']
})

export class PrintingComponent implements OnInit {

  dateDeliveryPrinting: Date;
  carriers: Carrier[];
  carrier: Carrier;
  pdfFile: File[];
  constructor(private carrierService: CarrierService, private printService: PrintService) { }

  ngOnInit(): void {

    this.getAllCarrier();
  }
  printFileGeneration() {
    // this.printService.getPrintFile(this.carrier, this.dateDeliveryPrinting).subscribe(
    //   (reponse) => {
    //     this.pdfFile = reponse;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
    // console.log('Fichiers nombre : ' + this.pdfFile.length);
    this.printService.getPDF(this.carrier, this.dateDeliveryPrinting)
      .subscribe((data: Blob) => {
        var file = new Blob([data], { type: 'application/pdf' })
        var fileURL = URL.createObjectURL(file);

        // if you want to open PDF in new tab
        window.open(fileURL);
        var a = document.createElement('a');
        a.href = fileURL;
        a.target = '_blank';
        a.download = 'bill.pdf';
        document.body.appendChild(a);
        a.click();
      },
        (error) => {
          console.log('getPDF error: ', error);
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
}
