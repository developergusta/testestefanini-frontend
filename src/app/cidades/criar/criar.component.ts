import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cidade } from 'src/app/Model/Cidade';
import { CidadeServiceService } from 'src/app/_services/cidade-service.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  cidade: Cidade = new Cidade()
  cidadeForm!: FormGroup

  constructor(private fb: FormBuilder, private cidadeService: CidadeServiceService, public router: Router) { }

  async ngOnInit() {
    this.validation()
  }

  public validation(): any {
    this.cidadeForm = this.fb.group({
      id: 0,
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      uf: ['', [Validators.required, Validators.maxLength(2)]]
    });
  }

  async criarCidade(): Promise<any>{
    if (this.cidadeForm.valid){
      this.cidade = Object.assign({}, this.cidadeForm.value);
      this.cidadeService.criarCidade(this.cidade).then(
        () => {
          this.router.navigate(['/cidades']);
        }).catch( error => {
          console.log(error);
        }
      );

    }
  }

}
