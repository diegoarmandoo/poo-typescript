class Pessoa {

    nome: string;
    sobrenome: string;
    idade: number;
    brasileiro: boolean;
    enderecos: string[]; // Ou let enderecos: Array<string>;

    static quantidadePessoas: number = 0;

    constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[]){
        this.nome = nome;
        this.sobrenome = sobrenome;
		this.idade = idade;
		this.brasileiro = brasileiro;
		this.enderecos = enderecos;
        Pessoa.quantidadePessoas++;
    }

    exibirNomeCompleto(): string  {
        return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
    }
    
    recuperarEndereco(posicao: number): string {
        return this.enderecos[posicao];
    }

    static getQuantidadePessoas(): number {
        return Pessoa.quantidadePessoas;
    }

}

export { Pessoa }