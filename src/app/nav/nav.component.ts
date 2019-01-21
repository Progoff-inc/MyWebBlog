import { Component, OnInit } from '@angular/core';
import { Person } from '../models/base';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user:Person;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.user=JSON.parse(localStorage.getItem('user'));
      console.log(this.user);
    }
  }

}
