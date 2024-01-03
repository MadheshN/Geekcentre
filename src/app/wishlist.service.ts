import { Injectable } from '@angular/core';

@Injectable()
export class WishlistService {
  item:any;
  service: any;
  constructor()
  {
   this.service.addToWishList(this.item)
  }

}
