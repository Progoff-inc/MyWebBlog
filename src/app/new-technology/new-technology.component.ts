import { Component, OnInit, Input } from '@angular/core';
import { Sphere } from '../models/base'

@Component({
  selector: 'new-technology',
  templateUrl: './new-technology.component.html',
  styleUrls: ['./new-technology.component.css']
})
export class NewTechnologyComponent implements OnInit {
 @Input() type:number; 
  constructor() { }
  get sphs() { return ['Фронт-енд', 'Бэк-енд', 'Базы данных']}
  ngOnInit() {

  }

}
