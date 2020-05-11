import { Component, OnInit } from '@angular/core';
import { StatService } from '../../webservice/stat.service';
import { YearStat } from '../../interface/year-stat';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  data: any;
  yearData: any;
  yearTest: YearStat[];

  constructor(private statService: StatService) { }

  ngOnInit() {

    this.statService.getStatYear(2020).subscribe(
      (reponse) => {
        let testLabel: any[] = [];
        let testAmount: number[] = [];
        for (const month of reponse) {
          testLabel.push(month.month);
          testAmount.push(month.amount);
        }

        this.data = {
          labels: testLabel,
          datasets: [
            {
              label: '2020',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: testAmount
            }
          ]
        };

      },
      (error) => {
        console.error(error);
      }
    );

  }

}
