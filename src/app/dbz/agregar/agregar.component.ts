import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})

export class AgregarComponent {

 //  @Input() personajes: Personaje[] =[];  se reciben los personajes como un input desde el componente padre, este no se usara se va a usar el output

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor ( private dbzService: DbzService ){}

 // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();   // Se emitira un nuevo personaje, el <Personaje> del eventEmitter se usa para establecer el tipo de info que maneja

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) { return; }

  //   this.onNuevoPersonaje.emit(this.nuevo); // cuando se da el agregar se emite el evento de añadir un nuevo personaje

  //   this.personajes.push(this.nuevo);

  this.dbzService.agregarPersonaje( this.nuevo );
   
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
