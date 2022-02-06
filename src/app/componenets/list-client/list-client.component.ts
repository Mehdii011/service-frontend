import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  constructor(public clientSer:ClientService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    this.clientSer.getAll().subscribe(res=>{
          console.log(res) ;

    })
  }

}
