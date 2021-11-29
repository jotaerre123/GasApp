import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolinerasListComponent } from './pages/gasolineras-list/gasolineras-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: GasolinerasListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
