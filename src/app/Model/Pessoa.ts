import { Cidade } from "./Cidade";

export class Pessoa{
    id: number = 0;
    nome?: string;
    cpf?: string;
    idade?: number;
    idCidade?: number;
    cidade?: Cidade;
}