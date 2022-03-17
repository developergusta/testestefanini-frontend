import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cidade } from 'src/app/Model/Cidade';
import { Pessoa } from 'src/app/Model/Pessoa';
import { CidadeServiceService } from 'src/app/_services/cidade-service.service';
import { PessoaServiceService } from 'src/app/_services/pessoa-service.service';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa()
  cidades: Cidade[] = []
  pessoaForm!: FormGroup
  
  constructor(private fb: FormBuilder,private cidadeService: CidadeServiceService, private pessoaService: PessoaServiceService, public router: Router) { }

  async ngOnInit() {
    this.validation()
    this.cidades = await this.buscarCidades() 
  }

  public validation(): any {
    this.pessoaForm = this.fb.group({
      id: 0,
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      cpf: ['', [Validators.required]],
      idade: ['', [Validators.required, Validators.max(120)]],
      idCidade: ['', [Validators.required]]
    });
  }

  async buscarCidades(){
    return this.cidadeService.getCidadeList();
  }

  async criarPessoa(): Promise<any>{
    if (this.pessoaForm.valid){
      this.pessoa = Object.assign({}, this.pessoaForm.value);
      this.pessoaService.criarPessoa(this.pessoa).then(
        () => {
          this.router.navigate(['/pessoas']);
        }).catch( error => {
          console.log(error);
        }
      );

    }
  }
}
