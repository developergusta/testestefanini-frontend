import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from 'src/app/Model/Cidade';
import { Pessoa } from 'src/app/Model/Pessoa';
import { CidadeServiceService } from 'src/app/_services/cidade-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cidadeForm!: FormGroup
  cidade = new Cidade();
  idCidade!: number;

  constructor(private fb: FormBuilder, private cidadeService: CidadeServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.validation();
    this.carregarUsuario();
  }

  carregarUsuario() {
    this.idCidade = this.activatedRouter.snapshot.params['id'];
    this.cidadeService.getCidadeById(this.idCidade)
      .then(
        (cidade: Cidade) => {
          console.log(cidade)
          this.cidade = cidade;
        }
      );
  }


  public validation(): any {
    this.cidadeForm = this.fb.group({
      id: this.cidade.id,
      nome: [this.cidade.nome, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      uf: [this.cidade.uf, [Validators.required, Validators.maxLength(2)]]
    });
  }

  async editarCidade(): Promise<any>{
    if (this.cidadeForm.valid){
      this.cidade = Object.assign({}, this.cidadeForm.value);
      this.cidade.id = this.idCidade
      console.log(this.cidade)
      this.cidadeService.alterarCidade(this.cidade).then(
        () => {
          this.router.navigate(['/cidades']);
        }).catch( error => {
          console.log(error);
        }
      );

    }
  }
}
