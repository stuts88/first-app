import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  serverId = 10;
  serverStatus = "offline";
  allowNewServer = false;
  newServerStatus = "No new server created";
  serverName = "Start Server";
  username = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.newServerStatus = "New server with name - "  + this.serverName + " successfully";
  }

}
