import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productData : any = [];

  constructor(private product:ProductService,private router:ActivatedRoute) {  }

  ngOnInit(): void {
    this.product.getProductById(this.router.snapshot.params['id'])
    .subscribe((resp)=> {
     this.productData = resp; 
    });
  }
  
}