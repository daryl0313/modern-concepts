import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mc-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input()
  public stringInput: string;

  @Input()
  public numberInput: number;

  @Output()
  public numberOutput = new EventEmitter<number>();

  ngOnInit() {
  }

  public handleButtonClick() {
    this.numberOutput.emit(this.numberInput + 2);
  }

}
