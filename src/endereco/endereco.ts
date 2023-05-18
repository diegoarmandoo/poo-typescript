class Endereco {

    //////////////////////////
    //Atributos de Instância//
    //////////////////////////

    private _CEP: string = '';
    private _numero: number = 0;
    private _rua: string = '';
    private _bairro: string = '';
    private _cidade: string = '';
    private _estado: string = '';
    
    ///////////////
    //Gets e Sets//
    ///////////////

    public get CEP(): string {
        return this._CEP;
    }

    public set CEP(value: string) {
        this._CEP = value;
    }

    public get numero(): number {
        return this._numero;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public get rua(): string {
        return this._rua;
    }

    public set rua(value: string) {
        this._rua = value;
    }

    public get bairro(): string {
        return this._bairro;
    }

    public set bairro(value: string) {
        this._bairro = value;
    }

    public get cidade(): string {
        return this._cidade;
    }

    public set cidade(value: string) {
        this._cidade = value;
    }

    public get estado(): string {
        return this._estado;
    }
    
    public set estado(value: string) {
        this._estado = value;
    }

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