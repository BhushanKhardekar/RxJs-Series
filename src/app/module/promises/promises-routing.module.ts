import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ViewPromisesComponent } from './view-promises/view-promises.component';
const routes: Routes = [
  {
    path: '', component: ContainerComponent, children: [
      { path: 'promise', component: ViewPromisesComponent },
      { path: 'observable', component: ObservableComponent, children:[
        {path:'',component:ListComponent},
        {path:'fromevent',component:FromEventComponent},
        {path:'interval',component:IntervalComponent},
        {path:'ofFrom',component:OfFromComponent},
      ] },
      { path: '**', redirectTo: 'observable', pathMatch: 'full', }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromisesRoutingModule { }
