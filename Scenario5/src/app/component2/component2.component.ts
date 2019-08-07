import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
public input="";
  constructor() { }

  ngOnInit() {
  }

  @Output() public event=new EventEmitter;

public fireEvent($event:string){
  this.input=$event;
  console.log("emitted in component 2"+this.input);
  this.event.emit(this.input);
}
}