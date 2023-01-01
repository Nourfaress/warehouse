import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/Product'
import Item from '../../../models/item';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() added = new EventEmitter();

  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  quantity: number = 1;


  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  addItem(product: Product) {
    this.added.emit(new Item(product, this.quantity));
    alert(`${product.name} added.`);
  }
}

