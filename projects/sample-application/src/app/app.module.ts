import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SamplesharedlibraryModule } from '../../../samplesharedlibrary/src/public-api';

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
