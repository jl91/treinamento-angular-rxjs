import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {CoreModule} from "../../core/core.module";
import {TemplateRoutingModule} from "./template-routing.module";
import {CombineLatestComponent} from "../operators/combine latest/combine-latest.component";
import {DebounceTimeComponent} from "../operators/debounce-time/debounce-time.component";
import {ForkJoinComponent} from "../operators/fork-join/fork-join.component";
import {RouterModule} from "@angular/router";
import {TemplateComponent} from "./template.component";
import {FormsModule} from "@angular/forms";
import {MenuComponent} from "./menu/menu.component";
import {SimpleTestComponent} from "../tests/simple-test/simple-test.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
    TemplateRoutingModule,
  ],
  exports: [
    TemplateRoutingModule
  ],
  declarations: [
    TemplateComponent,
    CombineLatestComponent,
    DebounceTimeComponent,
    ForkJoinComponent,
    MenuComponent,
    SimpleTestComponent
  ],
  providers: [],
})
export class TemplateModule {
}
