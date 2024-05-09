import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../../models/menu-item.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = []; // initialize menuItems with an empty array
  loading = false;
  error = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadMenu();
  }

  loadMenu() {
    // function to load menu items from the API
    this.loading = true; // set loading state to true
    this.http.get<MenuItem[]>('https://foodish-api.com/')
      .pipe(
        map(data => {
          // simulate pagination: take the first 10 items
          return data.slice(0, 10);
        }),
        catchError(error => {
          // handle error if failed to load menu items
          this.loading = false; // set loading state to false
          this.error = 'Failed to load menu items.'; // set error message
          return throwError(error); // return observable with error
        })
      )
      .subscribe({
        next: (data) => {
          // on successful response, update menuItems and loading state
          this.menuItems = data;
          this.loading = false;
        },
        error: (err) => {
          // on error response, set error message and loading state to false
          this.error = 'Failed to load menu items.';
          this.loading = false;
        }
      });
  }

}
