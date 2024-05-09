// import necessary modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home', // component selector
  templateUrl: './home.component.html', // HTML template file
  styleUrls: ['./home.component.scss'] // SCSS style file
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null; // current user initialized as null
  error: string | null = null; // error message initialized as null

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getCurrentUser(); // fetch current user information on component initialization
  }

  getCurrentUser(): void {
    // retrieve current user information from AuthService
    this.authService.getCurrentUser().subscribe(
      (user: User | null) => {
        this.currentUser = user; // update current user
      },
      (error: any) => {
        // handle error if unable to fetch user information
        this.error = "Failed to fetch user information. Please try again later.";
      }
    );
  }

  goToMenu(): void {
    this.router.navigate(['/menu']); // navigate to the menu page
  }

  goToOrder(): void {
    this.router.navigate(['/order']); // navigate to the order page
  }

  logout(): void {
    this.authService.logout(); // call logout method from AuthService
    this.router.navigate(['/login']); // redirect to login page after logout
  }
}
