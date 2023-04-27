import { Pessoa } from "./pessoa";

const diego: Pessoa = new Pessoa("Diego", "Armando de Oliveira ", 36, true, ['Rua A','Rua C']);
const maria: Pessoa = new Pessoa("Maria", "José", 25, false, ['Rua B']);

console.log(diego.exibirNomeCompleto());
console.log(diego.recuperarEndereco(0));
console.log(diego);
console.log("-------------------------------")
console.log(maria.exibirNomeCompleto());
console.log(maria.recuperarEndereco(0));
console.log(maria);