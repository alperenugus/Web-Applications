import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ITU-CE';


  route: string = 'home';

  onRouteChange(route: string){
    this.route = route;
  }


}
