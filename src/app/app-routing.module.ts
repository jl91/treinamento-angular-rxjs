import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForkJoinComponent} from './pages/fork-join/fork-join.component';
import {CombineLatestComponent} from './pages/combine latest/combine-latest.component';


const routes: Routes = [
  {
    path: 'fork-join',
    component: ForkJoinComponent
  },
  {
    path: 'combine-latest',
    component: CombineLatestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
