import { Component, OnInit } from '@angular/core';
import {} from '../models/student'

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.less']
})
export class DeveloperComponent implements OnInit {
  parts = [true, false, false, false];
  projects:Project[] = [
    {Id:1,Name:"CarsCrete", Tasks:[
      {Id:1, Name:"Убрать бирки с автомобилей", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Low},
      {Id:2, Name:"Добавить цену по сезонам", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Medium},
      {Id:3, Name:"Добавить отступ на главной странице", Description:"Некрасиво смотрится", Status:Status.Response, Priority:Priority.Low},
      {Id:4, Name:"Сделал мессенджер выше меню", Description:"Баг", Status:Status.Resolved, Priority:Priority.Medium},
      {Id:5, Name:"Изменить файлы на хосте", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Hight}
    ]},
    {Id:1, Name:"NoLedCorp", Tasks:[
      {Id:1, Name:"Убрать бирки с автомобилей", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Low},
      {Id:2, Name:"Добавить цену по сезонам", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Medium},
      {Id:3, Name:"Добавить отступ на главной странице", Description:"Некрасиво смотрится", Status:Status.Response, Priority:Priority.Low},
      {Id:4, Name:"Сделал мессенджер выше меню", Description:"Баг", Status:Status.Resolved, Priority:Priority.Medium},
      {Id:5, Name:"Изменить файлы на хосте", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Hight}
    ]},
  ]
  techs:Technology[];
  constructor() { 
    
  }

  ngOnInit() {
    console.log()
  }
  showPart(i){
    this.parts[i]=!this.parts[i];
  }
  getResponsed(p:Project){
    return p.Tasks.filter(x => x.Status == Status.Response).length;
  }
  getResolved(p:Project){
    return p.Tasks.filter(x => x.Status == Status.Resolved).length;
  }
  getTech(s:Sphere){
    return this.techs.filter(x => x.Sphere == s);
  }

}




