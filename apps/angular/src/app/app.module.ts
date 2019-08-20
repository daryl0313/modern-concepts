import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { DoubleComponent } from './double.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, DoubleComponent, CustomDatePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
