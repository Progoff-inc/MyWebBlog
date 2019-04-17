import { Component, OnInit, ViewChild, TemplateRef, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.less']
})
export class CreateAreaComponent implements OnInit {
  size = 12;
  @ViewChild('area') area;
  styles = {
    underline:false,
    italic:false,
    bold:false,
    size:12,
  }
  constructor() { }

  ngOnInit() {
    this.setStyles();
    
  }
  setStyles(e?){
    let selection = window.getSelection();
    if(selection.type!="None"){
      let ra = selection.getRangeAt(0);
      ra.deleteContents()
      
      var s = document.createElement('span');
      this.setSize(s);
      this.setU(s);
      this.setI(s);
      this.setB(s);
      console.log(s.style);
      s.innerHTML='&nbsp;';
      ra.insertNode(s);
    }
  }

  setSize(s){
    s.style.fontSize=this.styles.size.toString()+'pt';
   
  }

  setU(s){
    if(this.styles.underline){
      s.style.textDecoration='underline';
    }
  }

  setI(s){
    if(this.styles.italic){
      s.style.fontStyle='italic';
    }
  }

  setB(s){
    if(this.styles.bold){
      s.style.fontWeight='bold';
    }
  }

  getLastChild(elem){
    var c;
    while(elem){
      c = elem;
      elem = elem.lastChild;
    }
    return c;
  }

  
}
