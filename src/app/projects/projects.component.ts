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
import { PaginationService } from '../services/Pagination.service';

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
  pages = [];
  project:Project;
  submitted = false;
  user:Person;
  users:Person[] =[];
  filters:Filter[] = [];
  curTasks:Task[]=[];
  chLink =false;
  chLinkText = '';
  submittedLink = false;
  pagedTasks:Task[] = [];
  curPage = 0;
  ps:PaginationService = new PaginationService();
  constructor(private ls:LoadService, private router: Router, private dv:DeveloperService, public fb:FormBuilder, private modalService: BsModalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.filters = [
      {Id:0, Name:'Мои задачи', Type:'UserId', Value:this.user.Id.toString(), IsActive:true},
      {Id:1, Name:'Новые', Type:'Status', Value:'Proposed', IsActive:false},
      {Id:2, Name:'Активные', Type:'Status', Value:'Active', IsActive:false},
      {Id:3, Name:'Решенные', Type:'Status', Value:'Resolved', IsActive:false},
      {Id:4, Name:'Закрытые', Type:'Status', Value:'Closed', IsActive:false}
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
      this.chLinkText = this.project.GitHubLink;
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
    this.changePage(0);
    if(this.filters[id].Type=='Status'){
      this.filters.forEach(f => {
        if(f.Id != id && f.Type=='Status'){
          f.IsActive=false;
        }
      })
    }
    this.setFiltered();
  }
  setFiltered(){
    let fs = this.filters.filter(x => x.IsActive == true);
    if(fs.length==0){
      this.curTasks=this.project.Tasks.filter(t => t.Status!='Resolved');
      this.curTasks=this.curTasks.filter(t => t.Status!='Closed');
    }else{
      fs.forEach(f =>{
        this.curTasks = this.curTasks.filter(t => t[f.Type]==f.Value);
      })
      
      if(this.filters.filter(f => (f.IsActive==false && (f.Id==3 || f.Id==4))).length>1){
        this.curTasks =  this.curTasks.filter(t => t.Status!='Resolved');
        this.curTasks =  this.curTasks.filter(t => t.Status!='Closed');
      }
    }
    let c = [];
    Object.assign(c,this.curTasks);
    this.pagedTasks=this.ps.setPages(c);
  }
  showChLink(){
    this.chLink=!this.chLink;
  }
  changePage(p){
    this.curPage=p;
  }
  saveLink(nlink){
    this.submittedLink =true;
    if(this.chLinkText==''){
      return
    }
    if(this.chLinkText!=this.project.GitHubLink){
      this.dv.ChangeLink({Link:this.chLinkText, ModifyUserId:this.user.Id}, this.project.Id).subscribe(()=>{
        this.project.GitHubLink=this.chLinkText;
        this.showChLink();
        this.showLink();
      })
    }
    else{
      this.showChLink();
    }
  }
  deleteUser(p:Person){
    if(this.user.Root==1 && window.confirm('Удалить пользователя {'+p.Name+'} из команды?')){
      this.ls.showLoad=true;
      this.dv.DeleteTeamUser(this.project.Id, {UserId:p.Id, ModifyUserId:this.user.Id}).subscribe(()=>{
        let i = this.project.Team.map(x => x.Id).indexOf(p.Id);
        this.project.Team.splice(i,1);
        this.ls.showLoad=false;
      })
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
