import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from 'src/app/model/operation';
import { OperationService } from 'src/app/services/operation.service';
import Swal from 'sweetalert2'

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
    Swal.fire({
      title: 'Voulez-vous valider le virement?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Valider',
      denyButtonText: `Refuser`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.oprationSer.saveVirement(this.operation).subscribe(res=>{
          console.log(res)

          this.route.navigate(['/operation']);

        },err=>{
          console.log(err)
        })
        Swal.fire('Enregistré!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })

  }

}
