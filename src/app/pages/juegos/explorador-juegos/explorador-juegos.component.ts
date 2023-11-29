import { Component, OnInit } from '@angular/core';

import { Videogame } from 'src/app/models/juegos';

import { JuegosService } from 'src/app/pages/services/juegos.service';


@Component({
  selector: 'app-explorador-juegos',
  templateUrl: './explorador-juegos.component.html'
})

export class ExploradorJuegosComponent implements OnInit {

  cargandoJuegos = false;

  listadoJuegos: Videogame[] = [];


  constructor(private data: JuegosService) {

  }

  ngOnInit() {
    this.getJuegosListas();
  }


  get mensaje(): string {
    if (this.cargandoJuegos) {
      return 'Cargando...';
    } else {

      return this.listadoJuegos.length > 0 ?
        `${this.listadoJuegos.length} registros encontrados.` :
        'No se han encontrado registros...';

    }

  }

  private getJuegosListas() {
    this.cargandoJuegos = true;

    this.data.getJuegosListas()
      .subscribe(x => {
        this.cargandoJuegos = false;
        this.listadoJuegos = x;
      });
  }
}