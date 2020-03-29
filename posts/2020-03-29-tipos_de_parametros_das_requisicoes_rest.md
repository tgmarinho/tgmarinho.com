---
title: Tipos de Parâmetros das requisições REST
description: >-
  Conceituando e diferenciando os tipos de parâmetros da requisição em API's
  REST.
date: '2020-03-29 11:31:57'
image: /assets/img/roadway-path-montain.jpg
category: dev
background: '#EB7728'
---
Existem três tipos de parâmetros, dois deles no método GET e um no método POST.

* Query Params
* Route Params
* Body Params

### Query & Route Params

_**[Query params](https://en.wikipedia.org/wiki/Query_string)**_ recebe os dados da requisição como parâmetro na URL, pode conter 1 ou mais parâmetros.

Exemplo: http://minhaapi.com/movies?name=transformes&duration=2&actor=octimusprime



_**Route params**_ recebe os dados da requisição na rota, é melhor forma para buscar algo por ID por exemplo.

Ambos mudam a forma de escrever o código, veja: 

```
const express =  require("express");
process.PORT  =  3333;
const server =  express();

/**
* três tipos de parâmetros
* Query params = ?teste=1
* Route params = /users/1
* Request Body = { "name": "Thiago" }
*/
  
// Query params = ?teste=1
// fazer a requisição no navegador: http://localhost:3333/teste/?nome=Thiago
server.get("/teste", (req, res) => {
const nome = req.query.nome;
	return res.json({ message:  `Hello ${nome}` });
});


// Route params = /users/1
// fazer a requisição no navegador: http://localhost:3333/users/1
server.get("/users/:id", (req, res) => {
// const id = req.params.id;
const { id } = req.params; // desestruturado com ES06
	return res.json({ message:  `Buscando o usuário de ID: ${id}` });
});

// Inicia o servidor ouvindo a porta 3333
server.listen(process.PORT, () => {
	console.log("executando o express na porta: "  +  process.PORT);
});
```

### Body Params

_**Body Params**_ recebe os dados da requisição como um objeto em JSON. Sempre utilizando no método POST da requisição.

