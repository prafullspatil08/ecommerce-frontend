import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productData: any

  constructor(private product:ProductService) { }

  ngOnInit(): void {
       this.displayProducts();
  }

  displayProducts(){
    this.product.getAllProduct().subscribe((res) => {
      this.productData = res;
    });
  }

}
