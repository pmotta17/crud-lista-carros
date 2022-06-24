import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { FormCarroComponent } from './form-carro/form-carro.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormCarroComponent,
    ListaCarrosComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarrosModule { }
