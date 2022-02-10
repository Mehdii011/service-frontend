import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  test:boolean=false;

  constructor(public auth:AuthentificationService) { }

  ngOnInit(): void {
  }

  isAdmin(){
    if(this.auth.isAuthenticated()){
       this.test=true;
    }
    if(this.auth.noAuthenticated()){
      this.test=false;
    }
  }


  logout() {
    this.auth.logOut();
  }
}
