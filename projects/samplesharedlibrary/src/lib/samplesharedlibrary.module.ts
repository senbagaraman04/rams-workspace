import { NgModule } from '@angular/core';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HelloComponentComponent
  ],
  imports: [
     CommonModule,
     MatButtonModule
  ],
  exports: [
    HelloComponentComponent
  ]
})
export class SamplesharedlibraryModule { }
