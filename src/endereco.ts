class Endereco {

    //////////////////////////
    //Atributos de Instância//
    //////////////////////////

    CEP: string = '';
    numero: number = 0;
    rua: string = '';
    bairro: string = '';
    cidade: string = '';
    estado: string = '';

    //////////////
    //Construtor//
    //////////////

    constructor(
        CEP: string, 
        numero: number,
        rua: string,
        bairro: string,
        cidade: string,
        estado: string
    ) {
        this.CEP = CEP;
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

}

export { Endereco }