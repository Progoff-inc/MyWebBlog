import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/StudentService';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'new-paper',
  templateUrl: './new-paper.component.html',
  styleUrls: ['./new-paper.component.css']
})
export class NewPaperComponent implements OnInit {
  paperForm: FormGroup;
  submitted = false;
  @Input() parent;
  constructor(private ls:LoadService, private fb:FormBuilder, public ss: StudentService) { }

  ngOnInit() {
    this.paperForm = this.fb.group({
      TeacherName: ['', Validators.required],
      Email: ['', Validators.required],
      SubjectName: ['', Validators.required]
    })
  }
  save(){
    this.submitted = true;
    if(this.paperForm.invalid){
      return;
    }
    this.ls.showLoad=true;
    this.ss.AddPaper(this.paperForm.value).subscribe((data)=>{
      this.submitted = false;
      this.parent.closeForm();
    });
    
  }
  get f() { return this.paperForm.controls; }

}
