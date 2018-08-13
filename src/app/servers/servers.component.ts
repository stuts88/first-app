import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers=["Test1","Test2"];
  allowNewServer = false;
  newServerStatus = "No new server created";
  showDetails = false;
  clickLog = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.newServerStatus = "New server with name - "  + this.serverName + " successfully";
  }

  onShowDisplay() {
    this.showDetails = !this.showDetails;
    //console.log(this.clickLog[this.clickLog.length-1]);
    this.clickLog.push(new Date());
  }

}
