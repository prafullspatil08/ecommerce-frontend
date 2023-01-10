import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setCartData(product: any) {
    localStorage.setItem('cartData', JSON.stringify(product));
  }
  setTotalCartItemsCount(totalCartItemsCount: any) {
    localStorage.setItem('cartItemsCount', totalCartItemsCount);
  }
  getCartData() {
    localStorage.getItem('cartData');
  }
  getTotalCartItemsCount() {
    localStorage.getItem('cartItemsCount');
  }

}
