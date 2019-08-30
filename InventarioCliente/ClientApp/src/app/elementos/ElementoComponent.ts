import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/PersonaService';
import { ElementoService } from '../../services/ElementoService';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html'
})

export class ElementoComponent implements OnInit {
  constructor(public elementoService: ElementoService) {
  }

  onDelete(id: number) {
    if (confirm("¿Está seguro de eliminar el registro?")) {
      this.elementoService.deleteElemento(id).subscribe(
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
    this.elementoService.getElementos();
  }
}

