import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client";
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client={
    nom: "",
    prenom: "",
    adresse: "",
    comptes:null,
    cartes:null,
    codePostal: 0,
    ville: "",
    telephone: ""

  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) {

  }
  ngOnInit(): void {


  }


  onSubmit() {
    this.clientService.save(this.client).subscribe(

      res => this.gotoClientList(res) );

  }


  gotoClientList(client:Client) {

    // this.router.navigate(['compte/add'],{ queryParams: { client: client.id }});

    this.router.navigate(['/compte/add/',client.id ]);

  }




}
