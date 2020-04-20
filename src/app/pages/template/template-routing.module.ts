import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from "./template.component";
import {HomeComponent} from "../home/home.component";
import {ForkJoinComponent} from "../operators/fork-join/fork-join.component";
import {CombineLatestComponent} from "../operators/combine latest/combine-latest.component";
import {DebounceTimeComponent} from "../operators/debounce-time/debounce-time.component";

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'operators',
        children: [
          {
            path: 'fork-join',
            component: ForkJoinComponent
          },
          {
            path: 'combine-latest',
            component: CombineLatestComponent
          },
          {
            path: 'debounce-time',
            component: DebounceTimeComponent
          },
        ]
      },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class TemplateRoutingModule {
}
