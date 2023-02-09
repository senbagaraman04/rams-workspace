import { NgModule } from '@angular/core';
import { SamplesharedlibraryComponent } from './samplesharedlibrary.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';



@NgModule({
  declarations: [
    SamplesharedlibraryComponent,
    HelloComponentComponent
  ],
  imports: [
  ],
  exports: [
    SamplesharedlibraryComponent
  ]
})
export class SamplesharedlibraryModule { }
