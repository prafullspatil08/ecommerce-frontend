import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.scss']
})
export class BraceletComponent implements OnInit {
 
  productData: any = [];

  constructor(private product:ProductService, private cartService:CartService) { }

  ngOnInit(): void {

    this.product.getAllProduct().subscribe((res) => {
      this.productData = res;
      // this.filterCategory = res;
    });
  }

  addToCart(product : any) {
    // alert('product added to Cart ');
    this.cartService.addToCart(product);
  }
  
}
