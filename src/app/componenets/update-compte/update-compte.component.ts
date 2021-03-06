import { Component, OnInit } from '@angular/core';
import {Compte} from "../../model/Compte";
import {ActivatedRoute, Router} from "@angular/router";
import {CompteService} from "../../services/compte.service";

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {

  public id: any;
  public compte:Compte={

    numeroCompte:0,
    solde:0,
    dateCreation:" ",
    decouvert: 0

  }
  constructor(private route: ActivatedRoute, private router: Router,private compteService: CompteService) {

  }
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];

    this.compteService.getCompteByNumCompte(this.id).subscribe(res=>{
      this.compte=res as Compte
      console.log(this.compte)

    })

  }

  onSubmit(){
    this.compte.id= this.id;
    // @ts-ignore
    this.compte.operations=[]
    this.compteService.updatecomptecourant(this.compte).subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl('/clients')

    })

  }


}
