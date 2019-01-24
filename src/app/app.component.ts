import { Component, OnInit, ViewChild, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './services/StudentService';
import { Person } from './models/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'DevPortal';
  out = {user:Person};
  constructor(private modalService: BsModalService, private ss:StudentService, private route:ActivatedRoute, private router:Router){
  }
  ngOnChanges(ch:SimpleChanges){
    console.log(ch);
  }
  ngOnInit(){
    if(!localStorage.getItem('user')){
      this.router.navigate(['/auth']);
    }
    
  }
}
