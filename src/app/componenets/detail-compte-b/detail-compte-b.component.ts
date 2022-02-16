import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompteService} from "../../services/compte.service";
import {Compte} from "../../model/Compte";

@Component({
  selector: 'app-detail-compte-b',
  templateUrl: './detail-compte-b.component.html',
  styleUrls: ['./detail-compte-b.component.css']
})
export class DetailCompteBComponent implements OnInit {

  num:any;
  compte:Compte={}

  constructor(private route:ActivatedRoute,public compteSer:CompteService) { }

  ngOnInit(): void {
    this.num= this.route.snapshot.params['num'];
    console.log(this.num)
    this.getCompteById();
  }

  getCompteById(){
    this.compteSer.getCompteByNumCompte(this.num).subscribe(res=>{

      this.compte=res as Compte;

    })


  }



}
