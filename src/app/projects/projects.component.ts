import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../services/Developer.Service';
import { Person, Position } from '../models/base';
import { ProjectPerson, Project, Task } from '../models/developer'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  modalRef2: BsModalRef;
  showGit=false;
  linkcopy = '';
  parts = [true, false];
  userForm:FormGroup;
  project:Project;
  submitted = false;
  user:Person;
  users:Person[] =[];
  filters:Filter[] = [];
  curTasks:Task[]=[];
  constructor(private ls:LoadService, private router: Router, private dv:DeveloperService, public fb:FormBuilder, private modalService: BsModalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.filters = [
      {Id:0, Name:'Мои задачи', Type:'UserId', Value:this.user.Id.toString(), IsActive:true},
      {Id:1, Name:'Новые', Type:'Status', Value:'Proposed', IsActive:false},
      {Id:2, Name:'Активные', Type:'Status', Value:'Active', IsActive:false},
      {Id:3, Name:'Решенные', Type:'Status', Value:'Resolved', IsActive:false}
    ];
    
    let load = [true, true];
    this.ls.showLoad=true;
    this.dv.GetUsers().subscribe(data =>{
      this.users=data;
      load[0]=false;
      this.ls.showLoad=!(load[0] == load[1]);
    });
    this.dv.GetProject(this.route.snapshot.paramMap.get("id")).subscribe(data =>{
      this.project=data;
      this.project.Tasks.sort((a,b)=>{
        return a.ModifyDate<b.ModifyDate?1:-1;
      })
      this.curTasks=this.project.Tasks;
      this.setFiltered();
      this.linkcopy = this.project.GitHubLink;
      load[1]=false;
      this.ls.showLoad=!(load[0] == load[1]);
    });
    this.userForm = this.fb.group({
      Id: ['', Validators.required],
      Position: ['', Validators.required]
    })
    
  }
  showLink(){
    if(window.innerWidth<420){
      this.linkcopy = this.project.GitHubLink.slice(0,18)+'...';
    }
    else{
      this.linkcopy=this.project.GitHubLink;
    }
    this.showGit = !this.showGit;
  }
  save(){
    this.submitted=true;
    if(this.userForm.invalid){
      return;
    }
    this.ls.showLoad=true;
    this.dv.AddProjectUser({Id:this.userForm.value.Id, ProjectId:this.project.Id, Position:this.userForm.value.Position}).subscribe((data)=>{
      this.dv.GetProject(this.route.snapshot.paramMap.get("id")).subscribe(data =>{

        this.project=data;
        this.submitted = false;
        this.modalRef2.hide();
        this.ls.showLoad=false;
      });
      
    });
    
  }
  
  close(){
    this.modalRef2.hide();
    
  }
  show(t:TemplateRef<any>){
    this.modalRef2 = this.modalService.show(t);
  }
  getPositions(){
    return [Position.BackDeveloper, Position.FrontDeveloper, Position.TeamLead, Position.DataBaseDeveloper, Position.Designer];
  }
  showPart(i){
    this.parts[i]=!this.parts[i];
  }
  add(t){
    this.router.navigate(
        ['/add', this.project.Id], 
        {
            queryParams:{
                'type':t 
            }
        }
    );
  }
  open(t, id){
    this.router.navigate(
        ['/works', id], 
        {
            queryParams:{
                'type':t 
            }
        }
    );
  }
  filter(id){
    this.filters[id].IsActive=!this.filters[id].IsActive;
    this.curTasks=Object.assign(this.project.Tasks);
    this.setFiltered();
  }
  setFiltered(){
    let fs = this.filters.filter(x => x.IsActive == true);
    if(fs.length==0){
      this.curTasks=this.project.Tasks.filter(t => t.Status!='Resolved');
    }else{
      fs.forEach(f =>{
        this.curTasks = this.curTasks.filter(t => t[f.Type]==f.Value);
      })
      if(this.filters.filter(f => (f.IsActive==false && f.Id==3)).length!=0){
        
        this.curTasks =  this.curTasks.filter(t => t.Status!='Resolved');
        console.log(this.curTasks);
      }
    }
  }
  get f() { return this.userForm.controls; }

}
export interface Filter{
  Id:number;
  Name:string;
  Type:string;
  Value:string;
  IsActive:boolean;
}
