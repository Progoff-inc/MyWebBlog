import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  allnews:News[]=[
    {img:'../../assets/images/linux.jpg', header:'Экзамен по Линуксу', text:'18/01/2019 11:00 (508/509) - экзамен по линуксу. Будет практика и теория. Необходимо подготовить клиент/сервер + apache'},
    {img:'../../assets/images/filosofy.jpg', header:'Экзамен по Философии', text:'22/01/2019 11:00 (303) - экзамен по философии. Здесь поможет только свеча в церкви... Нужно учить все от Патона до Бердяева.'},
    {img:'../../assets/images/mysql.png', header:'Экзамен по СУБД', text:'26/01/2019 11:00 (408/409) - экзамен по СУБД. Вся теория уже подготовлена, но надо подтянуть практику.'},
    {img:'../../assets/images/linux.jpg', header:'Экзамен по Линуксу', text:'18/01/2019 11:00 (508/509) - экзамен по линуксу. Будет практика и теория. Необходимо подготовить клиент/сервер + apache'},
    {img:'../../assets/images/filosofy.jpg', header:'Экзамен по Философии', text:'22/01/2019 11:00 (303) - экзамен по философии. Здесь поможет только свеча в церкви... Нужно учить все от Патона до Бердяева.'},
    {img:'../../assets/images/mysql.png', header:'Экзамен по СУБД', text:'26/01/2019 11:00 (408/409) - экзамен по СУБД. Вся теория уже подготовлена, но надо подтянуть практику.'}
  ]
  news = [];
  papers:Paper[]=[{Title:'Линукс',Img:'../../assets/images/paper.jpg'}, {Title:'Филососфия',Img:'../../assets/images/paper.jpg'}, {Title:'СУБД', Img:'../../assets/images/paper.jpg'}];
  exams:Exam[]=[{Title:'Линукс',Img:'../../assets/images/exam.jpg', Date:new Date(2019,1,18)}, {Title:'Филососфия',Img:'../../assets/images/exam.jpg', Date:new Date(2019,1,22)}, {Title:'СУБД', Img:'../../assets/images/exam.jpg', Date:new Date(2019,1,26)}];
  timesheet=[
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}],
    [{Name:'Математика', Lesson:1},{Name:'Программирование', Lesson:2},{Name:'-', Lesson:3},{Name:'Физика', Lesson:4},{Name:'-', Lesson:5}]

  ];
  parts = [true, false, false, false];
  constructor() { }

  ngOnInit() {
    let size = 3; //размер подмассива
    let subarray = []; //массив в который будет выведен результат.
    for (let i = 0; i <Math.ceil(this.allnews.length/size); i++){
        this.news[i] = this.allnews.slice((i*size), (i*size) + size);
    }
    console.log(subarray);
  }
  chooseExam(Name){
    console.log(Name);
  }
  showPart(i){
    this.parts[i]=!this.parts[i];
  }
}


 export interface News{
   img:string,
   header:string,
   text:string,
   link?:string
 }
 export interface Exam{
  Title:string;
  Date?:Date;
  Img?:string;
  Links?:Link[];
  Questions?:string[];
  Answers?:string[];
  Files?:File[];
 }
 export interface Paper{
  Title:string;
  Img?:string;
  Links?:Link[];
  Files?:File[];
 }
export interface Link{
  Name:string;
  Link:string;
}
export interface Lesson{
  Date?:Date,
  Room?:number,
  Teacher?:string,
  Name:string,
  Lesson:number
}
