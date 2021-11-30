import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraListResponse, Provincia } from '../models/interfaces/gas';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }


  getGasolineras() :Observable<any>{
    return this.http.get<any>('../../assets/gasolineras');

  }

  getProvincias() : Observable<Provincia[]>{
    return this.http.get<Provincia[]>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/')
  }

  getTodo(jsonString: string){

    
        let  jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
         jsonStringReplaced = jsonStringReplaced.replace(/Rótulo/gi, 'rotulo');
         jsonStringReplaced = jsonStringReplaced.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
         jsonStringReplaced = jsonStringReplaced.replace(/Municipio/gi, 'municipio');
         jsonStringReplaced = jsonStringReplaced.replace(/C\.P\./gi, 'cP');
         jsonStringReplaced = jsonStringReplaced.replace(/Dirección/gi,'direccion');
         jsonStringReplaced = jsonStringReplaced.replace(/Horario/gi, 'horario');
         jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 95 E5/gi, 'precioGasolina95E5');
         jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 98 E5/gi, 'precioGasolina98E5');
         jsonStringReplaced = jsonStringReplaced.replace(/Provincia/gi, 'provincia');
         jsonStringReplaced = jsonStringReplaced.replace(/IDEESS/gi, 'ideess');
         jsonStringReplaced = jsonStringReplaced.replace(/IDMunicipio/gi, 'idMunicipio');
         jsonStringReplaced = jsonStringReplaced.replace(/IDProvincia/gi, 'idProvincia');
         jsonStringReplaced = jsonStringReplaced.replace(/IDCCAA/gi, 'idccaa');
         let jsonFinal: GasolineraListResponse = JSON.parse(jsonStringReplaced);
       return jsonFinal.listaEESSPrecio;
        

  }

}
