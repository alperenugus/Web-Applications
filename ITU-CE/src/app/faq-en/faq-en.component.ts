import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-faq-en',
  templateUrl: './faq-en.component.html',
  styleUrls: ['./faq-en.component.css']
})
export class FaqEnComponent implements OnInit {

  @Output() routeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  routeChanged(route: string){
    this.routeChange.emit(route);
  }

}
