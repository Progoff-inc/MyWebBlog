import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Paper } from '../models/student';
import { DeveloperService } from '../services/Developer.Service';
import { StudentService } from '../services/StudentService';
import { deepStrictEqual } from 'assert';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css']
})
export class NewExamComponent  implements OnInit  {
  examForm: FormGroup;
  @Input() parent;
  submitted = false;
  subjects:Paper[];
  times=[[],[]];
  constructor(private ls:LoadService, private fb:FormBuilder, public ss:StudentService) { }

  ngOnInit() {
    this.ls.showLoad=true;
    this.ss.GetPapers().subscribe(data => {
      data.forEach(x => {
        x.ModifyDate = new Date(x.ModifyDate);
      });
      data.sort((a,b)=>{
        return a.ModifyDate<b.ModifyDate?1:-1;
      })
      this.subjects = data;
      this.ls.showLoad=false;
    })
    for(let i = 8;i<19;i++){
      this.times[0].push(i);
    }
    for(let i = 0;i<60;i++){
      this.times[1].push(i);
    }
    this.examForm = this.fb.group({
      PaperId: ['', Validators.required],
      DateStart: ['', Validators.required],
      DateFinish: ['', Validators.required],
      TimeStartH: ['', Validators.required],
      TimeStartM: ['', Validators.required],
      TimeFinishH: ['', Validators.required],
      TimeFinishM: ['', Validators.required],
      Cabinet: ['', Validators.required],
    })
  }
  save(){
    this.submitted = true;
    if(this.examForm.invalid){
      return;
    }
    let t = new Date(this.examForm.value.DateStart);
    let ts = new Date(t.getFullYear(), t.getMonth(), t.getDate(),Number(this.examForm.value.TimeStartH), Number(this.examForm.value.TimeStartM));
    let tf = new Date(t.getFullYear(), t.getMonth(), t.getDate(),Number(this.examForm.value.TimeFinishH), Number(this.examForm.value.TimeFinishM));
    this.ls.showLoad=true;
    this.ss.AddExam({PaperId:this.examForm.value.PaperId,  DateStart:ts, DateFinish:tf, Cabinet:this.examForm.value.Cabinet}).subscribe((data)=>{
      this.submitted=false;
      this.parent.closeForm();
    });
    
  }
  get f() { return this.examForm.controls; }

}
