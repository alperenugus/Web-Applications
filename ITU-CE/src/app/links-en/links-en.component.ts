import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-links-en',
  templateUrl: './links-en.component.html',
  styleUrls: ['./links-en.component.css']
})
export class LinksEnComponent implements OnInit {

  @Output() routeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  routeChanged(route: string){
    this.routeChange.emit(route);
  }

}
