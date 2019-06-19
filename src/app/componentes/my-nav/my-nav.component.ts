import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {
  @Input() titulo: string;
  @Input() img: string;
  constructor() { }

  ngOnInit() {
  }

}