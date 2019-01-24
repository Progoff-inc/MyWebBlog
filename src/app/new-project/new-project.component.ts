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
  submitted = false;
  @Input() parent;
  constructor(private fb:FormBuilder, public dv:DeveloperService) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      Name: ['', Validators.required],
      DateStart: ['', Validators.required],
      Description: ['', Validators.required]
    })
  }
  save(files){
    this.submitted = true;
    if(this.projectForm.invalid){
      return;
    }
    console.log(files);
    const formData = new FormData();
    // files[0].name = this.userService.currentUser.Id.toString()+files[0].name.split('.')[1] ;
    
    let n = this.projectForm.value.Name+'.'+files[0].name.split('.')[1];
    console.log(files[0]);
    formData.append(n, files[0]);
    console.log(formData);
    let t = this.projectForm.value;
    this.dv.AddProject({Name:t.Name, DateStart:t.DateStart, Description:t.Description, File:formData}).subscribe((data)=>{
      console.log(data);
      //this.submitted = false;
      //this.parent.closeForm();
    });
    
  }
  upload(files) {
    const formData = new FormData();
    // files[0].name = this.userService.currentUser.Id.toString()+files[0].name.split('.')[1] ;
    
    let n = this.projectForm.value.Id.toString()+'.'+files[0].name.split('.')[1] ;
    console.log(n);
    formData.append(n, files[0]);

    // this.userService.UploadPhoto(formData).subscribe(event => {
    //   this.userService.ChangePhoto({Id:this.userService.currentUser.Id, Photo:event.Path}).subscribe(data => {
        
    //   })
    // });

      
  }
  get f() { return this.projectForm.controls; }

}
