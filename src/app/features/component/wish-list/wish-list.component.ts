import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { WishListService } from 'src/app/shared/service/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  public product :any=[];
  public totalItem: number =0;
  public grandTotal: number = 0;

  constructor(private wishList:WishListService,private cartService:CartService) { }

  ngOnInit(): void {
    this.wishList.getProduct().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.wishList.getTotalPrice();
    }) 
  }

  removeItem(item:any){
    this.wishList.removeWishListItem(item);  
  }

  emptyCart(){
    this.wishList.removeAllWishList();
  }

  addToCart(product : any) {
    alert('product added to Cart ');
    this.cartService.addToCart(product);
  }

}
