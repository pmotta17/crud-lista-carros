import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCarroComponent } from './form-carro/form-carro.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';

const routes: Routes = [
  { path: '', component: ListaCarrosComponent},
  { path: 'novo', component: FormCarroComponent},
  { path: 'editar/:id', component: FormCarroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
