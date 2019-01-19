import { Component, OnInit, Input } from '@angular/core';
import { Sphere } from '../models/base';

import { DeveloperService } from '../services/Developer.Service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-technology',
  templateUrl: './new-technology.component.html',
  styleUrls: ['./new-technology.component.css']
})
export class NewTechnologyComponent implements OnInit {
  techForm: FormGroup;
 @Input() type:number; 
 @Input() parent;
  constructor(public fb:FormBuilder, public dv:DeveloperService) { }
  get sphs() { return ['Фронт-енд', 'Бэк-енд', 'Базы данных']}
  ngOnInit() {
    this.techForm = this.fb.group({
      Name: ['', Validators.required],
      Language: ['', Validators.required],
      Sphere: ['', Validators.required]
    })
  }
  save(){
    
    this.dv.AddTech(this.techForm.value).subscribe((data)=>{
      this.parent.closeForm();
    });
    
  }

}
