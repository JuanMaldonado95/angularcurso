import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'CapitanAmerica'];
  heroeBorrado: string = '';

  borrarHeroe() {

  this.heroeBorrado =  this.heroes.shift() || ''; // shift borra el primer elemento de la lista y lo retorna en este caso en la variable heroeBorrado
    // console.log(heroeBorrado);
  }
}
