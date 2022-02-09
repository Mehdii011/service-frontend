import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(public http:HttpClient) { }

  saveOperation(data:any){
    return this.http.post("http://localhost:8088/saveRetrait",data)
  }
  saveVersement(data:any){
    return this.http.post("http://localhost:8088/saveVersement",data)
  }
  saveVirement(data:any){
    return this.http.post("http://localhost:8088/saveVirement",data)
  }
}
