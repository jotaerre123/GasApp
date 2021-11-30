  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import {  ListaEESSPrecio, Provincia } from 'src/app/models/interfaces/gas';
  import { Municipios } from 'src/app/models/interfaces/municipios';
  import { GasolineraService } from 'src/app/services/gasolinera.service';
  import { MunicipioService } from 'src/app/services/municipio.service';

  @Component({
    selector: 'app-gasolineras-list',
    templateUrl: './gasolineras-list.component.html',
    styleUrls: ['./gasolineras-list.component.css']
  })
  export class GasolinerasListComponent implements OnInit {

    gasolineraList: ListaEESSPrecio[] = [];
    gasolinerasTodas!: ListaEESSPrecio[];
    precioMin!: number;
    precioMax!: number;
    Provincias: Provincia[] = [];
    IDProvincia: string[] = [];
    tipoGasolina!: string;
    municipiosList: Municipios[] = [];
    mostrar!:boolean;

    

    municipio!: string;
    
    constructor(private gasolineraService: GasolineraService, private municipios: MunicipioService) { }

    

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
        this.getMunicipios();
      }else{
        this.gasolineraService.getGasolineras();
      }
    }
    quitarFiltro(){
      this.gasolineraList=this.gasolinerasTodas;
    }

    filtrarPorPrecio(){

      this.gasolineraList = this.gasolinerasTodas
      if(this.tipoGasolina.includes('precioGasoleoA')){

        let gasolineraPrecio: ListaEESSPrecio[] = this.gasolineraList.filter(provincia => this.precioMin < Number.parseFloat(provincia.precioGasoleoA.replace(',','.'))
      && this.precioMax > Number.parseFloat(provincia.precioGasoleoA.replace(',', '.')))
      this.gasolineraList = gasolineraPrecio;

      }
      if(this.tipoGasolina.includes('precioGasolina95E5')){

        let gasolineraPrecio: ListaEESSPrecio[] = this.gasolineraList.filter(provincia => this.precioMin < Number.parseFloat(provincia.precioGasolina95E5.replace(',','.'))
      && this.precioMax > Number.parseFloat(provincia.precioGasolina95E5.replace(',', '.')))
      this.gasolineraList = gasolineraPrecio;

      }
      if(this.tipoGasolina.includes('precioGasolina98E5')){

        let gasolineraPrecio: ListaEESSPrecio[] = this.gasolineraList.filter(provincia => this.precioMin < Number.parseFloat(provincia.precioGasolina98E5.replace(',','.'))
      && this.precioMax > Number.parseFloat(provincia.precioGasolina98E5.replace(',', '.')))
      this.gasolineraList = gasolineraPrecio;

      }
    }

    filterByMunicipio(){
      this.gasolineraList = this.gasolinerasTodas
      this.gasolineraList = this.gasolineraList.filter(gasolinera => this.municipio == gasolinera.municipio)
    }

    getMunicipios(){
      this.mostrar= true;
      this.municipios.getMunicipiosFromProvincia(this.IDProvincia).subscribe(municipio =>{
        this.municipiosList = municipio;
      })
    }
  

    


  }
