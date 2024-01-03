import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  quote:string="At Some Point, We All Have to Choose, Between What the World Wants You to Be, and Who You Are.-Natasha Romanoff / Black Widow, 'Black Widow' (2021)";
  constructor() { }

  ngOnInit() {
  }

}
