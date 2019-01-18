import { Component, OnInit } from '@angular/core';
import { Project, Technology, Task, Requirement } from '../models/developer'
import { Status, Priority, Sphere } from '../models/base'

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.less']
})
export class DeveloperComponent implements OnInit {
  parts = [true, false, false, false];
  projects:Project[];
  techs:Technology[];
  adding:string;
  constructor() { 
    
  }

  ngOnInit() {
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
  addElem(i){
    this.adding = i;
  }

}




