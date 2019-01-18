// import { Component, OnInit } from '@angular/core';
// import { Project, Technology, Sphere, Status, Priority } from '../developer/developer.component';


// @Component({
//   selector: 'app-householder',
//   templateUrl: './householder.component.html',
//   styleUrls: ['./householder.component.css']
// })
// export class HouseholderComponent implements OnInit {
//   parts = [true, false, false, false];
//   projects:Project[] = [
//     {Id:1,Name:"CarsCrete", Tasks:[
//       {Id:1, Name:"Убрать бирки с автомобилей", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Low},
//       {Id:2, Name:"Добавить цену по сезонам", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Medium},
//       {Id:3, Name:"Добавить отступ на главной странице", Description:"Некрасиво смотрится", Status:Status.Response, Priority:Priority.Low},
//       {Id:4, Name:"Сделал мессенджер выше меню", Description:"Баг", Status:Status.Resolved, Priority:Priority.Medium},
//       {Id:5, Name:"Изменить файлы на хосте", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Hight}
//     ]},
//     {Id:1, Name:"NoLedCorp", Tasks:[
//       {Id:1, Name:"Убрать бирки с автомобилей", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Low},
//       {Id:2, Name:"Добавить цену по сезонам", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Medium},
//       {Id:3, Name:"Добавить отступ на главной странице", Description:"Некрасиво смотрится", Status:Status.Response, Priority:Priority.Low},
//       {Id:4, Name:"Сделал мессенджер выше меню", Description:"Баг", Status:Status.Resolved, Priority:Priority.Medium},
//       {Id:5, Name:"Изменить файлы на хосте", Description:"Просьба заказчика", Status:Status.Response, Priority:Priority.Hight}
//     ]},
//   ]
//   techs:Technology[] = [
//     {Id:1, Name:"Angular", Language:"TypeScript", Sphere:Sphere.Front},
//     {Id:2, Name:"React.js", Language:"JavaScript", Sphere:Sphere.Front},
//     {Id:3, Name:"Vue.js", Language:"JavaScript", Sphere:Sphere.Front},
//     {Id:4, Name:"PHP", Language:"PHP", Sphere:Sphere.Back},
//     {Id:5, Name:"ASP.NET", Language:"C#", Sphere:Sphere.Back},
//     {Id:6, Name:"Node.js", Language:"JavaScript", Sphere:Sphere.Back},
//     {Id:7, Name:"MySql", Language:"SQL", Sphere:Sphere.DataBase},
//     {Id:8, Name:"MS SQL Server", Language:"SQL", Sphere:Sphere.DataBase},
//     {Id:9, Name:"Oracle PL/SQL", Language:"SQL", Sphere:Sphere.DataBase},
//   ]
//   constructor() { }

//   ngOnInit() {
//   }
//   showPart(i){
//     this.parts[i]=!this.parts[i];
//   }
//   getResponsed(p:Project){
//     return p.Tasks.filter(x => x.Status == Status.Response).length;
//   }
//   getResolved(p:Project){
//     return p.Tasks.filter(x => x.Status == Status.Resolved).length;
//   }
//   getTech(s:Sphere){
//     return this.techs.filter(x => x.Sphere == s);
//   }

// }
