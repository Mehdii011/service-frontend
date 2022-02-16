import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Compte} from "../model/Compte";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(public http:HttpClient) { }

  getCompteById(id:any){
    return this.http.get('http://localhost:8088/compteClient/'+id);
  }
  getCompteByNumCompte(id:any){
    return this.http.get('http://localhost:8088/comptes/'+id);

  }
  getAll(){
    return this.http.get('http://localhost:8088/listcomptes');
  }
  save(data:any):Observable<any>{
    return this.http.post('http://localhost:8088/compteCourant',data);
  }
  delete(id:any):Observable<any>{
    return this.http.delete('http://localhost:8088/deleteCompte/'+id);
  }

  public savecomptecourant(compte: any) {
    return this.http.post("http://localhost:8088/compteCourant",compte);
  }
  public savecompteepargne(compte: Compte,id:number) {
    return this.http.post("http://localhost:8088/compteEpargne?id="+id, compte);
  }
  public updatecomptecourant(compte:any){
    return this.http.patch('http://localhost:8088/editcomptecourant',compte)
  }
  public updatecompteEpargne(compte:any){
    return this.http.put('http://localhost:8088/editcompteEpargne',compte)
  }

}
