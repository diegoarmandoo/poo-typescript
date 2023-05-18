import { Pessoa } from "./pessoa";
import { Aluno, SituacaoAluno } from "./aluno";
import { Professor } from "./professor";
import { Endereco } from "./endereco";

const endereco01: Endereco = new Endereco("490000",12,"Rua A","Bairro A","Cidade A","Estado A");
const endereco02: Endereco = new Endereco("49888",63,"Rua b","Bairro B","Cidade B","Estado B");

const felipe: Aluno = new Aluno("Felipe","Jose","Masculino","9999",34,true,[endereco01],"Informatica",SituacaoAluno.CONCLUIDO); 
const luis: Professor = new Professor("Luis","Santos","Masculino","9999",56,false,[endereco01,endereco02],1000);

felipe.submeterProjetoPesquisa();
felipe.submeterProjetoExtensao();
luis.submeterProjetoPesquisa();
luis.submeterProjetoExtensao();

console.log("-------------------------------")
console.log(Pessoa.getQuantidadePessoas());