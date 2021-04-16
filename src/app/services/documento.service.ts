import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Documento} from '../models/documento';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
urlEndPointDocumentos = 'http://localhost:8080/api/documentos';
httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'});

  constructor(private httpClient: HttpClient) { }
  getDocumentos(): Observable<Documento[]>{
    return this.httpClient.get<Documento[]>(this.urlEndPointDocumentos);
  }
  saveDocumento(documento: Documento): Observable<Documento>{
   return this.httpClient.post<Documento>(this.urlEndPointDocumentos, documento, {headers: this.httpHeaders});
  }
  getDocumentoById(id: number): Observable<Documento>{
    return this.httpClient.get<Documento>(`${this.urlEndPointDocumentos}/${id}`);
  }
}
