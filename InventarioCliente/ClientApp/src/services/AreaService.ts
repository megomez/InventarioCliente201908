import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AreaVM } from '../models/AreaVM';

@Injectable({
  providedIn: 'root'
})

export class AreaService {
  formData: AreaVM;
  areaList: AreaVM[];

  readonly rootURL = "https://inventarioapi201908.azurewebsites.net/api/";

  constructor(protected httpClient: HttpClient) {
  }

  postArea(formData: AreaVM) {
    let formToPost = new FormData();
    let requestToPost = { "nombre": formData.Nombre };
    return this.httpClient.post(this.rootURL + "areas", requestToPost);
  }

  getAreas() {
    this.httpClient.get(this.rootURL + "areas")
      .toPromise()
      .then(res => {
        this.areaList = res as AreaVM[];
      });
  }
}
