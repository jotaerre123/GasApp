import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraResponse } from '../models/interfaces/gas';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }


  getGasolineras() :Observable<GasolineraResponse>{
    return this.http.get<GasolineraResponse>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/');

  }

}
