import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { FilterOperatorComponent } from './observable/filter-operator/filter-operator.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapOperatorComponent } from './observable/map-operator/map-operator.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckOperatorComponent } from './observable/pluck-operator/pluck-operator.component';
import { RetryComponent } from './observable/retry/retry.component';
import { TakeComponent } from './observable/take/take.component';
import { TapOperatorComponent } from './observable/tap-operator/tap-operator.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { ViewPromisesComponent } from './view-promises/view-promises.component';
const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'promise', component: ViewPromisesComponent },
      { path: 'form', component: FormDemoComponent },
      {
        path: 'observable',
        component: ObservableComponent,
        children: [
          { path: '', component: ListComponent },
          { path: 'fromevent', component: FromEventComponent },
          { path: 'interval', component: IntervalComponent },
          { path: 'ofFrom', component: OfFromComponent },
          { path: 'toarray', component: ToArrayComponent },
          { path: 'custom', component: CustomComponent },
          { path: 'map', component: MapOperatorComponent },
          { path: 'pluck', component: PluckOperatorComponent },
          { path: 'filter', component: FilterOperatorComponent },
          { path: 'tap', component: TapOperatorComponent },
          { path: 'take', component: TakeComponent },
          { path: 'retry', component: RetryComponent },
          { path: 'debounce', component: DebounceTimeComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromisesRoutingModule { }
