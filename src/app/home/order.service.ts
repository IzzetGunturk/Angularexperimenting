import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  markOrderAsDone(orderId: number): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.delete<any>(url); // Assumptie: DELETE-request om een order te verwijderen
  }
}
