import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/model/Coneiller';
import { Register } from 'src/app/model/Register';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ConseillerService } from 'src/app/services/conseiller.service';

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

  constructor( public conseillerSer:ConseillerService,public authSer:AuthentificationService) { }

  ngOnInit(): void {

  }

  onSubmit(){

    this.register.username=this.conseiller.email;
    this.register.password=this.conseiller.password;

   this.authSer.register(this.register);


    this.conseillerSer.createConseiller(this.conseiller).subscribe(res=>{
      console.log(res);
    })

    
  }
  

}
