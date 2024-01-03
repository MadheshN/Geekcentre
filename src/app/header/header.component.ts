import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../db.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    showDropdown: boolean = false;
    currentUser: string | null = null;
    user:boolean=false;

    quote:string='Education is the most powerful weapon which you can use to change the world." - Nelson Mandela';
    public showContent: boolean = true;

    constructor(private db:DbService,private http:HttpClient,private route:Router) {
    }


    ngOnInit() {
      this.currentUser=this.db.getCurrentUser();

    }





    logout(): void {
      this.db.logout();
      this.currentUser = null;
      this.route.navigate(['/login']);
    }
  }


