import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from "../services/authentification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private takenSer:AuthentificationService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    if(!this.takenSer.isAuthenticated()){

      this.takenSer.logOut();
      this.router.navigateByUrl("/login")

      return false;

    }
    return true;
  }
}
