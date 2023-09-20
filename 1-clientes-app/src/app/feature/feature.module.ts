import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { DirectivaComponent } from './directiva/directiva.component';



@NgModule({
  declarations: [
    ClientsComponent,
    DirectivaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivaComponent
  ]
})
export class FeatureModule { }
