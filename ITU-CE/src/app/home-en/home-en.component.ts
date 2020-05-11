import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent implements OnInit {

  @Output() routeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  routeChanged(route: string){
    this.routeChange.emit(route);
  }


}
