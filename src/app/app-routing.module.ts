import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/dashboard/inicio/inicio.component';
import { ExploradorJuegosComponent } from './pages/juegos/explorador-juegos/explorador-juegos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo/catalogo.component';
import { PaginaNoEncontradaComponent } from './pages/autenticacion/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'dashboard', component: InicioComponent },
  { path: 'inventario', component: ExploradorJuegosComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
