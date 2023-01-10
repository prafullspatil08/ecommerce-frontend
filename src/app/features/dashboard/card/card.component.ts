import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { WishListService } from 'src/app/shared/service/wish-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardProduct: any

  constructor(private cartService:CartService,private wishList:WishListService) { }

  ngOnInit(): void {
  
  }

  addToCart(product : any) {
    // alert('product added to Cart ');
    this.cartService.addToCart(product);
  }

  addToWishList(product: any){
    this.wishList.addToWishList(product);
  }

}
