import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Padre} from '../models/padre';

@Injectable({
  providedIn: 'root'
})
export class PadreService {
urlEndPointPadre = 'http://localhost:8080/api/padres';
httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'});
  constructor(private httpClient: HttpClient) { }
  getPadres(): Observable<Padre[]>{
    return this.httpClient.get<Padre[]>(this.urlEndPointPadre);
  }
  savePadres(padre: Padre): Observable<Padre>{
    return this.httpClient.post<Padre>(this.urlEndPointPadre, padre, {headers: this.httpHeaders});
  }
  getPadreById(id: number): Observable<Padre>{
    return this.httpClient.get<Padre>(`${this.urlEndPointPadre}/${id}`);
  }
  updatePadre(padre: Padre): Observable<Padre>{
    return this.httpClient.put<Padre>(`${this.urlEndPointPadre}/${padre.id}`, padre, {headers: this.httpHeaders});
  }
}
