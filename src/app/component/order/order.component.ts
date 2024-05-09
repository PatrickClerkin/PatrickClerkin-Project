import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cartItems: MenuItem[] = []; // initialize as an empty array
  total: number = 0; // initialize total amount

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    // load cart items from the cart service
    this.cartItems = this.cartService.getCartItems();
    // calculate the total amount
    this.calculateTotal();
  }

  removeItem(item: MenuItem) {
    // remove item from the cart and reload the cart
    this.cartService.removeFromCart(item);
    this.loadCart();
  }

  calculateTotal() {
    // calculate the total amount based on cart items
    this.total = this.cartItems.reduce((acc, curr) => acc + curr.price, 0);
  }

  checkout() {
    // implement checkout logic here
    // for demonstration purposes, let's clear the cart after checkout
    this.cartService.clearCart();
    this.loadCart(); // reload the cart after checkout
    alert('Checkout successful! Thank you for your order.');
  }
}
