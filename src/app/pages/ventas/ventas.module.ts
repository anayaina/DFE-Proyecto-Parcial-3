import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaComponent } from './venta/ventas.component';



@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VentaComponent
  ]
})
export class VentaModule { }
