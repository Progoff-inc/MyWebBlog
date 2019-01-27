import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Priority, Status, Person } from '../models/base';
import { ProjectUsers, ProjectPerson, Requirement, Task } from '../models/developer';
import { DeveloperService } from '../services/Developer.Service';
import { Subject, Observable, BehaviorSubject }    from 'rxjs';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

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
  readonly = true;
  //task: Subject<Task> = new BehaviorSubject<Task>(null);

  // public setTask(newTask: Task): void {
  //   console.log(this.task)
  //   this.task.next(newTask);
  // }
  team:ProjectPerson[];
  parts = [false];
  c=[true, true];
  constructor(private route:ActivatedRoute, private router:Router, private dv:DeveloperService) { 
    this.route.params.subscribe(
      params=>{
        this.ItemId=params['id']; 
        this.c[0]=true;
        if(this.c[0]&&this.c[1]){
          this.ngOnInit();
        }
        
      });
    this.route.queryParams.subscribe(
        (queryParam: any) => {
          
            this.type = queryParam['type'];
            this.c[1]=true;
            if(this.c[0]&&this.c[1]){
              this.ngOnInit();
            }
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
        this.dv.GetTask(this.ItemId).subscribe(data => {
          this.task=Object.assign({},data);
          
          this.taskcopy=Object.assign({},data);
          this.dv.GetTeam(this.task.ProjectId).subscribe(data => {
            
            this.team = data;
          })
        })
        
        break;
        
      }
      case "req":{
        if(true){
          this.dv.GetRequirement(this.ItemId).subscribe(data => {
            this.req=Object.assign({},data);
            this.reqcopy=Object.assign({},data);
            this.dv.GetTeam(this.req.ProjectId).subscribe(data => {
              this.team = data;
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
  showPart(i){
    this.parts[i]=!this.parts[i];
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
    return [Status.Active, Status.Closed, Status.Proposed, Status.Resolved];
  }
  ChangeTask(){
    this.dv.ChangeTask({Description:this.task.Description, UserId:this.task.UserId, Priority:this.task.Priority, Status:this.task.Status, ModifyUserId:this.user.Id}, this.task.Id).subscribe(()=>{
      this.ngOnInit();
    })
  }
  ChangeReq(){
    this.dv.ChangeReq({Description:this.req.Description, Status:this.req.Status, ModifyUserId:this.user.Id}, this.req.Id).subscribe((data)=>{
      this.ngOnInit();
    })
  }

}
