import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Priority, Status } from '../models/base';
import { ProjectUsers, ProjectPerson, Requirement, Task } from '../models/developer';
import { DeveloperService } from '../services/Developer.Service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  type:String;
  task:Task;
  req:Requirement;
  ItemId:String;
  constructor(private route:ActivatedRoute, private router:Router, private dv:DeveloperService) { 
    this.route.params.subscribe(params=>this.ItemId=params['id']);
    this.route.queryParams.subscribe(
        (queryParam: any) => {
            this.type = queryParam['type'];
        }
    );
  }

  ngOnInit() {
    switch(this.type){
      case "task":{
        this.dv.GetTask(this.ItemId).subscribe(data => {
          this.task = data;
          
        })
        break;
        
      }
      case "req":{
        this.dv.GetRequirement(this.ItemId).subscribe(data => {
          this.req = data;
          
        })
        break;
        
      }
    }
  }
  getPriorities(){
    return [Priority.Low, Priority.Medium, Priority.Hight];
  }
  getStatuses(){
    return [Status.Active, Status.Closed, Status.Proposed, Status.Resolved];
  }
  // worksTask(){
  //   console.log(this.taskForm.value);
  //   this.dv.WorksTask({Name:this.taskForm.value.Name, Description:this.taskForm.value.Description, RequirementId:this.taskForm.value.RequirementId, UserId:this.taskForm.value.UserId, Priority:this.taskForm.value.Priority, Status:Status.Proposed, ProjectId:this.ProjectId}).subscribe(data => {
  //     this.router.navigate(
  //         ['/projects', this.ProjectId]
  //     );
  //   })
  // }
  // worksReq(){
  //   console.log(this.reqForm.value);
  //   this.dv.WorksRequirement({Name:this.reqForm.value.Name, Description:this.reqForm.value.Description, ProjectId:this.ProjectId, Status:Status.Proposed}).subscribe(data => {
  //     this.router.navigate(
  //         ['/projects', this.ProjectId]
  //     );
  //   })
  // }

}
