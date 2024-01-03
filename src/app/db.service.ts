import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  isLoggedIn:boolean=false;
userName:string="";
userDetails:any;
users:any;
  private user = [
    {
      "name": "jegadhish",
      "dob": "2003-05-06",
      "phonenumber": "8428160873",
      "email": "jegadhish13@gmail.com",
      "gender": "male",
      "password": "jega",
      "id": 32
    },
    // Add other users from db.json here...
  ];

  addToYourOrder(data:any) {
    return this.http.post("http://localhost:3000/orders",data);

  }
  getPlaceOrder() {
    return this.http.get(environment.paymentUrl);
  }

  private loggedin: boolean = false;

  constructor(private http:HttpClient) {

  }
  getuser(name:any , password:any)
    {
      return this.http.get(environment.loginUrl);
    }
    adduser(values:any)
    {
      return this.http.post("http://localhost:3000/user",values);
    }
    getcomics()
    {
      return this.http.get(environment.comicsUrl);
    }
    getmarvel()
    {
      return this.http.get(environment.marvelurl);
    }
    getseinen()
    {
      return this.http.get(environment.seinenUrl);
    }
getdc()
{
  return this.http.get(environment.dcUrl);
}
    getkodomomuke()
    {
      return this.http.get(environment.kodomomukeUrl);
    }
    getshojo()
    {
      return this.http.get(environment.shojoUrl);
    }
    getshonen()
    {
      return this.http.get(environment.shonenUrl);
    }
    getorders()
    {
      return this.http.get(environment.orderUrl);
    }
    addToWishlist(data:any)
    {
      return this.http.post("http://localhost:3000/wishlist",data);
    }
    addToCart(data:any)
    {
      return this.http.post("http://localhost:3000/cart",data);
    }
    addToPayment(data:any)
    {

      return this.http.post("http://localhost:3000/payment",data);
    }

    removeToCart(data:any)
    {
      return this.http.post("http://localhost:3000/cart",data);
    }
    getToWishList()
    {
      return this.http.get(environment.wishlistUrl);
    }

gethome()
{
  return this.http.get(environment.homeUrl);
}
getcart()
{
  return this.http.get(environment.cartUrl);
}
getpayment()
{
  return this.http.get(environment.paymentUrl);
}
getwishlist()
{
  return this.http.get(environment.wishlistUrl);
}
getUserDetails()
{
  return this.http.get(environment.loginUrl);
}
addUserDetails(value : any)
{
  return this.http.post("http://localhost:3000/user",value);
}

removeFromWishlist(itemId:number)
{
  return this.http.delete(environment.wishlistUrl);
}


// Method to check if the user is already logged in (using a simple boolean flag)


getCurrentUser(): string | null {
 return localStorage.getItem('name');
}

logout(): void {
  localStorage.removeItem('currentUser');
}
getUser() {
  return this.http.get(environment.loginUrl);

}

getHome() {
  return this.http.get(environment.homeUrl);
}

addItem(newItem: any) {
  return this.http.post("http://localhost:3000/home", newItem);
}

/*deleteItem(itemId: number){
  return this.http.delete("http://localhost:3000/home",itemId);
}*/



addCurrentUser(user: any) {
  return this.http.post("http://localhost:3000/user",user);
}
login(name:string)
{
  this.userName=name;
  this.isLoggedIn=true;
  return this.isLoggedIn;
}

isUserLoggedIn():boolean{
  this.users = localStorage.getItem("name");
  if(this.users)
  {
    return true;
  }
  else
  {
    return false;
  }
}

userType()
{
  this.users = localStorage.getItem("userType");
  if(this.users=="Admin")
  {
    return true;
  }
  else
  {
    return false;
  }
}



logoutUser():void{
  localStorage.clear();
  this.isLoggedIn=false;
}
}
