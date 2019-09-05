import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

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
import { MyDirectiveDirective } from './composition/directives/my-directive.directive';
import { OrderComponent } from './order/order/order.component';
import { LineItemComponent } from './order/line-item/line-item.component';
import { AddressComponent } from './order/address/address.component';
import { PanelComponent } from './composition/panel/panel/panel.component';
import { PanelMultipleChildrenComponent } from './composition/panel/panel-multiple-children/panel-multiple-children.component';
import { HighlightHighCostDirective } from './composition/directives/highlight-high-cost.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent, ChildComponent, GrandParentComponent,
    PureComponentComponent,
    SimpleComponent, MultipleComponent, MainComponent, MyDirectiveDirective,
    DoubleComponent, CustomDatePipe,
    OrderComponent, LineItemComponent, AddressComponent,
    PanelComponent,
    PanelMultipleChildrenComponent,
    HighlightHighCostDirective
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
