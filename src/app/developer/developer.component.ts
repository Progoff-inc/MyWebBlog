import { Component, OnInit } from '@angular/core';
import { Project, Technology, Task, Requirement } from '../models/developer'
import { Status, Priority, Sphere, Person } from '../models/base'
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DeveloperService } from '../services/Developer.Service';
import { Router } from '@angular/router';
import { LoadService } from '../services/load.service';

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
  user:Person;
  ctrl = this;
  constructor(private ls:LoadService, private modalService: BsModalService, private router:Router, public dv:DeveloperService) { 
    
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.user=JSON.parse(localStorage.getItem('user'));
    }
    let load = [true, true];
    this.dv.GetProjects().subscribe(data => {
      data.forEach(x => {
        x.DateStart = new Date(x.DateStart);
      });
      data.sort((a,b)=>{
        return a.DateStart>b.DateStart?1:-1;
      })
      this.projects = data;
      load[0]=false;
      this.ls.showLoad=!(load[0] == load[1]);
    });
    this.dv.GetTechs().subscribe(data => {
      this.techs = data;
      load[1]=false;
      this.ls.showLoad=!(load[0] == load[1]);
    });
  }
  showPart(i){
    this.parts[i]=!this.parts[i];
  }
  getProposed(p:Project){
    return p.Tasks.filter(x => x.Status == Status.Proposed).length;
  }
  getClosed(p:Project){
    
    return p.Tasks.filter(x => x.Status == Status.Closed).length;
  }
  getTechs(s:Sphere){
    if(this.techs){
      return this.techs.filter(x => x.Sphere == s);
    }
    
  }
  closeForm(){
    switch(this.adding){
      case 'project':{
        this.ls.showLoad=true;
        this.dv.GetProjects().subscribe(data => {
          data.forEach(x => {
            x.DateStart = new Date(x.DateStart);
          });
          data.sort((a,b)=>{
            return a.DateStart>b.DateStart?1:-1;
          })
          this.projects = data;
          this.modalRef2.hide();
          this.ls.showLoad=false;
        })
      } 
      case 'tech':{
        this.ls.showLoad=true;
        this.dv.GetTechs().subscribe(data => {
          this.techs = data;
          this.modalRef2.hide();
          this.ls.showLoad=false;
        })
      }
    }
  }
  addElem(i, template: TemplateRef<any>){
    this.adding = i;
    this.modalRef2 = this.modalService.show(template);
  }
  openProject(e, id){
    if(e.target.name!="close"){
      if(this.user.Root>1){
        this.projects.filter(x => x.Id == id).forEach(x => {
          x.Team.forEach( t => {
            if(t.Id==this.user.Id){
              this.router.navigate(
                ['/projects', id]
              );
            }
          })
        })
      }
      else{
        this.router.navigate(
          ['/projects', id]
        );
      }
    }
    
    
  }
  showTech(id){
    this.router.navigate(
      ['/studies', id], 
      {
          queryParams:{
              'type':'tech' 
          }
      }
    );
  }
  closeProject(id){
    this.ls.showLoad=true;
    this.dv.CloseProject({ModifyUserId:this.user.Id}, id).subscribe(data => {
      this.ngOnInit();
    })
  }
  closeFormClear(){
    console.log(1);
    this.modalRef2.hide();
  }

}




