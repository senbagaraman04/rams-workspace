import { NgModule } from '@angular/core';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HelloComponentComponent
  ],
  imports: [
     CommonModule
  ],
  exports: [
    HelloComponentComponent
  ]
})
export class SamplesharedlibraryModule { }
