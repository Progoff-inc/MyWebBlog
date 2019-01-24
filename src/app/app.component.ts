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
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'DevPortal';
  user:Person = new Person();
  showContent = false;
  getUser = true;
  constructor(private modalService: BsModalService, private ss:StudentService, private route:ActivatedRoute, private router:Router){
  }
 
  ngOnInit(){
    if(localStorage.getItem('user')){
      this.getUser=false;
      
      this.user = JSON.parse(localStorage.getItem('user'));
      this.ss.GetUser(this.user.Id).subscribe(data => {
        this.user = data;
        if(this.user.Id){
          localStorage.setItem('user', JSON.stringify(this.user));
          console.log(this.user);
          if(location.pathname=='/'){
            if(this.user.Root>1){
              this.showContent = true;
              this.router.navigate(['/developer']);
            }
            else{
              this.showContent = true;
              this.router.navigate(['']);
            }
          }
          
        }
        else{
          localStorage.removeItem('user');
          console.log('Пользователь удален');
        }
        
      })

    }
    
    
    this.route.queryParams.subscribe(
        (queryParam: any) => {
            if(this.getUser ){
              this.user.Id = Number(queryParam['response[0][uid]']);
              
              if(this.user.Id){
                if(!localStorage.getItem('user')){

                  this.ss.GetUser(this.user.Id).subscribe(data => {
                    localStorage.setItem('user', JSON.stringify(data));
                    this.ngOnInit();
                  })
                }
                
              }
            }
            
        }
        
    );
    
  }
}
