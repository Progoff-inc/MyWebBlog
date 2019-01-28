import { Component, OnInit } from '@angular/core';
import { News, Paper, Exam, } from '../models/student'
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { StudentService } from '../services/StudentService';
import { Router } from '@angular/router';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  modalRef2: BsModalRef;
  allnews:News[];
  ctrl = this;
  news = [];
  papers:Paper[];
  exams:Exam[];
  timesheet=[
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}]

  ];
  parts = [true, false, false, false];
  adding:string;
  constructor(private ls:LoadService, private modalService: BsModalService, public ss: StudentService, public router:Router) { }
  ngOnInit() {
    let load = [true,true];
    this.ls.showLoad=true;
    this.ss.GetPapers().subscribe(data => {
      data.forEach(x => {
        x.ModifyDate = new Date(x.ModifyDate);
      });
      data.sort((a,b)=>{
        return a.ModifyDate<b.ModifyDate?1:-1;
      })
      this.papers = data;
      load[0]=false;
      this.ls.showLoad=!(load[0] == load[1]);
    })
    this.ss.GetExams().subscribe(data => {

      data.forEach(x => {
        
        x.DateStart = new Date(x.DateStart);
        x.DateFinish = new Date(x.DateFinish);
        x.DateStart = new Date(x.DateStart.getFullYear(), x.DateStart.getMonth(), x.DateStart.getDate(), x.DateStart.getHours()+3, x.DateStart.getMinutes());
        x.DateFinish = new Date(x.DateFinish.getFullYear(), x.DateFinish.getMonth(), x.DateFinish.getDate(), x.DateFinish.getHours()+3, x.DateFinish.getMinutes());
      
      });
      data.sort((a,b)=>{
        return a.DateStart>b.DateStart?1:-1;
      })
      this.exams = data;
      load[1]=false;
      this.ls.showLoad=!(load[0] == load[1]);
    })
    let size = 3; //размер подмассива
    let subarray = []; //массив в который будет выведен результат.
    if(this.allnews){
      for (let i = 0; i <Math.ceil(this.allnews.length/size); i++){
        this.news[i] = this.allnews.slice((i*size), (i*size) + size);
      }
    }
    
  }
  closeForm(){
    switch(this.adding){
      case 'paper':{
        this.ss.GetPapers().subscribe(data => {
          data.forEach(x => {
            x.ModifyDate = new Date(x.ModifyDate);
            
          });
          data.sort((a,b)=>{
            return a.ModifyDate>b.ModifyDate?1:-1;
          })
          this.papers = data;
          this.modalRef2.hide();
          this.ls.showLoad=false;
        })
      } 
      case 'exam':{
        this.ss.GetExams().subscribe(data => {
          data.forEach(x => {
            x.DateStart = new Date(x.DateStart);
            x.DateFinish = new Date(x.DateFinish);
            x.DateStart = new Date(x.DateStart.getFullYear(), x.DateStart.getMonth(), x.DateStart.getDate(), x.DateStart.getHours()+3, x.DateStart.getMinutes());
            x.DateFinish = new Date(x.DateFinish.getFullYear(), x.DateFinish.getMonth(), x.DateFinish.getDate(), x.DateFinish.getHours()+3, x.DateFinish.getMinutes());
          });
          data.sort((a,b)=>{
            return a.DateStart<b.DateStart?1:-1;
          })
          this.exams = data;
          
          this.modalRef2.hide();
          this.ls.showLoad=false;
        })
      }
    }
    
    
    
    
  }
  closeFormClear(){
    this.modalRef2.hide();
  }
  chooseExam(Name){
    console.log(Name);
  }
  showPart(i){
    this.parts[i]=!this.parts[i];
  }
  addElem(i, template: TemplateRef<any>){
    this.adding = i;
    this.modalRef2 = this.modalService.show(template);
  }
  showPaper(id){
    this.router.navigate(
      ['/studies', id], 
      {
          queryParams:{
              'type':'paper' 
          }
      }
    );
  }
}


