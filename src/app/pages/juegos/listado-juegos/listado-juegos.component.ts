import { Component, Input } from '@angular/core';

import { Videogame } from 'src/app/models/juegos';

@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html'
})

export class ListadoJuegosComponent {

  @Input() listadoJuegos: Videogame[] = [];

  @Input() cargandoJuegos = false;

  juegosSeleccionada: Videogame | null = null;

  rutaImagen = '../../../../assets/img/juegos/';

}