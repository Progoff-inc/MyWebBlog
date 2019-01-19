import { Component, OnInit } from '@angular/core';
import { Project, Technology, Task, Requirement } from '../models/developer'
import { Status, Priority, Sphere } from '../models/base'
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DeveloperService } from '../services/Developer.Service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.less']
})
export class DeveloperComponent implements OnInit {
  
  modalRef2: BsModalRef;
  parts = [true, false, false, false];
  projects:Project[];
  techs:Technology[];
  adding:string;
  ctrl = this;
  constructor(private modalService: BsModalService, public dv:DeveloperService) { 
    
  }

  ngOnInit() {
    this.dv.GetProjects().subscribe(data => {
      data.forEach(x => {
        x.DateStart = new Date(x.DateStart);
      });
      data.sort((a,b)=>{
        return a.DateStart>b.DateStart?1:-1;
      })
      this.projects = data;
    });
    this.dv.GetTechs().subscribe(data => {
      this.techs = data;
      this.modalRef2.hide();
    });
    console.log()
  }
  showPart(i){
    this.parts[i]=!this.parts[i];
  }
  getResponsed(p:Project){
    return p.Tasks.filter(x => x.Status == Status.Response).length;
  }
  getResolved(p:Project){
    
    return p.Tasks.filter(x => x.Status == Status.Resolved).length;
  }
  getTech(s:Sphere){
    if(this.techs){
      return this.techs.filter(x => x.Sphere == s);
    }
    
  }
  closeForm(){
    switch(this.adding){
      case 'project':{
        this.dv.GetProjects().subscribe(data => {
          data.forEach(x => {
            x.DateStart = new Date(x.DateStart);
          });
          data.sort((a,b)=>{
            return a.DateStart>b.DateStart?1:-1;
          })
          this.projects = data;
          this.modalRef2.hide();
        })
      } 
      case 'tech':{
        this.dv.GetTechs().subscribe(data => {
          this.techs = data;
          this.modalRef2.hide();
        })
      }
    }
    
    
    
  }
  addElem(i, template: TemplateRef<any>){
    this.adding = i;
    this.modalRef2 = this.modalService.show(template);
  }

}




