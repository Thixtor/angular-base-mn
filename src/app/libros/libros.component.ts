import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent {

  libros = ['Crimen y Castigo', 'Algoritmos Basico', 'Algebra Basico'];

  eliminarLibro(libro){
    this.libros = this.libros.filter(p=>p !== libro);
  }

  guardarLibro(f){
    if(f.valid){
      this.libros.push(f.value.nombreLibro);
    }

  }
}
