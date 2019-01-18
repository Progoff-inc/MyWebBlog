import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css']
})
export class NewExamComponent  implements OnInit  {
  examForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.examForm = this.fb.group({
      Name: ['', Validators.required],
      Subject: ['', Validators.required],
      DateStart: ['', Validators.required],
      DateFinish: ['', Validators.required],
      Cabinet: ['', Validators.required],
    })
  }

}
