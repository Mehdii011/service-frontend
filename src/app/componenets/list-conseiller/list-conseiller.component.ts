import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conseiller } from 'src/app/model/Conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-list-conseiller',
  templateUrl: './list-conseiller.component.html',
  styleUrls: ['./list-conseiller.component.css']
})
export class ListConseillerComponent implements OnInit {

  conseiller:Conseiller[]=[];

  constructor(private router:Router,public conseillerSer:ConseillerService) { }

  ngOnInit(): void {
    this.listConseiller1();
  }
  
  listConseiller1(){
    this.conseillerSer.getAll().subscribe(res=>{
      return  this.conseiller=res as Conseiller[];
    })
  }

  delete(id:any){
     this.conseillerSer.Detele(id).subscribe(res=>{
      this.router.navigateByUrl('/')  
       })
  }
  

}
