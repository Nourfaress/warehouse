import { Component, OnInit, ViewChild} from '@angular/core';
import  {Product} from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
products: any;
product: any;
image?: File | any;



  constructor(public authService: AuthService,
    private productService: ProductService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  onDelete(_id: string){
    this.productService.RemoveProduct(_id)
    this.router.navigate(['dashboard']);
    return Product
  }

  // file listener
onFileChange(event: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.image = file
  }
  }

  SubmitData(form: { value:  any}){
  const data = new FormData();

  data.append('name', form.value.name);
  data.append('description', form.value.description);
  data.append('richDescription', form.value.richDescription);
  data.append('brand', form.value.brand);
  data.append('price', form.value.price);
  data.append('category', form.value.category);
  data.append('countInStock', form.value.countInStock);
  data.append('image', this.image);
    this.productService.postProduct(data).subscribe(response => {
      console.log(response);
      });
  }


}



