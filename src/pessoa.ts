abstract class Pessoa {

    //////////////////////////
	//Atributos de Instância//
	//////////////////////////

    matricula: number = 0;
    nome: string = '';
    sobrenome: string = '';
    sexo: string = '';
    CPF: string = '';
    idade: number = 0;
    brasileiro: boolean = true;
    enderecos: string[] = []; // Ou let enderecos: Array<string>;

    ///////////////////////
	//Atributos Estáticos//
	///////////////////////

    static quantidadePessoas: number = 0;

    //////////////
	//Construtor//
	//////////////

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: string[]){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.CPF = CPF;
		this.idade = idade;
		this.brasileiro = brasileiro;
		this.enderecos = enderecos;
        Pessoa.quantidadePessoas++;
    }

    ////////////////////////
	//Métodos de Instância//
	////////////////////////

    exibirNomeCompleto(): string  {
        return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
    }
    
    recuperarEndereco(posicao: number): string {
        return this.enderecos[posicao];
    }

    /////////////////////
	//Métodos Estáticos//
	/////////////////////

    static getQuantidadePessoas(): number {
        return Pessoa.quantidadePessoas;
    }

    /////////////////////
	//Métodos Abstratos//
	/////////////////////

    //Método abstrato - Sem implementação
	//Usado para garantir que as classes que herdem de pessoa possuam uma implementação do gerarMatricula, 
	//assim é possivel que cada classe que herde de pessoa implemente sua forma específica de gerar matricula (Polimorfismo)
    abstract gerarMatricula(): number;

}

export { Pessoa }