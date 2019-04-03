import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html'
})
export class MyBarChartComponent implements OnInit {

  chart = [];

  constructor() { }

  ngOnInit() {
    console.log('In OnLint');
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#3cba9f',
            backgroundColor: 'skyblue',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
