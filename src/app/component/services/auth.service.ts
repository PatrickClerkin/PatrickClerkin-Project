import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from  '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://foodish-api.com/';
  private currentUser: User | null = null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(user => {
        this.setCurrentUser(user);
        return user;
      }),
      catchError(error => {
        // Handle login error
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  logout(): void {
    // Implement logout logic, clear user session or token
    this.setCurrentUser(null);
  }

  getCurrentUser(): Observable<User | null> {
    if (this.currentUser) {
      return of(this.currentUser);
    } else {
      // Fetch current user from session or token
      // Replace the following line with your actual logic
      return this.http.get<User>(`${this.apiUrl}/user`).pipe(
        map(user => {
          this.setCurrentUser(user);
          return user;
        }),
        catchError(error => {
          // Handle error fetching current user
          console.error('Error fetching current user:', error);
          return of(null);
        })
      );
    }
  }

  private setCurrentUser(user: User | null): void {
    this.currentUser = user;
  }
}
