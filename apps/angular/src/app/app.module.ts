import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order/order.component';
import { LineItemComponent } from './order/line-item/line-item.component';
import { AddressComponent } from './order/address/address.component';
import { PanelComponent } from './composition/panel/panel/panel.component';
import { PanelMultipleChildrenComponent } from './composition/panel/panel-multiple-children/panel-multiple-children.component';
import { HighlightHighCostDirective } from './composition/directives/highlight-high-cost.directive';

@NgModule({
  declarations: [
    AppComponent,
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
