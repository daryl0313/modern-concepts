import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public myNumberValue = 6;

  ngOnInit() {
  }

  public handleNumberOutput(newNumberValue: number) {
    this.myNumberValue = newNumberValue;
  }

}
