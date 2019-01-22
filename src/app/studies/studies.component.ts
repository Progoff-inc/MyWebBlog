import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/StudentService';
import { Person } from '../models/base';
import { Technology } from '../models/developer';
import { Paper, Topic } from '../models/student';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.less']
})
export class StudiesComponent implements OnInit {
  tech:Technology;
  paper:Paper;
  techcopy:Technology;
  papercopy:Paper;
  user:Person;
  readonly=true;
  studyId:number;
  topicForm:FormGroup;
  type:string;
  parts = [];
  ctopics = [];
  changing:string;
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private router:Router, private ss:StudentService) { 
    this.route.params.subscribe(params=>this.studyId=Number(params['id']));
    this.route.queryParams.subscribe(
        (queryParam: any) => {
            this.type = queryParam['type'];
        }
    );
  }

  ngOnInit() {
    this.topicForm = this.fb.group({
      Name:['',Validators.required],
      Description:['',Validators.required]
    });
    if(localStorage.getItem('user')){
      this.user=JSON.parse(localStorage.getItem('user'));
      if(this.user.Root==1){
        this.readonly = false;
      }
    }
    switch(this.type){
      case "tech":{
        this.ss.GetTech(this.studyId).subscribe(data => {
          this.tech=Object.assign({},data);
          console.log(this.tech);
          for(let i = 0;i<this.tech.Topics.length;i++){
            this.parts.unshift(false);
            this.ctopics.unshift(false);
          }
        })
        
        break;
        
      }
      case "paper":{
        this.ss.GetPaper(this.studyId).subscribe(data => {
          this.paper=Object.assign({},data);
          for(let i = 0;i<this.paper.Topics.length;i++){
            this.parts.unshift(false);
            this.ctopics.unshift(false);
          }
          
        })
        
        break;
        
      }
    }
  }
  addTopic(){
    this.ss.AddTopic({OwnerId:this.type=='tech'?this.tech.Id:this.paper.Id, Name:this.topicForm.value.Name, Description:this.topicForm.value.Description, Type:this.type=='tech'?2:1, ModifyUserId:this.user.Id}).subscribe(()=>{
      this.ngOnInit();
    })
  }
  showPart(e,i){
    if(e.target.name!="change"){
      this.changing=null;
      this.ctopics = this.ctopics.map(x => false);
      this.parts[i]=!this.parts[i];
    }
  }
  changeTopic(i,t){
    this.changing=t;
    this.ctopics[i]=!this.ctopics[i];
  }
  showPPart(e,i, t){
    if(e.target.name!="change"){
      if(this.parts[i]){
        this.changing=null;
      }
      else{
        this.changing=t;
      }
      
      this.ctopics = this.ctopics.map(x => false);
      this.parts[i]=!this.parts[i];
    }
  }
  save(t:Topic){
    t.ModifyUserId=this.user.Id;
    this.ss.SaveTopic(t).subscribe(()=>{
      this.ngOnInit();
    })
  }

}
