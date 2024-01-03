import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  home: any;
  newItemTitle = '';
  newItemAuthor = '';
  newItemImage = '';
  newItemPrice = '';

  constructor(private db: DbService) {
    this.db.gethome().subscribe(data => {
      this.home = data;
    });
  }

  ngOnInit(): void {}

  /*deleteItem(itemId: number) {
    // Call a method in your DbService to delete the item
    this.db.deleteItem(itemId).subscribe(() => {
      // Update the UI by removing the deleted item from the list
      this.home = this.home.filter((item: { id: number; }) => item.id !== itemId);
    });
  }*/

  addItem() {
    // Call a method in your DbService to add the new item
    const newItem = {
      id: this.generateUniqueId(), // Generate a unique ID for the new item
      title: this.newItemTitle,
      author: this.newItemAuthor,
      img: this.newItemImage,
      price: this.newItemPrice
    };

    this.db.addItem(newItem).subscribe(() => {
      // Update the UI by adding the new item to the list
      this.home.push(newItem);

      // Reset form fields
      this.newItemTitle = '';
      this.newItemAuthor = '';
      this.newItemImage = '';
      this.newItemPrice = '';
    });
  }

  private generateUniqueId(): number {
    // Implement your own logic to generate a unique ID
    // This is just a placeholder example
    return Math.floor(Math.random() * 1000);
  }
}
