import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelementoVM } from '../models/TelementoVM';

@Injectable({
  providedIn: 'root'
})

export class TelementoService {
  telementoList: TelementoVM[];

  readonly rootURL = "https://inventarioapi201908.azurewebsites.net/api/";

  constructor(protected httpClient: HttpClient) {
  }

  postTelemento(formData: TelementoVM) {
    let requestToPost = {
      "nombre": formData.nombre
    };
    return this.httpClient.post(this.rootURL + "telementos", requestToPost);
  }

  getTelementos() {
    this.httpClient.get(this.rootURL + "telementos")
      .toPromise()
      .then(res => {
        this.telementoList = res as TelementoVM[];
      });
  }
}
