import { Pessoa } from "./pessoa";

class Aluno extends Pessoa {

    //////////////////////////
	//Atributos de Instância//
	//////////////////////////

    curso: string;
    situacao: string;

    //////////////
	//Construtor//
	//////////////

    constructor(nome: string, sobrenome: string,sexo: string, CPF:string, idade: number, brasileiro: boolean, enderecos: string[],curso: string, situacao: string){
        super(nome,sobrenome,sexo,CPF,idade,brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
		this.curso = curso;
        this.situacao = situacao;
    }

    ////////////////////////
	//Métodos de Instância//
	////////////////////////

    // O método gerarMatricula é uma sobrescrita (Override)
	// A implementação do método gerarMatricula na classe Aluno sobrescreve o método abstrato definido na classe Pessoa
	// Associaçaõ Comportamental - Dependência da Classe Aluno com as classes Date e Math
    gerarMatricula(): number {
        let ano: number = new Date().getFullYear();
		let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
		return Number(`${ano}${numero}`)
    }

}

export { Aluno }