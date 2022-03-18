import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesComponent } from './cidades/cidades.component';
import { CriarComponent as CriarCidadeComponent } from './cidades/criar/criar.component';
import { EditarComponent } from './cidades/editar/editar.component';
import { HomeComponent } from './home/home.component';
import { CriarPessoaComponent } from './pessoas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';
import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cidades',
    children: [
      { path: '', component: CidadesComponent },
      { path: 'criar', component: CriarCidadeComponent },
      { path: 'editar/:id', component: EditarComponent },
    ]
  },
  {
    path: 'pessoas',
    children: [
      { path: '', component: PessoasComponent },
      { path: 'criar', component: CriarPessoaComponent },
      { path: 'editar/:id', component: EditarPessoaComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
