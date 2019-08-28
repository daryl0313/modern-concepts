import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'mc-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  public myNumberValue = 6;
  public myDateValue = new Date();
  public myArray: string[] = [];

  public handleNumberOutput(newNumberValue: number) {
    this.myNumberValue = newNumberValue;
  }
}
