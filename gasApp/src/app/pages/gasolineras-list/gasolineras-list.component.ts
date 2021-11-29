import { Component, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/models/interfaces/gas';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolineras-list',
  templateUrl: './gasolineras-list.component.html',
  styleUrls: ['./gasolineras-list.component.css']
})
export class GasolinerasListComponent implements OnInit {

  gasolineraList: Gasolinera[] = [];

  constructor(private gasolineraService: GasolineraService) { }



  ngOnInit(): void {

    this.gasolineraService.getGasolineras().subscribe(resp => {
      this.gasolineraList = resp.ListaEESSPrecio;
      
    });

  }

}
