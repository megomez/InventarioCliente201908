import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TdocumentoVM } from '../models/TdocumentoVM';

@Injectable({
  providedIn: 'root'
})

export class TdocumentoService {
  tdocumentoList: TdocumentoVM[];

  readonly rootURL = "https://inventarioapi201908.azurewebsites.net/api/";

  constructor(protected httpClient: HttpClient) {
  }

  postTdocumento(formData: TdocumentoVM) {
    let requestToPost = {
      "nombre": formData.Nombre,
      "sigla": formData.Sigla
    };
    return this.httpClient.post(this.rootURL + "tdocumentos", requestToPost);
  }

  getTdocumentos() {
    this.httpClient.get(this.rootURL + "tdocumentos")
      .toPromise()
      .then(res => {
        this.tdocumentoList = res as TdocumentoVM[];
      });
  }
}
