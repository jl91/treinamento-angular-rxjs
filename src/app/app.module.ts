import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './pages/home/home.component';
import {TranslatePipe} from './pages/home/pipe/translate.pipe';
import {CoreModule} from './core/core.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TranslatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
