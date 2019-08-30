import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaService } from './PersonaService';
import { ElementoService } from './ElementoService';
import { PersonaElementoVM } from '../models/PersonaElementoVM';
import { ElementoVM } from '../models/ElementoVM';

@Injectable({
  providedIn: 'root'
})

export class PersonaElementoService {
  personaElementoList: PersonaElementoVM[];
  personaElemento: PersonaElementoVM;
  elemento: ElementoVM;
  personaService: PersonaService;
  elementoService: ElementoService;

  readonly rootURL = "https://inventarioapi201908.azurewebsites.net/api/";

  constructor(protected httpClient: HttpClient) {
    this.personaElemento = new PersonaElementoVM();
    this.personaService = new PersonaService(httpClient);
    this.elementoService = new ElementoService(httpClient);
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

  getPersonaElementos() {
    this.httpClient.get(this.rootURL + "personaelementos")
      .toPromise()
      .then(res => {
        this.personaElementoList = res as PersonaElementoVM[];
      });
  }

  getPersonaElemento(id: string) {
    return this.httpClient.get(this.rootURL + "personaelementos/" + id);
  }

  postPersonaElemento(formData: PersonaElementoVM) {
    let date = new Date();
    let requestToPost = {
      "observacionAsignacion": formData.observacionAsignacion,
      "observacionRetiro": "",
      "fechaAsignacion": this.convertDate(date.toString()),
      "fechaRetiro": "",
      "personaId": formData.personaId,
      "elementoId": formData.elementoId
    };

    //this.updateElemento(formData.elementoId, "Asignado");

    return this.httpClient.post(this.rootURL + "personaelementos", requestToPost);
  }

  putPersonaElemento(formData: PersonaElementoVM, id: string) {
    let requestToPost = {
      "observacionAsignacion": formData.observacionAsignacion,
      "observacionRetiro": formData.observacionRetiro,
      "fechaAsignacion": formData.fechaAsignacion,
      "fechaRetiro": formData.fechaRetiro,
      "personaId": formData.personaId,
      "elementoId": formData.elementoId
    };

    //this.updateElemento(formData.elementoId, "Sin asignar");

    return this.httpClient.put(this.rootURL + "personaelementos/" + id, requestToPost);
  }

  deletePersonaElemento(id: number) {
    return this.httpClient.delete(this.rootURL + "personaelementos/" + id);
  }

  updateElementoData(id: number) {
    this.elementoService.getElemento(id.toString()).subscribe((res: any) => {
      this.elemento = res as ElementoVM;

      let date = this.elemento.fechaCompra;
      this.elemento.fechaCompra = this.elementoService.convertDate(date);
    });
  }

  updateElemento(id: number, estado: string) {
    this.elemento.estado = estado;

    this.elementoService.putElemento(this.elemento, id.toString());
  }
}
