export class Usuario {
  set nome(value: string) {
    this._nome = value;
  }
  private _nome: string;
  cpf: string;
  idade: number;

  constructor(nome: string, cpf: string, idade: number) {
    this._nome = nome;
    this.cpf = cpf;
    this.idade = idade;
  }

  get nome():string{
    return this._nome
  }

  toString():string {
    return `Nome ${this.nome},CPF ${this.cpf},Idade${this.idade} `
  }
}

