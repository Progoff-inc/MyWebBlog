import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../models/student';
import { DeveloperService } from '../services/Developer.Service';
import { StudentService } from '../services/StudentService';

@Component({
  selector: 'new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css']
})
export class NewExamComponent  implements OnInit  {
  examForm: FormGroup;
  @Input() parent;
  subjects:Subject[];
  times=[[],[]];
  constructor(private fb:FormBuilder, public ss:StudentService) { }

  ngOnInit() {
    for(let i = 8;i<19;i++){
      this.times[0].push(i);
    }
    for(let i = 0;i<60;i++){
      this.times[1].push(i);
    }
    this.examForm = this.fb.group({
      Name: ['', Validators.required],
      PaperId: ['', Validators.required],
      DateStart: ['', Validators.required],
      DateFinish: ['', Validators.required],
      Cabinet: ['', Validators.required],
    })
  }
  save(){
    
    this.ss.AddExam(this.examForm.value).subscribe((data)=>{
      this.parent.closeForm();
    });
    
  }

}
