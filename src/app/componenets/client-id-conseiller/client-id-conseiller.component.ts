import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompteService} from "../../services/compte.service";
import {ClientService} from "../../services/client.service";
import {Client} from "../../model/client";
import {ConseillerService} from "../../services/conseiller.service";
import {Conseiller} from "../../model/Conseiller";

@Component({
  selector: 'app-client-id-conseiller',
  templateUrl: './client-id-conseiller.component.html',
  styleUrls: ['./client-id-conseiller.component.css']
})
export class ClientIdConseillerComponent implements OnInit {
  id:any;
  client:Client[]=[]
  conseiller:Conseiller={

  }

  constructor(private route:ActivatedRoute,public clientSer:ClientService,public conseillerSer:ConseillerService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    console.log(this.id)
    this.getclient();
    this.getConseiller();

  }

  getConseiller(){
    this.conseillerSer.getConseiller(this.id).subscribe(res1=>{
        this.conseiller=res1 as Conseiller;
    })
  }

  getclient(){
    this.clientSer.getByConseiller(this.id).subscribe(res=>{
      this.client=res as Client[];
      console.log(res)

    })
  }



}
