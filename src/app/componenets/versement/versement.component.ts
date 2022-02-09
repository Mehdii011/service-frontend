import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from 'src/app/model/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-versement',
  templateUrl: './versement.component.html',
  styleUrls: ['./versement.component.css']
})
export class VersementComponent implements OnInit {

  operation:Operation={
    montant:0,
    numeroCompte:0
  }
  constructor(public oprationSer:OperationService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
     this.oprationSer.saveVersement(this.operation).subscribe(res=>{
       console.log(res);
       return this.route.navigate(['/']);

     })
  }

}
