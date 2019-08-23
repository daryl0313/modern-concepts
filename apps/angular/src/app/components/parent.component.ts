import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'mc-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  constructor() { }

  public myNumberValue = 6;
  public myDateValue = new Date();
  public myArray: string[] = [];

  @ViewChild(ChildComponent, { static: false }) childComponent: ChildComponent;

  ngAfterViewInit() {
    console.log(this.childComponent);
  }

  public getArrayKey(index: number, v: string) {
    return v;
  }

  public handleNumberOutput(newNumberValue: number) {
    this.myNumberValue = newNumberValue;
  }
}
