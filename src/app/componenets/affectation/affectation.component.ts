import { Component, OnInit } from '@angular/core';
import {Conseiller1} from "../../model/conseiller1";
import {ConseillerService} from "../../services/conseiller.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  id:any
  conseiller1: Conseiller1 = {
    idConseiller:0,
    idClient:0
  };

  constructor(public conseillerSer:ConseillerService,private route:Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.id=this.conseiller1.idConseiller+'/'+this.conseiller1.idClient
    Swal.fire({
      title: 'Voulez-vous valider Affectation?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Valider',
      denyButtonText: `Refuser`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.conseillerSer.affectation(this.id,null).subscribe(res=>{
          console.log(res)
          this.route.navigate(['/client']);
        })
        Swal.fire('Client Affecter avec Succees!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
      }
    })



  }
}
