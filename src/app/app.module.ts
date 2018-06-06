import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PlaygroundModule } from './playground/playground.module';
import { AppRoutingModule } from './app.routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    PlaygroundModule,

    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
