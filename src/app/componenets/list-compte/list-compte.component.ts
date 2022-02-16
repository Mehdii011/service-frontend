import { Component, OnInit } from '@angular/core';
import {Compte} from "../../model/Compte";
import {CompteService} from "../../services/compte.service";
import {Client} from "../../model/client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {

  compte:Compte[]=[];
  private client:Client={

  };

  constructor(public compteServ:CompteService,private router:Router) { }

  ngOnInit(): void {
    this.getCompte();

  }

  getCompte(){
    this.compteServ.getAll().subscribe(res=>{

      this.compte=res as Compte[]

      console.log(this.compte) ;

    })
  }

  deleteCompte(id:any) {
    this.compteServ.delete(id).subscribe(res2=>{
      console.log(res2)
      this.router.navigate(['/compte' ]);

    })
  }
}
