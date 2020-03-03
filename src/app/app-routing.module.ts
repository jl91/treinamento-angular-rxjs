import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForkJoinComponent} from './pages/fork-join/fork-join.component';
import {CombineLatestComponent} from './pages/combine latest/combine-latest.component';
import {DebounceTimeComponent} from './pages/debounce-time/debounce-time.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
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
