class Pessoa{
    constructor(nome, idade, conhecimentos, formacao, github, linkedin){
        this.nome = nome;
        this.idade = idade;
        this.conhecimentos = conhecimentos;
        this.formacao = formacao;
        this.github = github;
        this.linkedin = linkedin
    }
}

class Projeto{
    constructor(nome, tipo, tecnologia, inicio, fim,  github){
        this.nome = nome;
        this.tipo = tipo;
        this.tecnologia = tecnologia;
        this.inicio = inicio;
        this.fim = fim;
        this.github = github;

    }
}

module.exports = {
    Projeto: Projeto,
    Pessoa: Pessoa
}  






