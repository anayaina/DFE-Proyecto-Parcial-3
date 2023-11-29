import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosService } from 'src/app/pages/services/juegos.service';

import { ExploradorJuegosComponent } from './explorador-juegos/explorador-juegos.component';
import { FiltroJuegosComponent } from './filtro-juegos/filtro-juegos.component';
import { ListadoJuegosComponent } from './listado-juegos/listado-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';

@NgModule({
  declarations: [
    ExploradorJuegosComponent,
    FiltroJuegosComponent,
    ListadoJuegosComponent,
    DetalleJuegosComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    JuegosService,
  ],
  exports: [
    ExploradorJuegosComponent
  ]
})
export class JuegosModule { }
