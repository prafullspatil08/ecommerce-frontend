import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { WishListService } from 'src/app/shared/service/wish-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public totalItem: number = 0;
  public totalWishListItem: number = 0;

  constructor(private cartService: CartService, private wishList: WishListService) { }

  ngOnInit(): void {

    this.cartService.getProduct().subscribe((ress: any[]) => {
      
      this.totalItem = ress.length;
    });
    this.wishList.getProduct().subscribe(res => {
      this.totalWishListItem = res.length;
    });
  }

}
