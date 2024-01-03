import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { AuthService } from '../AuthService.service';
import { DbService } from '../db.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  redirectToLink(link:string):void{
    window.location.href=link;
  }
  addWishlist:boolean=false;
  public user =localStorage.getItem("username");
  public productList:any;
  allProducts:any="";
  searchedFor:any="";
  Products:any=[];
  // products:any="";
  link:any="";
  i=0;
  addedToWishlist:boolean=false;
  addedToCart:boolean=false;
  home: any;
  showDropdown:any;
  currentUser: string | null = null;

  addedToPayment:boolean=false;


  quote:string=" A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a little boy’s shoulders to let him know that the world hadn’t ended. - Bruce Wayne/Batman, The Dark Knight Rises ";
  constructor(private db:DbService,private service:DbService,private http:HttpClient,private route:Router,private authService:AuthService,private logger:NGXLogger) {
    this.db.gethome().subscribe(data=>{this.home=data;});
  }

  ngOnInit():void {

    this.currentUser=this.db.getCurrentUser();


  }

  addToWishlist(item:any){
     var cart={
     uname:this.user,
       id:item.id,
       title:item.title,
       img:item.img
     }
     this.service.addToWishlist(cart).subscribe((data)=>{
       this.addWishlist=true;
       alert("Successfully Added To Wishlist");
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
      this.route.navigate(['/payment']);

    });
  }
  logout(): void {
    this.db.logout();
    this.currentUser = null;
    this.route.navigate(['/login']);
  }


}
