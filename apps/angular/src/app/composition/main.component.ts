import { Component, OnInit } from '@angular/core';
import { MyService } from './MyService';

@Component({
  selector: 'mc-composition',
  templateUrl: './main.component.html',
  styles: [`.bordered { border: solid 1px grey; margin: 5px; }`]
})
export class MainComponent implements OnInit {
  constructor(private myService: MyService) { }

  values = [1, 4, 7, 14];

  ngOnInit() {
    this.myService.getMyData()
      .subscribe(data => console.log('service returned', data));
  }
}
