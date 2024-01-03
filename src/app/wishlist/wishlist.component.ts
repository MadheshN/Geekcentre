import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  redirectToLink(link:string):void{
    window.location.href=link;
  }
  wishlist: any;
  item:any;
  wish:boolean=false;
  currentUser:string | null=null;

  constructor(private db:DbService,private service:DbService, private route:Router)
  {
    this.db.getwishlist().subscribe(data=>{this.wishlist=data;});

  }
  ngOnInit() {
    this.currentUser=this.db.getCurrentUser();
  }
  addToWishlist(item: any) {
    this.service.addToWishlist(item).subscribe((data) => {
      this.wish = true;
      alert("Successfully Added To Wishlist");
    });

}
removeFromWishlist(item: any) {
  this.service.removeFromWishlist(item.id).subscribe((data) => {
    this.wishlist = this.wishlist.filter((wishlistItem: any) => wishlistItem.id !== item.id);
    alert("Successfully Removed From Wishlist");
  });
}

  logout(): void {
    this.db.logout();
    this.currentUser = null;
    this.route.navigate(['/login']);
  }
}
