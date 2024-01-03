import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../db.service';
@Component({
  selector: 'app-kodomomuke',
  templateUrl: './kodomomuke.component.html',
  styleUrls: ['./kodomomuke.component.css']
})
export class KodomomukeComponent implements OnInit {
  redirectToLink(link:string):void{
    window.location.href=link;
  }
  addWishlist:boolean=false;
  addedToCart:boolean=false;
  public user =localStorage.getItem("username");
  public productList:any;
  allProducts:any="";
  searchedFor:any="";
  Products:any=[];
  // products:any="";
  link:any="";
  i=0;
  addedToWishlist:boolean=false;
  kodomomuke: any;
  showDropdown:any;
  currentUser:string | null=null;
  addedToPayment:boolean=false;
  quote:string="“  Don’t give up , there’s no shame in falling down ! The true shame is to not stand up again ! ” - Shintaro Midorima | Kuroko no Basuke";
  constructor(private db:DbService,private service:DbService,private http:HttpClient,private route:Router) {
    this.db.getkodomomuke().subscribe(data=>{this.kodomomuke=data;});


   }

  ngOnInit():void {
    this.currentUser=this.db.getCurrentUser();
  }
  addToWishlist(item:any){
    /* var cart={
     //uname:this.user,
       id:item.id,
       title:item.title,
       img:item
     }*/
     this.service.addToWishlist(item).subscribe((data)=>{
       this.addWishlist=true;
       alert("Successfully Added To Wishlist");
     });
   }
  removeFromWishlist(products:any){
    this.http.delete("http://localhost:3000/wishlist/"+products.id).subscribe(()=>{
      this.addWishlist=false;
    });
  }
  addToCart(item: any) {
    this.service.addToCart(item).subscribe((data) => {
      this.addedToCart = true;
      alert("Successfully added to cart");
    });
  }
  addToPayment(item: any) {
    this.service.addToPayment(item).subscribe((data) => {
      this.addedToPayment = true;
      this.route.navigate(['payment']);

    });
  }
  logout(): void {
    this.db.logout();
    this.currentUser = null;
    this.route.navigate(['/login']);
  }
  }



