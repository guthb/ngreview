import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '[app-server]',
  // selector: '.app-server',
  templateUrl: './server.component.html',
  //styleUrls: ['./server.component.css']
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  serverCreated = false;
  servers = [ 'TestServer', 'TestServer 2'];

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  getserverStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push[this.serverName];
    this.serverCreationStatus = 'server was created, Server Name is: '  + this.serverName;
  }

  onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
