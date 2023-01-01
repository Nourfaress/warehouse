import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/app/models/item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  fullName: string = ''
  address: string = ''
  creditCard: string = ''
  totalPrice: number = 0


  constructor(private cartService: CartService,
        private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calPrice();
  }

  clearCart(): void {
    this.cartService.resetCart();
    this.items = [];
  }


  calPrice(): void {
    this.totalPrice = this.cartService.calTotal();
  }

  updateQuantity(): void {
    this.calPrice();
  }

  removeFromCart(item: Item): void {
    if (confirm(`are you sure want to remove ${item.product.name}?!`)){
      this.cartService.removeItem(item);
      this.items = this.cartService.getItems();
      this.calPrice();
      alert(`${item.product.name} removed.`);
    }
  }

  submit(): void {
    this.cartService.setFullName(this.fullName);
    this.calPrice();
    this.router.navigate(['confirmation'])
  }

}

