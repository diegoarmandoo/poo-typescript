import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";
import { Projeto } from "./projeto";

class Aluno extends Pessoa implements Projeto {

    //////////////////////////
	//Atributos de Instância//
	//////////////////////////

    curso: string;
    situacao: SituacaoAluno; //Associação Estrutural - Composição - A partir de atributo

    //////////////
	//Construtor//
	//////////////

    constructor(nome: string, sobrenome: string,sexo: string, CPF:string, idade: number, brasileiro: boolean, enderecos: Endereco[],curso: string, situacao: SituacaoAluno){
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

    submeterProjetoPesquisa(): void {
        console.log("Isso é uma submissão de projeto de pesquisa de aluno");
    }

    submeterProjetoExtensao(): void {
        console.log("Isso é uma submissão de projeto de extensão de aluno");
    }

}

enum SituacaoAluno {
    ATIVO = 'Ativo',
	MATRICULADO = 'Matriculado',
	TRANCADO = 'Trancado',
	CONCLUIDO = 'Concluído',
	CANCELADO = 'Cancelado',
	FORMANDO = 'Formando' 
}

export { Aluno, SituacaoAluno }