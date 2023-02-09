import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit {

  @Input()  consumedApplicationName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
