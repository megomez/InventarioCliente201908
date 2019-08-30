import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AreaService } from './AreaService';
import { PersonaVM } from '../models/PersonaVM';
import { TdocumentoService } from './TdocumentoService';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  personaList: PersonaVM[];
  persona: PersonaVM;
  areaService: AreaService;
  tdocumentoService: TdocumentoService;

  readonly rootURL = "https://inventarioapi201908.azurewebsites.net/api/";

  constructor(protected httpClient: HttpClient) {
    this.persona = new PersonaVM();
    this.areaService = new AreaService(httpClient);
    this.tdocumentoService = new TdocumentoService(httpClient);
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

  getPersonas() {
    this.httpClient.get(this.rootURL + "personas")
      .toPromise()
      .then(res => {
        this.personaList = res as PersonaVM[];
      });
  }

  getPersona(id: string) {
    return this.httpClient.get(this.rootURL + "personas/" + id);
  }

  postPersona(formData: PersonaVM) {
    let requestToPost = {
      "documento": formData.documento,
      "primerNombre": formData.primerNombre,
      "segundoNombre": formData.segundoNombre,
      "primerApellido": formData.primerApellido,
      "segundoApellido": formData.segundoApellido,
      "fechaNacimiento": formData.fechaNacimiento,
      "direccion": formData.direccion,
      "telefono": formData.telefono,
      "email": formData.email,
      "tdocumentoId": formData.tdocumentoId,
      "areaId": formData.areaId
    };

    return this.httpClient.post(this.rootURL + "personas", requestToPost);
  }

  putPersona(formData: PersonaVM, id: string) {
    let requestToPost = {
      "documento": formData.documento,
      "primerNombre": formData.primerNombre,
      "segundoNombre": formData.segundoNombre,
      "primerApellido": formData.primerApellido,
      "segundoApellido": formData.segundoApellido,
      "fechaNacimiento": formData.fechaNacimiento,
      "direccion": formData.direccion,
      "telefono": formData.telefono,
      "email": formData.email,
      "tdocumentoId": formData.tdocumentoId,
      "areaId": formData.areaId
    };

    return this.httpClient.put(this.rootURL + "personas/" + id, requestToPost);
  }

  deletePersona(id: number) {
    return this.httpClient.delete(this.rootURL + "personas/" + id);
  }
}
