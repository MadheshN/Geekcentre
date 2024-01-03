import { Injectable } from '@angular/core';
import { DbService } from './db.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user=localStorage.getItem("username");
  private loggedIn: boolean = false;
  loginvalidation:any;
  userDetails:any;
  constructor(private service:DbService){
    this.service.getUserDetails().subscribe(data=>
      {
        this.userDetails=data;
      });

  }
  name:any="";
  userId:any;
  isValidUser:boolean=false;
  authenticate(username: string, password: string,Details:any):boolean {

        for (let user of Details) {
          if (user.username === username && user.password === password)
          {
            this.loggedIn = true;
            this.userId=user.id;
            console.log(this.userId);
            for(let details of this.userDetails)
            {
              if(this.userId===details.id)
              {
                this.name= details.username;
              }
            }
            this.isValidUser=true;
            break;
          }
        }
        return this.isValidUser;

    }


  isLoggedIn(): boolean
  {
    return this.loggedIn;
  }

  logout() {
    this.name="";
    this.userId="";
    this.isValidUser=false;
    return this.loggedIn = false;
  }

  currentUsername() {
    return this.name;
  }
  getUserDetails()
  {
    return this.userDetails;
  }
  getUserId()
  {
    return this.userId;
  }
  getuser()
  {
    return this.user;
  }
}
