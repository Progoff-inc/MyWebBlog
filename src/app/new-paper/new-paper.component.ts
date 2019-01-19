import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/StudentService';

@Component({
  selector: 'new-paper',
  templateUrl: './new-paper.component.html',
  styleUrls: ['./new-paper.component.css']
})
export class NewPaperComponent implements OnInit {
  paperForm: FormGroup;
  @Input() parent;
  constructor(private fb:FormBuilder, public ss: StudentService) { }

  ngOnInit() {
    this.paperForm = this.fb.group({
      TeacherName: ['', Validators.required],
      Email: ['', Validators.required],
      SubjectName: ['', Validators.required]
    })
  }
  save(){
    
    this.ss.AddPaper(this.paperForm.value).subscribe((data)=>{
      this.parent.closeForm();
    });
    
  }

}
