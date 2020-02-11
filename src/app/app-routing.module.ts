import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForkJoinComponent} from './pages/fork-join/fork-join.component';


const routes: Routes = [
  {
    path: 'fork-join',
    component: ForkJoinComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
