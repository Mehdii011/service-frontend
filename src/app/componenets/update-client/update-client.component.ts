import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {AuthentificationService} from "../../services/authentification.service";
import {Conseiller} from "../../model/Conseiller";
import {ConseillerService} from "../../services/conseiller.service";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  public id: any;
  public client:Client={
    id:0,
    nom:'',
    prenom:'',
    adresse:'',
    codePostal: 0,
    ville:''

  }
  public client2:Client={
    id:0,
    nom:"",
    prenom:"",
    adresse:"",
    codePostal:0,
    ville:"",
    telephone:""

  }
  conseiller:Conseiller={

  }
  email:any
  id2:any
  constructor(private route: ActivatedRoute, private router: Router,private clientService: ClientService,public auth:AuthentificationService,public conseillerSer:ConseillerService) {

  }
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.email=this.auth.getInfo().sub
    console.log(this.email)
    this.clientService.getClientById(this.id).subscribe(res=>{

      this.client2=res as Client;

      this.client.id=this.client2.id;
      this.client.nom=this.client2.nom;
      this.client.prenom=this.client2.prenom;
      this.client.adresse=this.client2.adresse;
      this.client.codePostal=this.client2.codePostal;
      this.client.ville=this.client2.ville;
      this.client.telephone=this.client2.telephone;
    })


  }



  onSubmit(){

    console.log(this.client);
    this.clientService.update(this.client).subscribe(res=>{
      this.conseillerSer.getConseilleByemail(this.email).subscribe(res3=>{
        this.conseiller=res3 as Conseiller
        this.id2=this.conseiller.id+'/'+this.id
        console.log(this.id2)
        this.conseillerSer.affectation(this.id2,null).subscribe(re=>{
          console.log(re)
        })

      })
      this.router.navigateByUrl('/clients')

    })

  }

}
