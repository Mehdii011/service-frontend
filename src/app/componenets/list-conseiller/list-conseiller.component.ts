import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/model/Coneiller';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-list-conseiller',
  templateUrl: './list-conseiller.component.html',
  styleUrls: ['./list-conseiller.component.css']
})
export class ListConseillerComponent implements OnInit {

  conseiller:Conseiller[]=[];

  constructor(public conseillerSer:ConseillerService) { }

  ngOnInit(): void {
    this.listConseiller1();
  }
  
  listConseiller1(){
    this.conseillerSer.getAll().subscribe(res=>{
      return  this.conseiller=res as Conseiller[];
    })
  }
  

}
