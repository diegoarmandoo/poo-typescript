import { Pessoa } from "./pessoa/pessoa";
import { Aluno, SituacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { Endereco } from "./endereco/endereco";

const endereco01: Endereco = new Endereco("490000",12,"Rua A","Bairro A","Cidade A","Estado A");
const endereco02: Endereco = new Endereco("49888",63,"Rua b","Bairro B","Cidade B","Estado B");

const felipe: Aluno = new Aluno("Felipe","Jose","Masculino","999.999.999-99",34,true,[endereco01],"Informatica",SituacaoAluno.CONCLUIDO); 
const luis: Professor = new Professor("Luis","Santos","Masculino","929.939.199-29",56,false,[endereco01,endereco02],1000);

console.log(felipe);
console.log(luis);

console.log("-------------------------------")
console.log(Pessoa.getQuantidadePessoas());