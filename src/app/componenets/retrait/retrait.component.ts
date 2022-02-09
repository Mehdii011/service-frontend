import { Component, OnInit } from '@angular/core';
import {Operation} from "../../model/operation";
import {OperationService} from "../../services/operation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

  operation:Operation={
    montant:0,
    numeroCompte:0
  }
  constructor(public oprationSer:OperationService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
     this.oprationSer.saveOperation(this.operation).subscribe(res=>{
       console.log(res);
       return this.route.navigate(['/']);

     })
  }
}
