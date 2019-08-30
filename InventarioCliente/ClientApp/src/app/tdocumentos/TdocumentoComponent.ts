import { Component, OnInit } from '@angular/core';
import { TdocumentoService } from '../../services/TdocumentoService';

@Component({
  selector: 'app-tdocumento',
  templateUrl: './tdocumento.component.html'
})

export class TdocumentoComponent implements OnInit {
  constructor(public tdocumentoService: TdocumentoService) {
  }

  ngOnInit() {
    this.tdocumentoService.getTdocumentos();
  }
}

