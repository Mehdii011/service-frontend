import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conseiller } from 'src/app/model/Conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-update-conseiller',
  templateUrl: './update-conseiller.component.html',
  styleUrls: ['./update-conseiller.component.css']
})
export class UpdateConseillerComponent implements OnInit {
  public id: any;
  public conseiller:Conseiller={

         nom:'',
         prenom:'',
         email:'',
         password:'',
         telephone:0

  }


  constructor(private route:ActivatedRoute,public conseillerSer:ConseillerService,public router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];

    this.conseillerSer.getConseiller(this.id).subscribe(res=>{
      this.conseiller=res as Conseiller
      console.log(this.conseiller)

  })

  }

  onSubmit(){
    this.conseiller.id= this.id;
    this.conseillerSer.update(this.conseiller).subscribe(res=>{
      console.log(res)

      this.router.navigateByUrl('/')

    })

  }

}
