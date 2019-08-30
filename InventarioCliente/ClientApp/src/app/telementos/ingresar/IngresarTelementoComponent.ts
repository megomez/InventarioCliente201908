import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TelementoVM } from '../../../models/TelementoVM';
import { TelementoService } from '../../../services/TelementoService';

@Component({
  selector: 'app-ingresartelemento',
  templateUrl: './ingresartelemento.component.html',
  styleUrls: ['./ingresartelemento.component.css']
})

export class IngresarTelementoComponent implements OnInit {
  formTelemento: TelementoVM;

  constructor(public telementoService: TelementoService) {
    this.formTelemento = new TelementoVM();
  }

  onSubmit(form: NgForm) {
    this.telementoService.postTelemento(form.value).subscribe(
      res => {
        window.location.href = "/telementos";
      },
      err => {
        console.log(err);
        //this.toastr.error(err.error, "Cliente Inventario");
      }
    );
  }

  ngOnInit() {
    this.telementoService.getTelementos();
  }
}
