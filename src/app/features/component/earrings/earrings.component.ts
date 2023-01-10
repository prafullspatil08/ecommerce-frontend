import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-earrings',
  templateUrl: './earrings.component.html',
  styleUrls: ['./earrings.component.scss']
})
export class EarringsComponent implements OnInit {
  
  productData: any = [];

  constructor(private product:ProductService, private cartService:CartService) { }

  ngOnInit(): void {

    this.product.getAllProduct().subscribe((res) => {
      localStorage.setItem('token','1234dvcf');
      this.productData = res;
      // this.filterCategory = res;
    });
  }

  addToCart(product : any) {
    // alert('product added to Cart ');
    this.cartService.addToCart(product);
  }
  
}
