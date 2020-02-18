import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForkJoinComponent} from './pages/fork-join/fork-join.component';
import {CombineLatestComponent} from './pages/combine latest/combine-latest.component';
import {DebounceTimeComponent} from './pages/debounce-time/debounce-time.component';


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
