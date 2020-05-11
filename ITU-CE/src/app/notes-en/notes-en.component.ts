import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes-en',
  templateUrl: './notes-en.component.html',
  styleUrls: ['./notes-en.component.css']
})
export class NotesEnComponent implements OnInit {

  @Output() routeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  routeChanged(route: string){
    this.routeChange.emit(route);
  }

}
