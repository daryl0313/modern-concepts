import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent.component';
import { ChildComponent } from './components/child.component';
import { DoubleComponent } from './double.component';
import { CustomDatePipe } from './custom-date.pipe';
import { GrandParentComponent } from './components/grand-parent.component';
import { PureComponentComponent } from './pureComponent/pure-component.component';
import { SimpleComponent } from './composition/simple.component';
import { MultipleComponent } from './composition/multiple.component';
import { MainComponent } from './composition/main.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, DoubleComponent, CustomDatePipe, GrandParentComponent, PureComponentComponent, SimpleComponent, MultipleComponent, MainComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
