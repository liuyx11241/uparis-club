import { Component } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .grid-container {
        margin: 20px;
      }
      
      .dashboard-card {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
      }
      
      .more-button {
        position: absolute;
        top: 5px;
        right: 10px;
      }

      .dashboard-card-content {
        text-align: center;
      }
  `
  ]
})
export class DashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
