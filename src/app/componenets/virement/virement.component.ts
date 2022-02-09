import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from 'src/app/model/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {

  operation:Operation={
    montant:0,
    numeroCompte:0,
    numeroCompte2:0

  }
  constructor(public oprationSer:OperationService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
     this.oprationSer.saveVirement(this.operation).subscribe(res=>{
       return this.route.navigate(['/']);

     },err=>{
       console.log(err)
     })
  }

}
