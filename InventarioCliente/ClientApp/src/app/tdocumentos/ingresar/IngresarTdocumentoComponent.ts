import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TdocumentoService } from '../../../services/TdocumentoService';
import { TdocumentoVM } from '../../../models/TdocumentoVM';

@Component({
  selector: 'app-ingresartdocumento',
  templateUrl: './ingresartdocumento.component.html',
  styleUrls: ['./ingresartdocumento.component.css']
})

export class IngresarTdocumentoComponent implements OnInit {
  formTdocumento: TdocumentoVM;

  constructor(public tdocumentoService: TdocumentoService) {
    this.formTdocumento = new TdocumentoVM();
  }

  onSubmit(form: NgForm) {
    this.tdocumentoService.postTdocumento(form.value).subscribe(
      res => {
        window.location.href = "/tdocumentos";
      },
      err => {
        //this.toastr.error(err.error, "Cliente Inventario");
      }
    );
  }

  ngOnInit() {
    this.tdocumentoService.getTdocumentos();
  }
}
