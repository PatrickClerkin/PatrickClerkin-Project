import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from  '../../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://foodish-api.com/'; 

  constructor(private http: HttpClient) { }

  // Get menu items with optional query parameters
  getMenuItems(params?: HttpParams): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl, { params });
  }

  // Get a single menu item by ID
  getMenuItemById(id: number): Observable<MenuItem> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<MenuItem>(url);
  }

  // Add a new menu item
  addMenuItem(item: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(this.apiUrl, item);
  }

  // Update an existing menu item
  updateMenuItem(id: number, item: MenuItem): Observable<MenuItem> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<MenuItem>(url, item);
  }

  // Delete a menu item by ID
  deleteMenuItem(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
