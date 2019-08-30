import { Component, OnInit } from '@angular/core';
import { TelementoService } from '../../services/TelementoService';

@Component({
  selector: 'app-telemento',
  templateUrl: './telemento.component.html'
})

export class TelementoComponent implements OnInit {
  constructor(public telementoService: TelementoService) {
  }

  ngOnInit() {
    this.telementoService.getTelementos();
  }
}

