import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [AppComponent, DiscoverComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'discover', component: DiscoverComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
