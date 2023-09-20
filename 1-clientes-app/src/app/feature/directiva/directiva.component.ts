import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP']
  habilitar: boolean = true;
  titleBotton:string = this.habilitar== true ? 'Ocultar' : 'Mostrar'

  setHabilitar() {
    this.habilitar = (this.habilitar==true) ? false : true
  }
}
