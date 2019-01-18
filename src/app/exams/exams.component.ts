import { Component, OnInit } from '@angular/core';
import { Exam } from '../models/student';

@Component({
  
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  parts = [];
  exam:Exam;
  constructor() { }

  ngOnInit() {
    for(let i = 0;i<this.exam.Questions.length;i++){
      this.parts.unshift(false);
    }
  }
  showPart(i){
    this.parts[i]=!this.parts[i];
  }

}
