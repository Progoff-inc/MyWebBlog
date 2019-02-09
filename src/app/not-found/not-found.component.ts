import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router:Router, private ls:LoadService) { }

  ngOnInit() {
    this.ls.showLoad=false;
  }
  auth(){
    this.router.navigate(['/auth']); 
  }

}
