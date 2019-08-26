import { Component } from '@angular/core';

@Component({
  selector: 'mc-composition',
  templateUrl: './main.component.html',
  styles: [`.bordered { border: solid 1px grey; margin: 5px; }`]
})
export class MainComponent {
  values = [1, 4, 7, 14];
}
