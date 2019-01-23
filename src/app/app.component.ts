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
  title = 'MyWebBlog';
  user:Person = new Person();
  showContent = true;
  getUser = true;
  constructor(private modalService: BsModalService, private ss:StudentService, private route:ActivatedRoute, private router:Router){
  }
  ngOnInit(){
    console.log(location.pathname);
    if(localStorage.getItem('user')){
      this.getUser=false;
      this.user = JSON.parse(localStorage.getItem('user'));
      this.ss.GetUser(this.user.Id).subscribe(data => {
        data.Root = Number(data.Root);
        if(data.Root>1 && location.pathname=='/'){
          console.log(true);
          this.showContent = true;
          this.router.navigate(['/developer']);
        }

        localStorage.setItem('user', JSON.stringify(data));
        console.log(localStorage.getItem('user'));
        
      })
      
    }
    else{
      this.showContent=false;
    }
    
    this.route.queryParams.subscribe(
        (queryParam: any) => {
            if(this.getUser){
              this.user.Id = Number(queryParam['response[0][uid]']);
              if(this.user.Id){
                this.ss.GetUser(this.user.Id).subscribe(data => {
                  data.Root = Number(data.Root);
                  if(data.Root>1){
                    this.showContent = true;
                    this.router.navigate(['/developer']);
                  }
                  else{
                    this.showContent = true;
                    this.router.navigate(['']);
                  }
                  localStorage.setItem('user', JSON.stringify(data));
                  console.log(localStorage.getItem('user'));
                  this.showContent = true;
                })
              }
            }
            
        }
        
    );
    
  }
}
