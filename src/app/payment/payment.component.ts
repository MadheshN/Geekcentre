import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentOption:string='';
  payment:any=[];
  price:any;
  grandTotal:any;
  status:boolean=true;

  address:any;
  pincode:any;
  phonenumber:any;
  name:String="";
  cardNumber!:number;
  expiryDate:any;
  cvv:any;
  constructor(private db:DbService, private router:Router) {}


    ngOnInit()
    {


    this.db.getPlaceOrder().subscribe(data=>
      {
        this.payment=data;

        for(let item of this.payment)
        {
          this.price=item.price;

        }


        this.grandTotal=this.price+50;
      })
  }
 userName = localStorage.getItem("name");
 userId = localStorage.getItem("userId");
  confirmOrder(item:any)
  {
    var orderDetails={
      userName:this.name,
      userId : this.userId,
      productId:item.id,
      productTitle:item.title,

      productThumbnail:item.img,
      productPrice:item.price,

      grandTotalAmount:this.grandTotal,
      address:this.address,
      pinCode:this.pincode,
      phonenumber:this.phonenumber,
      paymentOption:this.paymentOption,
      cardHolderName:this.name,
      cardNumber:this.cardNumber,
      deliveryStatus:"InProcess",
    }

    console.log(orderDetails);
    this.db.addToYourOrder(orderDetails).subscribe(data=>
      {
        alert("Order Confirmed")
        this.status=false;
        this.router.navigate(['/orders']);

      })
  }
}
