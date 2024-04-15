import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TipoHotelComponent } from '../tipo-hotel/tipo-hotel.component';
import { TipoHotel } from '../models/tipo-hotel.model';


@Component({
  selector: 'app-lista-hoteles',
  standalone: true,
  imports: [CommonModule,TipoHotelComponent],
  templateUrl: './lista-hoteles.component.html',
  styleUrl: './lista-hoteles.component.css'
})
export class ListaHotelesComponent implements OnInit {
  tiposh: TipoHotel[];

  constructor() {
    this.tiposh = [];
  }

  ngOnInit() {
  }

  guardar(nombre:string, descripcion:string, rating:string):boolean {
    /* this.tiposh.push(new TipoHotel(nombre, descripcion)); */
    this.tiposh.push(new TipoHotel(nombre, descripcion, rating));
    return false;
  }



}
