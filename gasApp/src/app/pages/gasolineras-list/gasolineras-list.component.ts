import { Component, OnInit } from '@angular/core';
import {  ListaEESSPrecio, Provincia } from 'src/app/models/interfaces/gas';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolineras-list',
  templateUrl: './gasolineras-list.component.html',
  styleUrls: ['./gasolineras-list.component.css']
})
export class GasolinerasListComponent implements OnInit {

  gasolineraList: ListaEESSPrecio[] = [];
  gasolinerasTodas!: ListaEESSPrecio[];

  Provincias: Provincia[] = [];
  IDProvincia: string[] = [];
  
  constructor(private gasolineraService: GasolineraService) { }

  

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(gasolineras => {
      this.gasolineraList = this.gasolineraService.getTodo(JSON.stringify(gasolineras));
      console.log(this.gasolineraList);
      this.gasolinerasTodas = this.gasolineraList;
    });
    this.gasolineraService.getProvincias().subscribe(gasolineraResp =>{
      this.Provincias = gasolineraResp
    });

    

  }


  
  filtrarGasolineras(){

    this.gasolineraList= this.gasolinerasTodas
    if(this.IDProvincia.length > 0){
      let result : ListaEESSPrecio[] = this.gasolineraList.filter(gasolinera => this.IDProvincia.includes(gasolinera.idProvincia));
      this.gasolineraList = result;
    }else{
      this.gasolineraService.getGasolineras();
    }
  }
  quitarFiltro(){
    this.gasolineraList=this.gasolinerasTodas;
  }


}
