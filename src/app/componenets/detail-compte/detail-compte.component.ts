import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Compte } from 'src/app/model/Compte';
import { ClientService } from 'src/app/services/client.service';
import { CompteService } from 'src/app/services/compte.service';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.css']
})
export class DetailCompteComponent implements OnInit {
  id: any;
  compte:Compte[]=[];
  

  constructor(private route:ActivatedRoute,public compteSer:CompteService) { }

  ngOnInit(): void {
   this.id= this.route.snapshot.params['id'];
   console.log(this.id)
   this.getclientById();
  }

  getclientById(){
    this.compteSer.getCompteById(this.id).subscribe(res=>{

      this.compte=res as Compte[];

       console.log(res);
    })

 
  }
  

}
