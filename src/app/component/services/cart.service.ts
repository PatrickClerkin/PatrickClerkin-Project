import { Injectable } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: MenuItem[] = [];

  constructor() {}

  addToCart(item: MenuItem) {
    this.cartItems.push(item);
  }

  removeFromCart(item: MenuItem) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems(): MenuItem[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
