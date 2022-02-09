import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(public http:HttpClient) { }

  getCompteById(id:any){
    return this.http.get('http://localhost:8088/compteClient/'+id);
  }
}
