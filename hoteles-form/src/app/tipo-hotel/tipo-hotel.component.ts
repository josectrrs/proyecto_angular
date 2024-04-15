import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TipoHotel } from '../models/tipo-hotel.model';



@Component({
  selector: 'app-tipo-hotel',
  standalone: true,
  imports: [],
  templateUrl: './tipo-hotel.component.html',
  styleUrl: './tipo-hotel.component.css'
})
export class TipoHotelComponent implements OnInit {
  @Input() tipo!: TipoHotel;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {}

  ngOnInit() {
    
  }
}
