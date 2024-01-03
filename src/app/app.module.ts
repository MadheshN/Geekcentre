import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule,NgxLoggerLevel } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MarvelComponent } from './marvel/marvel.component';
import { DcComponent } from './dc/dc.component';
import { ShonenComponent } from './shonen/shonen.component';
import { ShojoComponent } from './shojo/shojo.component';
import { SeinenComponent } from './seinen/seinen.component';
import { KodomomukeComponent } from './kodomomuke/kodomomuke.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      SignupComponent,
      HomeComponent,
      ContactComponent,
      AboutComponent,
      IndexComponent,
      MarvelComponent,
      DcComponent,
      ShonenComponent,
      ShonenComponent,
      ShojoComponent,
      SeinenComponent,
      KodomomukeComponent,
      WishlistComponent,
      HeaderComponent,
      CartComponent,
      PaymentComponent,
      OrdersComponent,
      AdminhomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoggerModule.forRoot({
      level:NgxLoggerLevel.INFO,
      serverLogLevel:NgxLoggerLevel.ERROR,
      serverLoggingUrl:"http://localhost:3000/logs"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
