import { NgModule } from '@angular/core';
import { SamplesharedlibraryComponent } from './samplesharedlibrary.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SamplesharedlibraryComponent,
    HelloComponentComponent
  ],
  imports: [
     CommonModule
  ],
  exports: [
    SamplesharedlibraryComponent,
    HelloComponentComponent
  ]
})
export class SamplesharedlibraryModule { }
