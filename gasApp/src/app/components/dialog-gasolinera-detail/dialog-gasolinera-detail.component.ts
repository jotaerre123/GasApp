import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gas';
import { GasolineraService } from 'src/app/services/gasolinera.service';


@Component({
  selector: 'app-dialog-gasolinera-detail',
  templateUrl: './dialog-gasolinera-detail.component.html',
  styleUrls: ['./dialog-gasolinera-detail.component.css']
})

export class DialogGasolineraDetailComponent implements OnInit {

  gasolinera!:ListaEESSPrecio;

  constructor( @Inject(MAT_DIALOG_DATA) private data: DialogGasolineraDetailComponent) { }

  ngOnInit(): void {
    this.gasolinera = this.data.gasolinera;
  }

}
