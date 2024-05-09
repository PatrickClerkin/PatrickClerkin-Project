import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User | null = null; // Initialize with null
  loading: boolean = false;
  error: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.loading = true;
    this.error = null;
    this.authService.getCurrentUser()
      .subscribe(
        (user: User | null) => { // Modify callback function to accept User | null
          if (user) {
            this.user = user;
          } else {
            this.error = 'User not found.';
          }
          this.loading = false;
        },
        (error: any) => {
          this.error = 'Failed to load profile. Please try again.';
          this.loading = false;
        }
      );
  }

  logout() {
    this.authService.logout();
  }
}
