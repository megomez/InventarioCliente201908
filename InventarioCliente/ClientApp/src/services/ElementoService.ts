import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementoVM } from '../models/ElementoVM';
import { TelementoService } from './TelementoService';

@Injectable({
  providedIn: 'root'
})

export class ElementoService {
  elementoList: ElementoVM[];
  elemento: ElementoVM;
  telementoService: TelementoService;

  readonly rootURL = "https://inventarioapi201908.azurewebsites.net/api/";

  constructor(protected httpClient: HttpClient) {
    this.elemento = new ElementoVM();
    this.telementoService = new TelementoService(httpClient);
  }

  convertDate(dateString: string) {
    let date = new Date(dateString);
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let returnDate = year + "-";

    if (month <= 9) {
      returnDate = returnDate + "0";
    }

    returnDate = returnDate + month + "-";

    if (day <= 9) {
      returnDate = returnDate + "0";
    }

    returnDate = returnDate + day;

    return returnDate;

  }

  getElementos() {
    this.httpClient.get(this.rootURL + "elementos")
      .toPromise()
      .then(res => {
        this.elementoList = res as ElementoVM[];
      });
  }

  getElemento(id: string) {
    return this.httpClient.get(this.rootURL + "elementos/" + id);
  }

  postElemento(formData: ElementoVM) {
    let requestToPost = {
      "descripcion": formData.descripcion,
      "serial": formData.serial,
      "valorCompra": formData.valorCompra,
      "fechaCompra": formData.fechaCompra,
      "estado": formData.estado,
      "telementoId": formData.telementoId
    };

    return this.httpClient.post(this.rootURL + "elementos", requestToPost);
  }

  putElemento(formData: ElementoVM, id: string) {
    let requestToPost = {
      "descripcion": formData.descripcion,
      "serial": formData.serial,
      "valorCompra": formData.valorCompra,
      "fechaCompra": formData.fechaCompra,
      "estado": formData.estado,
      "telementoId": formData.telementoId
    };

    return this.httpClient.put(this.rootURL + "elementos/" + id, requestToPost);
  }

  deleteElemento(id: number) {
    return this.httpClient.delete(this.rootURL + "elementos/" + id);
  }
}
