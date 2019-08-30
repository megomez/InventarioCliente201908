import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ElementoVM } from '../../../models/ElementoVM';
import { ElementoService } from '../../../services/ElementoService';

@Component({
  selector: 'app-ingresarelemento',
  templateUrl: './ingresarelemento.component.html',
  styleUrls: ['./ingresarelemento.component.css']
})

export class IngresarElementoComponent implements OnInit {
  formElemento: ElementoVM;

  constructor(public elementoService: ElementoService) {
    this.formElemento = new ElementoVM();
  }

  onSubmit(form: NgForm) {
    this.elementoService.postElemento(form.value).subscribe(
      res => {
        window.location.href = "/elementos";
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.elementoService.telementoService.getTelementos();
  }
}
