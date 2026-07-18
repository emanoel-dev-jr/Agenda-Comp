class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome,
        this.idade = idade,
        this.cpf = cpf;
    }
}

const eu  = new Pessoa("Emanoel", 16, "843.378.283-28");

console.log(eu, "\n")
for (let chave in eu) {
    console.log(`${chave} - ${eu[chave]}`)
}