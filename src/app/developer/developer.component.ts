import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
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
  techs:Technology[] = [
    {Id:1, Name:"Angular", Language:"TypeScript", Sphere:Sphere.Front},
    {Id:2, Name:"React.js", Language:"JavaScript", Sphere:Sphere.Front},
    {Id:3, Name:"Vue.js", Language:"JavaScript", Sphere:Sphere.Front},
    {Id:4, Name:"PHP", Language:"PHP", Sphere:Sphere.Back},
    {Id:5, Name:"ASP.NET", Language:"C#", Sphere:Sphere.Back},
    {Id:6, Name:"Node.js", Language:"JavaScript", Sphere:Sphere.Back},
    {Id:7, Name:"MySql", Language:"SQL", Sphere:Sphere.DataBase},
    {Id:8, Name:"MS SQL Server", Language:"SQL", Sphere:Sphere.DataBase},
    {Id:9, Name:"Oracle PL/SQL", Language:"SQL", Sphere:Sphere.DataBase},
  ]
  public s:Sphere;
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

export class Project{
  Id:number;
  Name:string;
  Tasks:ProjectTask[];
}
export class ProjectTask{
  Id:number;
  Name:string;
  Description:string;
  Status:Status;
  Priority:Priority;
}
export enum Status{
  Response,
  Active,
  Resolved,
  Closed
}
export enum Priority{
  Low,
  Medium,
  Hight
}
export enum Sphere{
  Front,
  Back,
  DataBase
}
export class Technology{
  Id:number
  Name:string;
  Language:string;
  Sphere:Sphere;
}
