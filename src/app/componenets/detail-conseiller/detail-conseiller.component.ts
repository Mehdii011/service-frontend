import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Conseiller } from 'src/app/model/Conseiller';
import {ConseillerService} from "../../services/conseiller.service";

@Component({
  selector: 'app-detail-conseiller',
  templateUrl: './detail-conseiller.component.html',
  styleUrls: ['./detail-conseiller.component.css']
})
export class DetailConseillerComponent implements OnInit {
  public idC: any;
  public cons:any;


  constructor(private route:ActivatedRoute,public conseillerSer:ConseillerService) { }

  ngOnInit(): void {
    this.idC= this.route.snapshot.params['id'];
    
    this.getConseiller();

  }

  getConseiller(){
    this.conseillerSer.getConseiller(this.idC).subscribe(res=>{
        console.log(res)
        this.cons=res;
        console.log(this.cons)

    })
  }

  



}
