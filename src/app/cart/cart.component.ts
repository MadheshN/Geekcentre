import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  removedToCart:boolean=false;
  cart: any;
  constructor(private service:DbService,private db:DbService) {
    this.db.getcart().subscribe(data=>{this.cart=data;});
  }

  ngOnInit() {
  }
  removeToCart(item: any) {
    this.service.removeToCart(item).subscribe((data) => {
      this.removedToCart = true;
      alert("Successfully removed from cart");
    });
  }
}
