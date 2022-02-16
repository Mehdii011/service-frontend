import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  constructor(public http:HttpClient) { }

  getAll(){
    return  this.http.get('http://localhost:8088/Employe/conseillers');
  }

  createConseiller(data:any){
   return this.http.post('http://localhost:8088/Employe/createConseiller',data)
  }
  getConseiller(id:any){
    return this.http.get('http://localhost:8088/Employe/conseillerById/'+id)
  }
  Detele(id:any){
    return this.http.get('http://localhost:8088/delete/'+id)
  }
  update(data:any){
    return this.http.put('http://localhost:8088/updateConseiller',data)
  }

  getConseilleByemail(email: any) {
    return this.http.get('http://localhost:8088/Employe/conseiller/'+email)
  }

  affectation(id:any,data:any){
    return this.http.put('http://localhost:8088/affectation/'+id,data);
  }
}
