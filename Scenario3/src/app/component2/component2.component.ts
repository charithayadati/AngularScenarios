import { Component, OnInit,Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
@Input('parentdata')  public input;

  constructor() { }

  ngOnInit() {
  }

}
