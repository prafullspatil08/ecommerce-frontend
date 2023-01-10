import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public totalPrice = new Subject<number>();
  public itemCount = new Subject<number>();

  constructor(private sessionService: SessionService) { }

  //Getting all product list in cart 
  getProduct() {
    return this.productList.asObservable();
  }

  getCartTotalPrice() {
    return this.totalPrice.asObservable();
  }

  //Adding product to cart 
  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.sessionService.setCartData(this.cartItemList);
    this.sessionService.setTotalCartItemsCount(this.cartItemList.length);
  }

  //Products Total price
  getTotalPrice(product: any) {
    let price = 0;
    this.cartItemList.forEach((items: any) => {
      price += items.price;
    });

    this.totalPrice.next(price);
  }

  //Total product counts
  getTotalCount(count: any) {
    this.itemCount.next(count);
  }


}
