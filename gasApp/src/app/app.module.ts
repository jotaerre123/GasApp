import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GasolinerasListComponent } from './pages/gasolineras-list/gasolineras-list.component';
import { GasolineraItemComponent } from './components/gasolinera-item/gasolinera-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GasolinerasListComponent,
    GasolineraItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
