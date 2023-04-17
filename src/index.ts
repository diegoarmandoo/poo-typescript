let nome: string;
let sobrenome: string;
let nomecompleto: string;
let idade: number;
let brasileiro: boolean;
let enderecos: string[]; // Ou let enderecos: Array<string>;

nome = 'Diego';
sobrenome = 'Armando de oliveira';
idade = 43;
brasileiro = false;
nomecompleto = nome + " " + sobrenome;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto", "Rua D"]

let exibirNomeCompleto = function(): string  {
    return (`O nome completo é: ${nomecompleto}`);
}

let recuperaEndereco = function(posicao: number): string {
    return enderecos[posicao];
}

console.log(exibirNomeCompleto());
console.log(recuperaEndereco(0));