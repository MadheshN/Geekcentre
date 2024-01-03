import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders:any;

  constructor(private service:DbService,private db:DbService) {
    this.db.getorders().subscribe(data=>{this.orders=data;});
  }

  ngOnInit() {
  }

}
