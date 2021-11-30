import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gas';
import { DialogGasolineraDetailComponent } from '../dialog-gasolinera-detail/dialog-gasolinera-detail.component';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolineraInput!: ListaEESSPrecio;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openGasolineraDialog() {
    this.dialog.open(DialogGasolineraDetailComponent, {
      height:'400px',
      width:'400px',
      data: {
        gasolinera: this.gasolineraInput
      }
    })
  }

}
