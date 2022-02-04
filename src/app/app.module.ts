import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenets/login/login.component';
import { RegisterComponent } from './componenets/register/register.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { ListClientComponent } from './componenets/list-client/list-client.component';
import { ListConseillerComponent } from './componenets/list-conseiller/list-conseiller.component';
import { AddClientComponent } from './componenets/add-client/add-client.component';
import { AddConseillerComponent } from './componenets/add-conseiller/add-conseiller.component';
import { UpdateClientComponent } from './componenets/update-client/update-client.component';
import { UpdateConseillerComponent } from './componenets/update-conseiller/update-conseiller.component';
import { ListCompteComponent } from './componenets/list-compte/list-compte.component';
import { OperationComponent } from './componenets/operation/operation.component';
import { VirementComponent } from './componenets/virement/virement.component';
import { VersementComponent } from './componenets/versement/versement.component';
import { RetraitComponent } from './componenets/retrait/retrait.component';
import { PageNotFoundComponent } from './componenets/page-not-found/page-not-found.component';
import { DetailClientComponent } from './componenets/detail-client/detail-client.component';
import { DetailConseillerComponent } from './componenets/detail-conseiller/detail-conseiller.component';
import { DetailCompteComponent } from './componenets/detail-compte/detail-compte.component';
import { UpdateCompteComponent } from './componenets/update-compte/update-compte.component';
import { AddCompteComponent } from './componenets/add-compte/add-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ListClientComponent,
    ListConseillerComponent,
    AddClientComponent,
    AddConseillerComponent,
    UpdateClientComponent,
    UpdateConseillerComponent,
    ListCompteComponent,
    OperationComponent,
    VirementComponent,
    VersementComponent,
    RetraitComponent,
    PageNotFoundComponent,
    DetailClientComponent,
    DetailConseillerComponent,
    DetailCompteComponent,
    UpdateCompteComponent,
    AddCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
