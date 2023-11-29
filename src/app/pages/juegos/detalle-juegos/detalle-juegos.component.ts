import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Videogame } from 'src/app/models/juegos';

@Component({
  selector: 'app-detalle-juegos',
  templateUrl: './detalle-juegos.component.html'
})
export class DetalleJuegosComponent {

  @Input() juegos: Videogame | null = null;

  @Output() close: EventEmitter<void> = new EventEmitter();


  onCloseModal() {
    this.close.emit();
  }

}