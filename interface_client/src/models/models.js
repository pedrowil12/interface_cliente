
class Projeto {
    constructor(id, titulo, tipo, tecnologia, inicio, fim){
        this.id= id;
        this.titulo = titulo;
        this.tipo = tipo;
        this.tecnologia = tecnologia;
        this.inicio = inicio;
        this.fim = fim;
   }
}

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

module.exports = {
    Projeto: Projeto,
    Pessoa: Pessoa
}