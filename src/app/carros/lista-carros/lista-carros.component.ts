import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../carro'
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {

  carros: Carro[] = [];

  constructor(
    private carrosService: CarrosService,
    private router: Router,
    private rotaAtiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.atualizaCarros();
  }

  atualizaCarros() {
    this.carrosService.listar().subscribe({
      next: (carros) => this.carros = carros,
      error: (error) => console.log(error),
    });
  }

  excluir(id: number) {
    if (window.confirm('Deseja mesmo exlcuir esse carro?')) {
      this.carrosService.excluir(id).subscribe({
        complete: () => this.atualizaCarros()
      });
    }
  }

  edicao(id: number) {
    this.router.navigate(['editar', id], {
      relativeTo: this.rotaAtiva
    });
  }

}
