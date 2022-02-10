import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'banque-front';
  test:boolean=true;
  public url: any;

  constructor(public router:Router){}

  ngOnInit(): void {


  }

  }

