import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NavbarComponent } from './include/navbar/navbar/navbar.component';
import { CardComponent } from './features/dashboard/card/card.component';
import { FooterComponent } from './include/footer/footer.component';
import { ProductDetailsComponent } from './features/dashboard/product-details/product-details.component';
import { CartComponent } from './features/component/cart/cart.component';
import { EarringsComponent } from './features/component/earrings/earrings.component';
import { BraceletComponent } from './features/component/bracelet/bracelet.component';
import { NecklaceComponent } from './features/component/necklace/necklace.component';
import { WishListComponent } from './features/component/wish-list/wish-list.component';
import { HttpTokenInterceptor } from './shared/interceptor/http-token.interceptor';
import { RingComponent } from './features/component/ring/ring.component';






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    ProductDetailsComponent,
    CartComponent,
    EarringsComponent,
    BraceletComponent,
    NecklaceComponent,
    WishListComponent,
    RingComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
