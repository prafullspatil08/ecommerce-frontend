import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.scss']
})
export class NecklaceComponent implements OnInit {
 
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
