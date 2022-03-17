import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../Model/Pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  baseURL = environment.baseURL + '/pessoas';

  constructor(private http: HttpClient) { }

  async getPessoaList() {
    const result = this.http.get<Pessoa[]>(this.baseURL).toPromise();
    return result;
  }

  async getPessoaById(id: number) {
    const result = await this.http.get<Pessoa>(`${this.baseURL}/${id}`).toPromise();
    return result;
  }  

  async criarPessoa(pessoa: Pessoa) {
    const result = await this.http.post<any>(`${this.baseURL}`, pessoa).toPromise();
    return result;
  }  

  async alterarPessoa(pessoa: Pessoa){
    const result = this.http.put(`${this.baseURL}/${pessoa.id}`, pessoa)
      .toPromise()
    return result;
  }

  async excluirPessoa(id: number){
    const result = await this.http.delete(`${this.baseURL}/${id}`).toPromise();
    return result;
  }
}
