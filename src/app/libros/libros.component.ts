import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent {
  libros = ['Crimen y Castigo', 'Algoritmos Basico', 'Algebra Basico'];
}
