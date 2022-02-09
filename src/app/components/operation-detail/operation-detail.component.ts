import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compte } from 'src/app/model/Compte';
import { Operation } from 'src/app/model/operation';
import { CompteService } from 'src/app/services/compte.service';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css']
})
export class OperationDetailComponent implements OnInit {
  id: any;
  operation:Operation[]=[];

  constructor(private route:ActivatedRoute,public operationSer:OperationService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    console.log(this.id)
    this.getCompteId();
    
  }

  getCompteId(){
    this.operationSer.getCompteByNumCompte(this.id).subscribe(res=>{
      console.log(res)
      this.operation=res as Operation[];

    //  this.compte.forEach(element => {
    //   console.log(element.operations?.values)   ;
    //  });

    })
  }


}
