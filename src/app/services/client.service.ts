import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  host2:string="http://localhost:8088"


  constructor(public http:HttpClient) { }

  getAll(){
  return  this.http.get(this.host2+"/clients");
  }
}
