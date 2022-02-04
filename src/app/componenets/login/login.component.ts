import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authentificaionService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }


  onLogin(data:any){
    this.authentificaionService.login(data).subscribe(res=>{

      let jwt=res.headers.get('Authorization');
      this.authentificaionService.saveToken(jwt);
      this.router.navigateByUrl('/register')

    },err=>{

      
    })
  }


}
