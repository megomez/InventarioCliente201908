import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../../services/PersonaService';
import { PersonaVM } from '../../../models/PersonaVM';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})

export class EditarPersonaComponent implements OnInit {
  formPersona: PersonaVM;
  id: string;

  constructor(public personaService: PersonaService, private route: ActivatedRoute) {
    this.formPersona = new PersonaVM();
  }

  onSubmit(form: NgForm) {
    this.personaService.putPersona(form.value, this.id).subscribe(
      res => {
        window.location.href = "/personas";
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get("id")
    this.route.queryParamMap.subscribe(queryParams => {
      this.id = queryParams.get("id")
    })

    this.personaService.areaService.getAreas();
    this.personaService.tdocumentoService.getTdocumentos();
    this.personaService.getPersona(this.id).subscribe((res: any) => {
      this.formPersona = res as PersonaVM;

      let date = this.formPersona.fechaNacimiento;
      this.formPersona.fechaNacimiento = this.personaService.convertDate(date);
    });
  }
}
