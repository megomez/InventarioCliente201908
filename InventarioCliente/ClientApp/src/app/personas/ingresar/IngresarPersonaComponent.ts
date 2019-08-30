import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../../services/PersonaService';
import { PersonaVM } from '../../../models/PersonaVM';

@Component({
  selector: 'app-ingresarpersona',
  templateUrl: './ingresarpersona.component.html',
  styleUrls: ['./ingresarpersona.component.css']
})

export class IngresarPersonaComponent implements OnInit {
  formPersona: PersonaVM;

  constructor(public personaService: PersonaService) {
    this.formPersona = new PersonaVM();
  }

  onSubmit(form: NgForm) {
    this.personaService.postPersona(form.value).subscribe(
      res => {
        window.location.href = "/personas";
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.personaService.areaService.getAreas();
    this.personaService.tdocumentoService.getTdocumentos();
  }
}
