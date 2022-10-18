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
import { MapOperatorComponent } from './observable/map-operator/map-operator.component';
import { PluckOperatorComponent } from './observable/pluck-operator/pluck-operator.component';
import { FilterOperatorComponent } from './observable/filter-operator/filter-operator.component';
import { TapOperatorComponent } from './observable/tap-operator/tap-operator.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';


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
    CustomComponent,
    MapOperatorComponent,
    PluckOperatorComponent,
    FilterOperatorComponent,
    TapOperatorComponent,
    TakeComponent,
    RetryComponent
  ],
  imports: [
    CommonModule,
    PromisesRoutingModule
  ]
})
export class PromisesModule { }
