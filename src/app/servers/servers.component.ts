import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements  OnInit{
  allowNewServer=false;
  serverCreationstatus='No server was created';
  servrName=' ';
  serverCreated  = false;
constructor (){
  setTimeout(() => {
    this.allowNewServer=true;
  },2000)

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onCreateServer(){  
    this.serverCreated  = true;

    // this.serverCreationstatus='Server was created! Name is '+this.servrName;  ;
  }
  onUpdateServerName (event: Event){
    // console.log(event);
    this.servrName=(<HTMLInputElement>event.target).value;
  }
}

