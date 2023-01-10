import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  product :any=[];
  totalPrice:any;
  discountValue = 0;
  necklacesCount = 0;
  earringsCount = 0;
  ringsCount = 0;
  braceletsCount = 0;
  netPrice = 0;
  couponCode = "";
  isCouponApplied: boolean = false;

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.product=res;
    }); 
    
    this.cartService.getCartTotalPrice().subscribe((res)=>{
      this.totalPrice=res;
    });

    this.cartService.getTotalPrice(this.product);
    
    this.product.forEach((item: any) => {
      let productCategory = item.category;
      if (productCategory == 'necklace') {
        this.necklacesCount++;
      } else if (productCategory == 'earring') {
        this.earringsCount++;
      } else if (productCategory == 'rings') {
        this.ringsCount++;
      } else if (productCategory == 'bracelet') {
        this.braceletsCount++;
      }
    });

  }

  //Removing product from cart
  removeCartItem(item:number){
    this.product.splice(item,1);
    this.cartService.getTotalPrice(this.product);
    this.cartService.itemCount.next(this.product.length);
  }

  applyCoupon(data: any) {
    
    let obj = {
      necklaceCount: this.necklacesCount,
      braceletsCount: this.braceletsCount,
      ringsCount: this.ringsCount,
      earringsCount: this.earringsCount,
      totalPrice: this.totalPrice,
      discountPercentage: data
    }
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('src/app/shared/worker/web.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        let couponData = data;
        if (couponData) {
        this.discountValue=couponData.discountValue;
          this.totalPrice = couponData.totalPrice;
          this.couponCode = couponData.couponCode;
          this.isCouponApplied = true;
          alert("Coupon Applied Successfull!!");
        }
        else {
          this.isCouponApplied = false;
         alert("Invalid Coupon ");
        }

      };
      worker.postMessage(obj);
    } else {
    }
  }

}