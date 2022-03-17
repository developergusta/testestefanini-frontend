import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pessoa } from '../Model/Pessoa';
import { PessoaServiceService } from '../_services/pessoa-service.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  constructor(private pessoaService: PessoaServiceService) { }

  pessoaId: number = 0;
  pessoas: Pessoa[] = [];

  async ngOnInit() {
    try {
      this.pessoas = await this.getPessoas();
      console.log(this.pessoas)      
    } catch (error) {
      console.log(error);
    }
  }  

  async getPessoas(){
    return await this.pessoaService.getPessoaList();
  }

  async confirmaExcluirPessoa(){
    await this.pessoaService.excluirPessoa(this.pessoaId)
    window.location.reload()
  }

  async excluirPessoa(id: number){
    this.pessoaId = id;
  }
}