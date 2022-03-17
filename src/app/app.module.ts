import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { CidadesComponent } from './cidades/cidades.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarComponent } from './cidades/criar/criar.component';
import { EditarComponent } from './cidades/editar/editar.component';
import { CriarPessoaComponent } from './pessoas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PessoasComponent,
    CidadesComponent,
    FooterComponent,
    NavbarComponent,
    CriarComponent,
    EditarComponent,
    CriarPessoaComponent,
    EditarPessoaComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
