import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';
import { LoginService } from '../login.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  redirectToLink(link:string):void{
    window.location.href=link;
  }
  comic: any;
  showDropdown:any;
  currentUsername:any;
  quote:string="“ The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.” — Roy Mustang (Full Metal Alchemist)";
  constructor(private db:DbService,private service:DbService) {
    this.db.getcomics().subscribe(data=>{this.comic=data;});


   }

  ngOnInit() {
  }
  isLoggedIn()
  {

  }
  toggleDropdown()
  {

  }
  logout
()
{}
}
