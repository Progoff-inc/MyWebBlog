import { Component, OnInit, Input } from '@angular/core';
import { DeveloperService } from '../services/Developer.Service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  projectForm: FormGroup;
  @Input() parent;
  constructor(private fb:FormBuilder, public dv:DeveloperService) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      Name: ['', Validators.required],
      DateStart: ['', Validators.required],
      Description: ['', Validators.required]
    })
  }
  save(){
    
    this.dv.AddProject(this.projectForm.value).subscribe((data)=>{
      this.parent.closeForm();
    });
    
  }

}
