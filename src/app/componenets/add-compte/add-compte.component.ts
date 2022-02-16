import { Component, OnInit } from '@angular/core';
import {Conseiller} from "../../model/Conseiller";
import {Compte} from "../../model/Compte";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {Client} from "../../model/client";
import {CompteService} from "../../services/compte.service";
import {AuthentificationService} from "../../services/authentification.service";
import {ConseillerService} from "../../services/conseiller.service";

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {
   client:Client[]=[]
  client1:Client[]=[]


  compte:Compte={

    numeroCompte:0,
    solde:0,
    client:[{

    }],
    decouvert:0
  }
   id: any;
  id1:any
  id2:any
  email:any;
  conseiller:Conseiller={

  }

  constructor(private route:ActivatedRoute,private router:Router,public clientSer:ClientService,public compteSer:CompteService,public auth:AuthentificationService,public conseillerSer:ConseillerService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.email=this.auth.getInfo().sub
    this.getClient()
    this.getConseillerByEmail();
  }


  getClient(){
    return   this.clientSer.getClientById(this.id).subscribe(res=>{
      this.client=res as Client[];
      console.log(res)
    });
  }

  onSubmit() {
    this.compte.client=this.client;
    console.log(this.compte.client);
    console.log(this.compte);
    this.compteSer.savecomptecourant(this.compte).subscribe(res => {
      console.log(res)
      this.router.navigate(['/clients']);    });

  }

  getConseillerByEmail(){
    this.conseillerSer.getConseilleByemail(this.email).subscribe(res3=>{
      this.conseiller=res3 as Conseiller
      this.id2=this.conseiller.id+'/'+this.id
      this.conseillerSer.affectation(this.id2,null).subscribe(re=>{
        console.log(re)
      })

    })
  }






}
