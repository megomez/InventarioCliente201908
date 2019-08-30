import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../services/AreaService';

@Component({
    selector: 'app-area',
    templateUrl: './area.component.html'
})

export class AreaComponent implements OnInit {
  constructor(public areaService: AreaService) {
  }

  ngOnInit() {
    this.areaService.getAreas();
  }
}

