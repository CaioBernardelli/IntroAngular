import { Component } from '@angular/core';
import { Usuario } from '../shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Olá';
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario('Caio Bernardelli Quirino', '123.456.789-00', 30);
     // Saída: Caio
  }
}
