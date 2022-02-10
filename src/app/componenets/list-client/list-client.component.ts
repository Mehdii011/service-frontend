import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import {Client} from "../../model/client";
import {AuthentificationService} from "../../services/authentification.service";
import {ConseillerService} from "../../services/conseiller.service";
import {Conseiller} from "../../model/Conseiller";
import {Router} from "@angular/router";

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
  conseiller:Conseiller={

  }

  constructor(private router:Router,public clientSer:ClientService,public auth:AuthentificationService,public conseillerSer:ConseillerService) { }

  ngOnInit(): void {
    this.email=this.auth.getInfo().sub
   // this.router.navigateByUrl('/')
    this.getClient();

    console.log(this.auth.getInfo().sub);
   this.getConseillerByEmail()

   // this.getClientByConseiller();

  }

  getClient(){
    this.clientSer.getAll().subscribe(res=>{

      this.client=res as Client[]
          this.test=false;

    })
  }
  getConseillerByEmail(){
    this.conseillerSer.getConseilleByemail(this.email).subscribe(res3=>{
      this.conseiller=res3 as Conseiller
      this.clientSer.getByConseiller(this.conseiller.id).subscribe(res=>{

        this.client1=res as Client[]

      })

    })
  }


  isAdmin(){
   return  this.auth.isAdmin() && this.auth.isUser();


  }



}
