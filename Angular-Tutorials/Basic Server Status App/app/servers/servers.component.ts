import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-server',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent{

  serverId: number = 10;
  serverStatus: string = 'online';
  allowNewServer = false;
  serverName='TestServer';
  serverCreated=false;
  servers = ['TestServer' , 'TestServer 2'];

  serverCreationStatus = "No server is created!";

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server was created! Name is "+this.serverName;
    
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
