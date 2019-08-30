import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaElementoVM } from '../../../models/PersonaElementoVM';
import { PersonaElementoService } from '../../../services/PersonaElementoService';

@Component({
  selector: 'app-ingresarpersonaelemento',
  templateUrl: './ingresarpersonaelemento.component.html',
  styleUrls: ['./ingresarpersonaelemento.component.css']
})

export class IngresarPersonaElementoComponent implements OnInit {
  formPersonaElemento: PersonaElementoVM;

  constructor(public personaElementoService: PersonaElementoService) {
    this.formPersonaElemento = new PersonaElementoVM();
  }

  updateElementoData(id: number) {
    this.personaElementoService.updateElementoData(id);
  }

  onSubmit(form: NgForm) {
    this.personaElementoService.postPersonaElemento(form.value).subscribe(
      res => {
        window.location.href = "/personaelementos";
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.personaElementoService.personaService.getPersonas();
    this.personaElementoService.elementoService.getElementos();
  }
}
