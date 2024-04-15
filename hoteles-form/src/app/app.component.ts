import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TipoHotelComponent } from './tipo-hotel/tipo-hotel.component';
import { ListaHotelesComponent } from './lista-hoteles/lista-hoteles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TipoHotelComponent,ListaHotelesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hoteles-form';
}
