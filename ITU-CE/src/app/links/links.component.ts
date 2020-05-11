import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  @Output() routeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  routeChanged(route: string){
    this.routeChange.emit(route);
  }

}
