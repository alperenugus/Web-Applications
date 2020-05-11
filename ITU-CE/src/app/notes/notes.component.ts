import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Output() routeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  routeChanged(route: string){
    this.routeChange.emit(route);
  }

}
