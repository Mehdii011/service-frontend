import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client";
import {ActivatedRoute, Router} from "@angular/router";
import {CompteService} from "../../services/compte.service";
import {ClientService} from "../../services/client.service";
import {Compte} from "../../model/Compte";

@Component({
  selector: 'app-add-compte-epargne',
  templateUrl: './add-compte-epargne.component.html',
  styleUrls: ['./add-compte-epargne.component.css']
})
export class AddCompteEpargneComponent implements OnInit {

  client: Client[]=[];
  compte: Compte={
    numeroCompte:0,
    solde:0,
    dateCreation:"",
    taux:0

  }
  id:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public compteService: CompteService,
    public clientService: ClientService) {

  }


  ngOnInit() {
    this.id=this.route.snapshot.params['client'];
    this.getClient()
    console.log(this.id);
  }

  getClient(){
    return   this.clientService.getClientById(this.id).subscribe(res=>{
      this.client=res as Client[];
      console.log(res)
    });
  }
  onSubmit() {

    console.log(this.compte);
    this.compteService.savecompteepargne(this.compte,this.id).subscribe(result => this.gotoClientList());

  }


  gotoClientList() {

    this.router.navigate(['/clients']);
  }

}
