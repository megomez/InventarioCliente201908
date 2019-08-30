import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AreaComponent } from "./area/AreaComponent";
import { AreaService } from '../services/AreaService';
import { IngresarAreaComponent } from './area/ingresar/IngresarAreaComponent';
import { PersonaComponent } from './personas/PersonaComponent';
import { IngresarPersonaComponent } from './personas/ingresar/IngresarPersonaComponent';
import { TdocumentoComponent } from './tdocumentos/TdocumentoComponent';
import { IngresarTdocumentoComponent } from './tdocumentos/ingresar/IngresarTdocumentoComponent';
import { PersonaService } from '../services/PersonaService';
import { TdocumentoService } from '../services/TdocumentoService';
import { EditarPersonaComponent } from './personas/editar/EditarPersonaComponent';
import { TelementoComponent } from './telementos/TelementoComponent';
import { IngresarTelementoComponent } from './telementos/ingresar/IngresarTelementoComponent';
import { ElementoComponent } from './elementos/ElementoComponent';
import { IngresarElementoComponent } from './elementos/ingresar/IngresarElementoComponent';
import { EditarElementoComponent } from './elementos/editar/EditarElementoComponent';
import { PersonaElementoComponent } from './personaelementos/PersonaElementoComponent';
import { IngresarPersonaElementoComponent } from './personaelementos/ingresar/IngresarPersonaElementoComponent';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AreaComponent,
    IngresarAreaComponent,
    PersonaComponent,
    IngresarPersonaComponent,
    EditarPersonaComponent,
    TdocumentoComponent,
    IngresarTdocumentoComponent,
    TelementoComponent,
    IngresarTelementoComponent,
    ElementoComponent,
    IngresarElementoComponent,
    EditarElementoComponent,
    PersonaElementoComponent,
    IngresarPersonaElementoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'areas', component: AreaComponent },
      { path: 'areas/ingresar', component: IngresarAreaComponent },
      { path: 'personas', component: PersonaComponent },
      { path: 'personas/ingresar', component: IngresarPersonaComponent },
      { path: 'personas/editar', component: EditarPersonaComponent },
      { path: 'tdocumentos', component: TdocumentoComponent },
      { path: 'tdocumentos/ingresar', component: IngresarTdocumentoComponent },
      { path: 'telementos', component: TelementoComponent },
      { path: 'telementos/ingresar', component: IngresarTelementoComponent },
      { path: 'elementos', component: ElementoComponent },
      { path: 'elementos/ingresar', component: IngresarElementoComponent },
      { path: 'elementos/editar', component: EditarElementoComponent },
      { path: 'personaelementos', component: PersonaElementoComponent },
      { path: 'personaelementos/ingresar', component: IngresarPersonaElementoComponent },
      { path: 'personaelementos/editar', component: PersonaElementoComponent },
    ])
  ],
  providers: [AreaService, PersonaService, TdocumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
