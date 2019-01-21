import { Component, OnInit, ViewChild } from '@angular/core';
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
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyWebBlog';
  modalRef2: BsModalRef;
  link:string;
  user:Person = new Person();
  showContent = false;
  @ViewChild('modal') modal: TemplateRef<any>;
  constructor(private modalService: BsModalService, private ss:StudentService, private route:ActivatedRoute){
  }
  ngOnInit(){
    if(!localStorage.getItem('user')){
      this.modalRef2 = this.modalService.show(this.modal);
      
    }
    
    this.route.queryParams.subscribe(
        (queryParam: any) => {
            this.user.Name = queryParam['response[0][first_name]']+' '+queryParam['response[0][last_name]'];
            this.user.Id = Number(queryParam['response[0][uid]']);
            
            if(this.user.Id){
              localStorage.setItem('user', JSON.stringify(this.user));
              console.log(localStorage.getItem('user'));
              
              this.showContent = true;
              
            }
            else{
              
            }
        }
        
    );
    
  }
  close(){
    console.log(1);
    this.modalRef2.hide();
  }
}
