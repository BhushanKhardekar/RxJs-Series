import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromisesRoutingModule } from './promises-routing.module';
import { ViewPromisesComponent } from './view-promises/view-promises.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';


@NgModule({
  declarations: [
    ViewPromisesComponent,
    HeaderComponent,
    ContainerComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent
  ],
  imports: [
    CommonModule,
    PromisesRoutingModule
  ]
})
export class PromisesModule { }
