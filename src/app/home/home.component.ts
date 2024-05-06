// home.component.ts

import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  orders: any[] = [];
  expandedOrderIndex: number = -1;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Fout bij het ophalen van de bestellingen:', error);
      }
    );
  }

  toggleOrder(index: number) {
    if (this.expandedOrderIndex === index) {
      this.expandedOrderIndex = -1; // Collapse the currently expanded order
    } else {
      this.expandedOrderIndex = index; // Expand the clicked order
    }
  }
}
