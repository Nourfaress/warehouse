import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  image: any;
  products: any;
product: any;

  constructor(public productService: ProductService,
        public route: ActivatedRoute,
        public router: Router) { }

  ngOnInit(): void {
  }
  onEditChange(_id: string){
    let currentProduct = this.products.find((p: { _id: string; })=> {return p._id === _id});
    console.log(currentProduct);
    this.productService.updateProduct(_id).subscribe(response => {
      console.log(response);
      });
  }

}
