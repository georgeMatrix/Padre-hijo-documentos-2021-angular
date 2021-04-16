import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hijo} from '../models/hijo';

@Injectable({
  providedIn: 'root'
})
export class HijoService {
urlEndPointHijos = 'http://localhost:8080/api/hijos';
httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'});

  constructor(private httpClient: HttpClient) { }
  getHijo(): Observable<Hijo[]>{
    return this.httpClient.get<Hijo[]>(this.urlEndPointHijos);
  }
  saveHijo(hijo: Hijo): Observable<Hijo>{
    return this.httpClient.post<Hijo>(this.urlEndPointHijos, hijo, {headers: this.httpHeaders});
  }
  getHijoById(id: number): Observable<Hijo>{
    return this.httpClient.get<Hijo>(`${this.urlEndPointHijos}/${id}`);
  }
  putHijo(hijo: Hijo): Observable<Hijo>{
    return this.httpClient.put<Hijo>(`${this.urlEndPointHijos}/${hijo.id}`, hijo, {headers: this.httpHeaders});
  }
}
