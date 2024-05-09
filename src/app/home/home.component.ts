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
    this.fetchOrders(); // Haal orders op bij initialisatie
  }

  fetchOrders() {
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
      this.expandedOrderIndex = -1; 
    } else {
      this.expandedOrderIndex = index;
    }
  }

  markOrderAsDone(orderId: number) {
    this.orderService.markOrderAsDone(orderId).subscribe(
      () => {
        // Verwijder de voltooide order uit de lijst
        this.orders = this.orders.filter(order => order.id !== orderId);
        
        // Haal een nieuwe lijst met orders op na het verwijderen
        this.fetchOrders();
      },
      (error) => {
        console.error('Fout bij het voltooien van de bestelling:', error);
      }
    );
  }
}
