import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import {Client} from "../../model/client";
import {AuthentificationService} from "../../services/authentification.service";
import {ConseillerService} from "../../services/conseiller.service";
import {Conseiller} from "../../model/Conseiller";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {


  test:boolean=false;
  client:Client[]=[]
  client1:Client[] =[];
  public email: any;
  id:any;
  cons:Conseiller={};
  conseiller:Conseiller={

  }
  public test1: any;
  public url: any;

  constructor(private router:Router,public clientSer:ClientService,public auth:AuthentificationService,public conseillerSer:ConseillerService) { }

  ngOnInit(): void {
    this.auth.log=false;
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationStart){
        this.url=val.url;
        console.log(this.url)
      }
    } )
    if(this.email=this.auth.getInfo().sub){
      this.getClient();

      console.log(this.auth.getInfo().sub);
      this.getConseillerByEmail()
    }
   // this.router.navigateByUrl('/')
   // this.getClientByConseiller();

  }

  getClient(){
    this.clientSer.getAll().subscribe(res=>{

      this.client=res as Client[]
      this.client.forEach(a=>{
        if(a.compte===null)
         this.test=false
      })

    })
  }

  getConseillerByEmail(){
    this.conseillerSer.getConseilleByemail(this.email).subscribe(res3=>{
      this.conseiller=res3 as Conseiller
      this.clientSer.getByConseiller(this.conseiller.id).subscribe(res=>{

        this.client1=res as Client[]

      })
      this.conseillerSer.getConseiller(this.conseiller.id).subscribe(res4=>{
        this.cons=res4 as Conseiller
      })

    })
  }


  isAdmin(){
   return  this.auth.isAdmin() && this.auth.isUser();


  }



}
