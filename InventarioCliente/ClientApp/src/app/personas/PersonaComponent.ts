import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/PersonaService';

@Component({
    selector: 'app-persona',
    templateUrl: './persona.component.html'
})

export class PersonaComponent implements OnInit {
  constructor(public personaService: PersonaService) {
  }

  onDelete(id: number) {
    if (confirm("¿Está seguro de eliminar el registro?")) {
      this.personaService.deletePersona(id).subscribe(
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
    this.personaService.getPersonas();
  }
}

