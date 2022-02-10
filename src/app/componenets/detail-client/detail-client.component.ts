import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {Client} from "../../model/client";

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  id:any;
  @Input() currentClient: Client = {
    nom: '',
    prenom: '',
    adresse: '',
    ville:'',
    telephone:'',
    codePostal:0,
  };

  message = '';

  constructor(private route:ActivatedRoute,private clientSer:ClientService,
              private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getclientId(this.id);

  }

  getclientId(id: number){
    id= this.id
    this.clientSer.getClientById(id).subscribe(res=>{

      console.log(this.currentClient)

      this.currentClient=res;
    })

  }
}
