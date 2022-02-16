import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/model/Conseiller';
import { Register } from 'src/app/model/Register';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ConseillerService } from 'src/app/services/conseiller.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-conseiller',
  templateUrl: './add-conseiller.component.html',
  styleUrls: ['./add-conseiller.component.css']
})
export class AddConseillerComponent implements OnInit {

  conseiller:Conseiller={

    nom:"",
    prenom:"",
    adresse:"",
    telephone:"",
    email:"",
    password:""
  }

  register:Register={
    username:"",
    password:""

  }

  constructor( public conseillerSer:ConseillerService,public authSer:AuthentificationService,private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit(){

    this.register.username=this.conseiller.email;
    this.register.password=this.conseiller.password;

   this.authSer.register(this.register).subscribe(res1=>{
     console.log(res1);

   })


    this.conseillerSer.createConseiller(this.conseiller).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(['/conseiller']);


  }


}
