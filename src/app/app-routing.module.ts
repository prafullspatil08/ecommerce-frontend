import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletComponent } from './features/component/bracelet/bracelet.component';
import { CartComponent } from './features/component/cart/cart.component';
import { EarringsComponent } from './features/component/earrings/earrings.component';
import { NecklaceComponent } from './features/component/necklace/necklace.component';
import { RingComponent } from './features/component/ring/ring.component';
import { WishListComponent } from './features/component/wish-list/wish-list.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductDetailsComponent } from './features/dashboard/product-details/product-details.component';



const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  {path:'',redirectTo:'/home', pathMatch:'full'},
  { path: '', component: DashboardComponent },
  {path:'details/:id', component: ProductDetailsComponent},
  {path:'rings', component: RingComponent},
  {path:'cart', component:CartComponent},
  {path:'earrings', component:EarringsComponent},
  {path:'bracelets', component:BraceletComponent},
  {path:'necklaces', component:NecklaceComponent },
  {path:'wishList', component:WishListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
