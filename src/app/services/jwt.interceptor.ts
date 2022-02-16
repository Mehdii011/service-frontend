import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthentificationService} from "./authentification.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(public token:AuthentificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        Authorization:`Bearer ${this.token.getToken()}`
      }
    });
    return next.handle(request);

  }
}
