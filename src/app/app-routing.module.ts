import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioseComponent } from './components/iniciose/iniciose.component';
import { LibrosComponent } from './components/libros/libros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IniAComponent } from './components/ini-a/ini-a.component';
import { LibrosAComponent } from './components/libros-a/libros-a.component';
import { ActAComponent } from './components/act-a/act-a.component';
import { NavbarAComponent } from './components/navbar-a/navbar-a.component';
import { DashboardAComponent } from './components/dashboard-a/dashboard-a.component';
import { AyudaAComponent } from './components/ayuda-a/ayuda-a.component';
import { ContactoAComponent } from './components/contacto-a/contacto-a.component';
import { AddlibroComponent } from './components/addlibro/addlibro.component';
import { AddActComponent } from './components/add-act/add-act.component';


const routes: Routes = [ {path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: 'inicio', component: InicioComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'iniciosesion', component: InicioseComponent},
{path: 'libros', component: LibrosComponent},
{path: 'ayuda', component: AyudaComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'actividades', component: ActividadesComponent},
{path: 'ini-a', component: IniAComponent},
{path: 'libros-a', component: LibrosAComponent},
{path: 'act-a', component: ActAComponent},
{path: 'navbar-a', component: NavbarAComponent},
{path: 'dashboard-a', component: DashboardAComponent},
{path: 'ayuda-a', component: AyudaAComponent},
{path: 'contacto-a', component: ContactoAComponent}
,{path: 'addlibro', component: AddlibroComponent},
{path: 'add-act', component: AddActComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
