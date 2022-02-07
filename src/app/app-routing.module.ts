import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './componenets/add-client/add-client.component';
import { AddCompteComponent } from './componenets/add-compte/add-compte.component';
import { AddConseillerComponent } from './componenets/add-conseiller/add-conseiller.component';
import { DetailClientComponent } from './componenets/detail-client/detail-client.component';
import { DetailCompteComponent } from './componenets/detail-compte/detail-compte.component';
import { DetailConseillerComponent } from './componenets/detail-conseiller/detail-conseiller.component';
import { ListClientComponent } from './componenets/list-client/list-client.component';
import { ListCompteComponent } from './componenets/list-compte/list-compte.component';
import { ListConseillerComponent } from './componenets/list-conseiller/list-conseiller.component';
import { LoginComponent } from './componenets/login/login.component';
import { PageNotFoundComponent } from './componenets/page-not-found/page-not-found.component';
import { RegisterComponent } from './componenets/register/register.component';
import { RetraitComponent } from './componenets/retrait/retrait.component';
import { UpdateClientComponent } from './componenets/update-client/update-client.component';
import { UpdateCompteComponent } from './componenets/update-compte/update-compte.component';
import { UpdateConseillerComponent } from './componenets/update-conseiller/update-conseiller.component';
import { VersementComponent } from './componenets/versement/versement.component';
import { VirementComponent } from './componenets/virement/virement.component';
import {OperationComponent} from "./componenets/operation/operation.component";

const routes: Routes = [
  {path:"",redirectTo:'/clients',pathMatch:'full'},
  {path:"clients",children:[
    {path:"",component:ListClientComponent},
    {path:"edit/:id",component:UpdateClientComponent},
    {path:"add",component:AddClientComponent},
    {path:"detail/:id",component:DetailClientComponent},
  ]},
  {path:"conseiller",children:[
    {path:"",component:ListConseillerComponent},
    {path:"edit/:id",component:UpdateConseillerComponent},
    {path:"add",component:AddConseillerComponent},
    {path:"detail/:id",component:DetailConseillerComponent},
  ]},
  {path:"compte",children:[
    {path:"",component:ListCompteComponent},
    {path:"edit/:id",component:UpdateCompteComponent},
    {path:"add",component:AddCompteComponent},
    {path:"detail/:id",component:DetailCompteComponent},
  ]},
  {path:"operation",children:[
      {path:"",component:OperationComponent},
      {path:"virement",component:VirementComponent},
      {path:"versement",component:VersementComponent},
     {path:"retrait",component:RetraitComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:PageNotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
