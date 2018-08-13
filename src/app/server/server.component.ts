import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
  styles: [`
    .online {
      background-color : green;
    }
    `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = "offline";
  serverName = "Server Name";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
