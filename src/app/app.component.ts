import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploPipesComponent } from "./Component/ejemplo-pipes/ejemplo-pipes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EjemploPipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Actividades_De_La_unidad3';
}
