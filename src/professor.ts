import { Pessoa } from "./pessoa";

class Professor extends Pessoa {

    //////////////////////////
	//Atributos de Instância//
	//////////////////////////

    salario: number;

    //////////////
	//Construtor//
	//////////////

    constructor(nome: string, sobrenome: string,sexo: string, CPF:string, idade: number, brasileiro: boolean, enderecos: string[],salario: number){
        super(nome,sobrenome,sexo,CPF,idade,brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
		this.salario = salario;
    }

    ////////////////////////
	//Métodos de Instância//
	////////////////////////

    // O método gerarMatricula é uma sobrescrita (Override)
	// A implementação do método gerarMatricula na classe Aluno sobrescreve o método abstrato definido na classe Pessoa
	// Associaçaõ Comportamental - Dependência da Classe Aluno com as classes Date e Math
    gerarMatricula(): number {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
    }

}

export { Professor }