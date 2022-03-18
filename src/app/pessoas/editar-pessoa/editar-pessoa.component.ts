import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from 'src/app/Model/Cidade';
import { Pessoa } from 'src/app/Model/Pessoa';
import { CidadeServiceService } from 'src/app/_services/cidade-service.service';
import { PessoaServiceService } from 'src/app/_services/pessoa-service.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa()
  cidades: Cidade[] = []
  pessoaForm!: FormGroup
  idPessoa!: number;

  
  constructor(private fb: FormBuilder,private cidadeService: CidadeServiceService,private activatedRouter: ActivatedRoute,  private pessoaService: PessoaServiceService, public router: Router) { }

  async ngOnInit() {
    this.validation()
    this.carregarPessoa();
    await this.carregarCidades();
  }

  carregarPessoa() {
    this.idPessoa = this.activatedRouter.snapshot.params['id'];
    this.pessoaService.getPessoaById(this.idPessoa)
      .then(
        (pessoa: Pessoa) => {
          console.log(pessoa)
          this.pessoa = pessoa;
        }
      );
  }

  async carregarCidades(){
    this.cidades = await this.cidadeService.getCidadeList()
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

  async editarPessoa(): Promise<any>{
    if (this.pessoaForm.valid){
      this.pessoa = Object.assign({}, this.pessoaForm.value);
      this.pessoa.id = this.idPessoa
      this.pessoaService.alterarPessoa(this.pessoa).then(
        () => {
          this.router.navigate(['/pessoas']);
        }).catch( error => {
          console.log(error);
        }
      );

    }
  }

}
