import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ElementoService } from '../../../services/ElementoService';
import { ElementoVM } from '../../../models/ElementoVM';

@Component({
  selector: 'app-editarelemento',
  templateUrl: './editarelemento.component.html',
  styleUrls: ['./editarelemento.component.css']
})

export class EditarElementoComponent implements OnInit {
  formElemento: ElementoVM;
  id: string;

  constructor(public elementoService: ElementoService, private route: ActivatedRoute) {
    this.formElemento = new ElementoVM();
  }

  onSubmit(form: NgForm) {
    this.elementoService.putElemento(form.value, this.id).subscribe(
      res => {
        window.location.href = "/elementos";
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

    this.elementoService.telementoService.getTelementos();
    this.elementoService.getElemento(this.id).subscribe((res: any) => {
      this.formElemento = res as ElementoVM;

      let date = this.formElemento.fechaCompra;
      this.formElemento.fechaCompra = this.elementoService.convertDate(date);
    });
  }
}
