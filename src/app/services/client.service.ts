import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  host2:string="http://localhost:8088"


  constructor(public http:HttpClient) { }

  getAll(){
  return  this.http.get(this.host2+"/clients");
  }
  getByConseiller(id:any){
    return  this.http.get(this.host2+"/clientByConseillerId/"+id);
  }

  getClientById(id:any){
    return this.http.get('http://localhost:8088/clients/'+id);
  }
  getOne(id:any){
    return  this.http.get(this.host2+"/clients/"+id);
  }

  save(data: any) {
    return this.http.post("http://localhost:8088/client", data);

  }
  update(client:any){
    return this.http.put('http://localhost:8088/editclient',client)
  }
  Detele(id:any){
    return this.http.get('http://localhost:8088/destroyclient/'+id)
  }
}
