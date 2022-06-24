import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../carro';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-form-carro',
  templateUrl: './form-carro.component.html',
  styleUrls: ['./form-carro.component.css']
})
export class FormCarroComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  carro!: Carro;

  constructor(
    private carrosService: CarrosService,
    private router: Router,
    private rotaAtiva: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.rotaAtiva.params.subscribe({
      next: (params) => {
        this.id = params['id'];

        if (this.id !== undefined) {
          this.carrosService.buscaCarroPorId(this.id).subscribe({
            next: (carro) => {

              this.carro = carro;

              this.form = new FormGroup({
                marca: new FormControl(
                  carro.marca, [Validators.required]
                ),
                modelo: new FormControl(
                  carro.modelo, [Validators.required]
                ),
                ano: new FormControl(
                  carro.ano, [Validators.required]
                ),
                preco: new FormControl(
                  carro.preco, [Validators.required]
                ),
                descricao: new FormControl(
                  carro.descricao, [Validators.required]
                ),
                url_foto: new FormControl(
                  carro.url_foto, [Validators.required]
                ),
              });
            }
          });
        }
      }
    });

    this.form = new FormGroup({
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      ano: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      url_foto: new FormControl('', [Validators.required])
    });

  }

  salvar() {
    const { value: carro } = this.form;

    if (this.form.valid) {
      if (this.id !== undefined) {
        const carroEditado = {
          ...this.carro,
          marca: carro.marca,
        }

        this.carrosService.editar(carroEditado).subscribe();
        this.router.navigate(['/carros']);

      } else {
        this.carrosService.salvar(carro).subscribe();
        this.router.navigate(['/carros']);
      }

    }
  }

  cancelar() {
    this.router.navigate(['/carros']);
  }

}
