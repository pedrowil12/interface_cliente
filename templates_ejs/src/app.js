/*
Exemplo simples de projeto com uma estrutura
de diretórios organizada.
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo
var Pessoa = modelo.Pessoa;

/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/projetos', listProjectHandler);

app.get('/', sobreAutorHandler)

app.listen(port, listenHandler);

function listProjectHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
    let projeto_1 = new Projeto("Mr.Academy","web","PHP", "Setembro de 2020", "Dezembro de 2020", "https://github.com/ThomasPalma1/FatecPI-01"); 
    let projeto_2 = new Projeto("ION-X","web","Java", "Setembro de 2021", "Novembro de 2021", "https://github.com/ThomasPalma1/FatecAPI-03");
    let projeto_3 = new Projeto("TecSoja","mobile","JavaScript", "Março de 2022", "Junho de 2022", "https://github.com/ThomasPalma1/FatecAPI-04");    
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
}

function sobreAutorHandler(req, res){
    let pessoa_1 = new Pessoa("Pedro Willian de Paula Ferreira", "19.", "NodeJS, Java, C#, React, HTML, CSS, Bootstrap, Jquery.", 
    "Cursando 5º semestre de Análise e Desenvolvimento de Sistemas na Fatec de SJC.", "https://github.com/pedrowil12", "https://www.linkedin.com/in/pedro-ferreira-6a8417190/");
    let pessoas = [];
    pessoas.push(pessoa_1);
    res.render('sobre_autor.ejs',{lista_pessoas: pessoas});
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}
