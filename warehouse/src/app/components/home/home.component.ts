import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ProductService } from 'src/app/service/product.service';
import Item from '../../models/item';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(public authService: AuthService,
    private productSevice: ProductService,
      private cartService: CartService) { }

  ngOnInit(): void {
    this.productSevice.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  addToCart(item: Item) {
    this.cartService.addItem(item);
  }
  }


