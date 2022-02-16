import { Component, OnInit } from '@angular/core';
import {Operation} from "../../model/operation";
import {OperationService} from "../../services/operation.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: 'Voulez-vous valider le retrait?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Valider',
      denyButtonText: `Refuser`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.oprationSer.saveOperation(this.operation).subscribe(res=>{
          console.log(res);
          return this.route.navigate(['/operation']);

        })
        Swal.fire('Enregistré!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })



  }
}
