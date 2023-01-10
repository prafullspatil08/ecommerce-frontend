import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.scss']
})
export class RingComponent implements OnInit {
 
  productData: any = [];

  constructor(private product:ProductService, private cartService:CartService) { }

  ngOnInit(): void {

    this.product.getAllProduct().subscribe((res) => {
      this.productData = res;
    
    });
  }

  addToCart(product : any) {

    this.cartService.addToCart(product);
  }
  
}