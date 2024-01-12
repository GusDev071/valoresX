import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioseComponent } from './components/iniciose/iniciose.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { LibrosComponent } from './components/libros/libros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { IniAComponent } from './components/ini-a/ini-a.component';
import { LibrosAComponent } from './components/libros-a/libros-a.component';
import { ActAComponent } from './components/act-a/act-a.component';
import { NavbarAComponent } from './components/navbar-a/navbar-a.component';
import { DashboardAComponent } from './components/dashboard-a/dashboard-a.component';
import { ContactoAComponent } from './components/contacto-a/contacto-a.component';
import { AyudaAComponent } from './components/ayuda-a/ayuda-a.component';
import { AddlibroComponent } from './components/addlibro/addlibro.component';
import { AddActComponent } from './components/add-act/add-act.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioseComponent,
    DashboardComponent,
    InicioComponent,
    AyudaComponent,
    ContactoComponent,
    ActividadesComponent,
    LibrosComponent,
    NavbarComponent,
    IniAComponent,
    LibrosAComponent,
    ActAComponent,
    NavbarAComponent,
    DashboardAComponent,
    ContactoAComponent,
    AyudaAComponent,
    AddlibroComponent,
    AddActComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
