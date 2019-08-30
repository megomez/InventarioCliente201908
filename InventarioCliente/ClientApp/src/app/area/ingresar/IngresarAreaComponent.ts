import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AreaService } from '../../../services/AreaService';
import { AreaVM } from '../../../models/AreaVM';

@Component({
  selector: 'app-ingresararea',
  templateUrl: './ingresararea.component.html',
  styleUrls: ['./ingresararea.component.css']
})

export class IngresarAreaComponent{
  formArea: AreaVM;

  constructor(public service: AreaService) {
    this.formArea = new AreaVM();
  }

  onSubmit(form: NgForm) {
    this.service.postArea(form.value).subscribe(
      res => {
        window.location.href = "/areas";
      },
      err => {
        //this.toastr.error(err.error, "Cliente Inventario");
      }
    );
  }
}
