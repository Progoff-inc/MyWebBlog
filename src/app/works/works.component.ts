import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Priority, Status, Person, BaseLink, Message } from '../models/base';
import { ProjectUsers, ProjectPerson, Requirement, Task } from '../models/developer';
import { DeveloperService } from '../services/Developer.Service';
import { Subject, Observable, BehaviorSubject }    from 'rxjs';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';
import { LoadService } from '../services/load.service';
import { StudentService } from '../services/StudentService';
import { PaginationService } from '../services/Pagination.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.less']
})
export class WorksComponent implements OnInit {
  
  type:String;
  ItemId:String;
  task:Task;
  taskcopy:Task;
  req:Requirement;
  reqcopy:Requirement;
  user:Person;
  links:BaseLink[];
  files:BaseLink[];
  messages:Message[] = [];
  readonly = true;
  newMess='';
  messSubmitted=false;
  //task: Subject<Task> = new BehaviorSubject<Task>(null);

  // public setTask(newTask: Task): void {
  //   console.log(this.task)
  //   this.task.next(newTask);
  // }
  team:ProjectPerson[];
  parts = [false,false, false, true];
  c=[true, true];
  pagedTasks:Task[] = [];
  curPage = 0;
  yandexLink = false;
  fileSubmitted = false;
  ps:PaginationService = new PaginationService();
  constructor(private ls:LoadService, private route:ActivatedRoute, private router:Router, private dv:DeveloperService, private ss:StudentService) { 
    this.route.params.subscribe(
      params=>{
        this.ItemId=params['id']; 
        this.ngOnInit();
        
      });
    this.route.queryParams.subscribe(
        (queryParam: any) => {
            this.type = queryParam['type'];
            this.ngOnInit();
        }
    );
  }

  ngOnInit() {
    this.c=[false, false];
    if(localStorage.getItem('user')){
      this.user=JSON.parse(localStorage.getItem('user'));
      if(this.user.Root==1){
        this.readonly = false;
      }
    }
    switch(this.type){
      case "task":{
        this.ls.showLoad=true;
        this.dv.GetTask(this.ItemId).subscribe(data => {
          this.task=Object.assign({},data);
          this.links=this.task.Links;
          this.files=this.task.Files;
          this.messages = this.task.Messages;
          
          this.taskcopy=Object.assign({},data);
          this.dv.GetTeam(this.task.ProjectId).subscribe(data => {
            
            this.team = data;
            this.ls.showLoad=false;
            console.log(this.task);
          })

        })
        
        break;
        
      }
      case "req":{
        if(true){
          this.ls.showLoad=true;
          this.dv.GetRequirement(this.ItemId).subscribe(data => {
            this.req=Object.assign({},data);
            this.req.Tasks.sort((a,b)=>{
              return a.ModifyDate<b.ModifyDate?1:-1;
            })
            this.links=this.req.Links;
            this.files=this.req.Files;
            this.messages = this.req.Messages;
            let c = [];
            Object.assign(c,this.req.Tasks);
            this.pagedTasks=this.ps.setPages(c);
            this.reqcopy=Object.assign({},data);
            this.dv.GetTeam(this.req.ProjectId).subscribe(data => {
              this.team = data;
              this.ls.showLoad=false;
            })
            
          })
        }
        
        break;
        
      }
    }
    
    // this.task.subscribe(task =>{
    //   console.log(task);
    // })
  }
  addLink(t,l){
    if(!(t.value && l.value)){
      return;
    }
    this.ls.showLoad=true;
    this.ss.AddLink({OwnerId:this.type=='task'?this.task.Id:this.req.Id, Type:this.type=='task'?3:4, Text:t.value, Path:l.value}).subscribe(()=>{
      t.value='';
      l.value='';
      this.ngOnInit();
    })
  }
  sendYandexLink(){
    this.yandexLink = !this.yandexLink;
    this.fileSubmitted = false;
  }
  addFile(f){
    let files:File[] = f.files;
    this.fileSubmitted = true;
    console.log(files);
    if(!(files.length!=0)){
      return;
    }
    if(files[0].size>10000){
      return; 
    }
    this.fileSubmitted=false;
    const formData = new FormData();
    formData.append('Data', files[0]);
    this.ls.showLoad=true;
    this.dv.UploadFile(this.type=='task'?this.task.Id:this.req.Id,this.type=='task'?3:4, formData).subscribe(()=>{
      
      this.ngOnInit();
    })
  }
  addFileLink(t, l){
    if(!(t.value && l.value)){
      console.log(true);
      return;
    }
    this.ls.showLoad=true;
    this.ss.AddFileLink({OwnerId:this.type=='task'?this.task.Id:this.req.Id, Type:this.type=='task'?3:4, Text:t.value, Path:l.value}).subscribe(()=>{
      t.value='';
      l.value='';
      this.ngOnInit();
    })
  }
  add(t){
    this.router.navigate(
        ['/add', this.req.ProjectId], 
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
  showPart(i, e){
    if(e.target.name!="yandex"){
      this.parts[i]=!this.parts[i];
    }
  }
  checkTask(){
    let res = false;
    Object.keys(this.task).forEach(k => {
      if(this.task[k]!=this.taskcopy[k]){
        res = true;
      }
    });
    return res;
  }
  
  showReq(){
    this.router.navigate(
        ['/works', this.task.RequirementId], 
        {
            queryParams:{
                'type':'req' 
            }
        }
    );
  }
  checkReq(){
    let res = false;
    Object.keys(this.req).forEach(k => {
      if(this.req[k]!=this.reqcopy[k]){
        res = true;
      }
    });
    return res;
  }
  getPriorities(){
    return [Priority.Low, Priority.Medium, Priority.Hight];
  }
  getStatuses(){
    return this.user.Root<3?[Status.Active, Status.Closed, Status.Proposed, Status.Resolved]:[Status.Active, Status.Proposed, Status.Resolved];
  }
  ChangeTask(){
    this.ls.showLoad=true;
    this.dv.ChangeTask({Description:this.task.Description, UserId:this.task.UserId, Priority:this.task.Priority, Status:this.task.Status, ModifyUserId:this.user.Id}, this.task.Id).subscribe(()=>{
      this.ngOnInit();
    })
  }
  ChangeReq(){
    this.ls.showLoad=true;
    this.dv.ChangeReq({Description:this.req.Description, Status:this.req.Status, ModifyUserId:this.user.Id}, this.req.Id).subscribe((data)=>{
      this.ngOnInit();
    })
  }
  changePage(p){
    this.curPage=p;
  }
  addMessage(){
    this.messSubmitted=true;
    if(this.newMess==''){
      return;
    }
    this.dv.AddMessage({OwnerId:this.type=='task'?this.task.Id:this.req.Id, Type:this.type=='task'?3:4, Text:this.newMess, UserId:this.user.Id}).subscribe((d)=>{
      console.log(d);
      this.ngOnInit();
    })
  }

}
