import { Component, OnInit } from '@angular/core';
import { PersonaElementoService } from '../../services/PersonaElementoService';

@Component({
  selector: 'app-personaelemento',
  templateUrl: './personaelemento.component.html'
})

export class PersonaElementoComponent implements OnInit {
  constructor(public personaElementoService: PersonaElementoService) {
  }

  onDelete(id: number) {
    if (confirm("¿Está seguro de eliminar el registro?")) {
      this.personaElementoService.deletePersonaElemento(id).subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );

    }
  }

  ngOnInit() {
    this.personaElementoService.getPersonaElementos();
  }
}

