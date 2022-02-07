import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import {Client} from "../../model/client";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  client:Client[]=[];

  constructor(public clientSer:ClientService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    this.clientSer.getAll().subscribe(res=>{

      this.client=res as Client[]
          console.log(this.client) ;

    })
  }

}
