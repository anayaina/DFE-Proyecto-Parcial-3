import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtro-juegos',
  templateUrl: './filtro-juegos.component.html'
})
export class FiltroJuegosComponent {

  @Input() mensaje: string = '';

}