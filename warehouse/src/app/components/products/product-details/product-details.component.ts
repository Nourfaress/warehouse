import { Component, OnInit } from '@angular/core';
import  {Product} from 'src/app/models/Product';
import Item from 'src/app/models/item';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';
import { AuthService } from 'src/app/service/auth.service';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  _id: string = '0';
  product: Product = new Product();
  quantity: number = 1;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  errorMessage: any;



  constructor(public authService: AuthService,
        private activeRoute: ActivatedRoute,
        private cartService: CartService,
        private productService: ProductService) {
        }

  ngOnInit(): void {
  const _id = String(this.activeRoute.snapshot.paramMap.get('_id'));
    if (_id) {
      this.getProduct(_id);
    }
}
getProduct(_id: string): void {
  this.productService.getProduct(_id).subscribe({
    next: product => this.product = product,
    error: err => this.errorMessage = err,

  })
}

  addItem(product: Product) {
  this.cartService.addItem(new Item(product, this.quantity))
  alert(`${product.name} added.`);
        }
}
