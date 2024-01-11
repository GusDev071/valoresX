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

const routes: Routes = [ {path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: 'inicio', component: InicioComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'iniciosesion', component: InicioseComponent},
{path: 'libros', component: LibrosComponent},
{path: 'ayuda', component: AyudaComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'actividades', component: ActividadesComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
