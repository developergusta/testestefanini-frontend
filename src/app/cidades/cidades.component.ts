import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cidade } from '../Model/Cidade';
import { CidadeServiceService } from '../_services/cidade-service.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  constructor(private cidadeService: CidadeServiceService) { }

  cidadeId: number = 0;
  cidades: Cidade[] = [];

  async ngOnInit() {
    try {
      this.cidades = await this.getCidades();
      console.log(this.cidades);
    } catch (error) {
      console.log(error);
    }
  }  

  async getCidades(){
    return await this.cidadeService.getCidadeList();
  }

  async confirmaExcluirCidade(){
    await this.cidadeService.excluirCidade(this.cidadeId)
    window.location.reload()
  }

  async excluirCidade(id: number){
    this.cidadeId = id;
  }



  
}
