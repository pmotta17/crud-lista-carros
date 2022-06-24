import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from './carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private API_URL: string = "http://localhost:3000/carros";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Carro[]>(this.API_URL);
  }

  salvar(carro: Carro) {
    return this.http.post<Carro>(this.API_URL, carro);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  buscaCarroPorId(id: number) {
    return this.http.get<Carro>(`${this.API_URL}/${id}`);
  }

  editar(carro: Carro) {
    return this.http.put(`${this.API_URL}/${carro.id}`, carro)
  }

}
