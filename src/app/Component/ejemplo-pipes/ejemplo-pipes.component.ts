import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { CapitalizePipe } from '../../Pipes/capitalize.pipe';


@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  empleados = [
    { nombre: 'Ricardo Suarez', sueldo: 12000, fechaNacimiento: new Date('2000-08-01') },
    { nombre: 'Laura Mejía', sueldo: 7000, fechaNacimiento: new Date('1988-09-05') },
    { nombre: 'Gilberto Anaya', sueldo: 8000, fechaNacimiento: new Date('1995-07-12') }
  ];
}
