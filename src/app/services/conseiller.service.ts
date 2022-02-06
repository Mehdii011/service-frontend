import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  constructor(public http:HttpClient) { }

  getAll(){
    this.http.get('http://localhost:8088/Employe/conseillers');
  }
}
