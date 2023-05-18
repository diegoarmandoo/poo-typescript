import { Pessoa } from "./pessoa";
import { Aluno } from "./aluno";
import { Professor } from "./professor";

const felipe: Pessoa = new Aluno("Felipe","Jose","Masculino","9999",34,true,['Rua F'],"Informatica","Matriculado"); 
const luis: Professor = new Professor("Luis","Santos","Masculino","9999",56,false,['Portugal'],1000);

console.log(felipe);
console.log(felipe.recuperarEndereco(0));
console.log(luis);
console.log(luis.recuperarEndereco(0));
console.log("-------------------------------")
console.log(Pessoa.getQuantidadePessoas());