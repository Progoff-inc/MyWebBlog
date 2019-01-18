import { Component, OnInit } from '@angular/core';
import { News, Paper, Exam, } from '../models/student'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  allnews:News[];
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
  constructor() { }

  ngOnInit() {
    let size = 3; //размер подмассива
    let subarray = []; //массив в который будет выведен результат.
    if(this.allnews){
      for (let i = 0; i <Math.ceil(this.allnews.length/size); i++){
        this.news[i] = this.allnews.slice((i*size), (i*size) + size);
      }
    }
    
    console.log(subarray);
  }
  chooseExam(Name){
    console.log(Name);
  }
  showPart(i){
    this.parts[i]=!this.parts[i];
  }
  addElem(i){
    this.adding = i;
  }
}


