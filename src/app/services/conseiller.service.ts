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
}
