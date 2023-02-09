import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SamplesharedlibraryModule } from 'projects/samplesharedlibrary/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SamplesharedlibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
