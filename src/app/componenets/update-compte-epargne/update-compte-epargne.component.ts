import { Component, OnInit } from '@angular/core';
import {Compte} from "../../model/Compte";
import {ActivatedRoute, Router} from "@angular/router";
import {CompteService} from "../../services/compte.service";

@Component({
  selector: 'app-update-compte-epargne',
  templateUrl: './update-compte-epargne.component.html',
  styleUrls: ['./update-compte-epargne.component.css']
})
export class UpdateCompteEpargneComponent implements OnInit {

  public id: any;
  public compte:Compte={

    numeroCompte: 0,
    solde:0,
    dateCreation:" ",
    taux: 0

  }
  constructor(private route: ActivatedRoute, private router: Router,private compteService: CompteService) {

  }
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];

    this.compteService.getCompteByNumCompte(this.id).subscribe(res=>{
      this.compte=res as Compte

    })

  }

  onSubmit(){
    this.compte.id= this.id;
    console.log(this.compte)
    this.compteService.updatecompteEpargne(this.compte).subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl('/clients')

    })

  }
}
