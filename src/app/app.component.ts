import { Component, OnInit, ViewChild, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './services/StudentService';
import { Person } from './models/base';
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'DevPortal';
  out = {user:Person};
  constructor(private modalService: BsModalService, private ss:StudentService, private route:ActivatedRoute, private router:Router){
  }
  ngOnInit(){
    if(!localStorage.getItem('user')){
      if(location.hash.indexOf('works')==-1){
        this.router.navigate(['/auth']);
      }
      
    }else{
      console.log(location.hash);
      let u = JSON.parse(localStorage.getItem('user'));
      this.ss.GetUser(u.Id).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
      })
    }
    
  }
}
