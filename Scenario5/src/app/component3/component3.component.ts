import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
public input="";
  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent = new EventEmitter;

  public display(){
    console.log("emitted in component 3"+this.input);
this.childEvent.emit(this.input);
}
}
