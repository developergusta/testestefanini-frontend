import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cidade } from '../Model/Cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeServiceService {

  baseURL = environment.baseURL + '/cidades';

  constructor(private http: HttpClient) { }

  async getCidadeList() {
    const result = this.http.get<Cidade[]>(this.baseURL).toPromise();
    return result;
  }

  async getCidadeById(id: number) {
    const result = await this.http.get<Cidade>(`${this.baseURL}/${id}`).toPromise();
    return result;
  }  

  async criarCidade(cidade: Cidade) {
    const result = await this.http.post<any>(`${this.baseURL}`, cidade).toPromise();
    return result;
  }  

  async alterarCidade(cidade: Cidade){
    const result = this.http.put(`${this.baseURL}/${cidade.id}`, cidade)
      .toPromise()
    return result;
  }

  async excluirCidade(id: number){
    const result = await this.http.delete(`${this.baseURL}/${id}`).toPromise();
    return result;
  }
}
