import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DcComponent } from './dc/dc.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { KodomomukeComponent } from './kodomomuke/kodomomuke.component';
import { LoginComponent } from './login/login.component';
import { MarvelComponent } from './marvel/marvel.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { SeinenComponent } from './seinen/seinen.component';
import { ShojoComponent } from './shojo/shojo.component';
import { ShonenComponent } from './shonen/shonen.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [

  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'shonen',
    component:ShonenComponent
  },
  {
    path:'marvel',
    component:MarvelComponent
  },
  {
    path:'dc',
    component:DcComponent
  },
  {
    path:'shojo',
    component:ShojoComponent
  },
  {
    path:'seinen',
    component:SeinenComponent
  },
  {
    path:'kodomomuke',
    component:KodomomukeComponent
  },
  {
    path:'wishlist',
    component:WishlistComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:"adminhome",
    component:AdminhomeComponent
  },
  {
    path:'',
    component:IndexComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
