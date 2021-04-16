import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentoComponent } from './components/documento/documento.component';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PadreFormComponent } from './components/padre-form/padre-form.component';
import { HijoFormComponent } from './components/hijo-form/hijo-form.component';
import { DocumentoFormComponent } from './components/documento-form/documento-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HijoNombrePadreComponent } from './components/hijo-nombre-padre/hijo-nombre-padre.component';

const MENU: Routes = [
  {path: 'hijos', component: HijoComponent},
  {path: 'hijo-form', component: HijoFormComponent},
  {path: 'hijo-form/:id', component: HijoFormComponent},
  {path: 'padres', component: PadreComponent},
  {path: 'padre-form', component: PadreFormComponent},
  {path: 'padre-form/:id', component: PadreFormComponent},
  {path: 'documentos', component: DocumentoComponent},
  {path: 'documento-form', component: DocumentoFormComponent},
  {path: 'documento-form/:id', component: DocumentoFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    DocumentoComponent,
    MenuComponent,
    PadreFormComponent,
    HijoFormComponent,
    DocumentoFormComponent,
    HijoNombrePadreComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(MENU),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
