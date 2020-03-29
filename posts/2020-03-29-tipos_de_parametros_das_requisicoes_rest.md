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
Existem três tipos de parâmetros, dois deles utilizados no método GET e um no método POST.

* Query Params
* Route Params
* Body Params

### Query & Route Params

[Query params](https://en.wikipedia.org/wiki/Query_string) recebe os dados da requisição como parâmetro na URL, pode conter 1 ou mais parâmetros.

Exemplo: 
```
http://minhaapi.com/movies?name=transformes&duration=2&actor=octimusprime
```

_**Route params**_ recebe os dados da requisição na rota, é a melhor maneira para buscar algo, deletar ou atualizar por ID, por exemplo:

```
GET http://minhaapi.com/movies/1 
```

```
DELETE http://minhaapi.com/movies/1 
```

```
PUT http://minhaapi.com/movies/1 
```

Nesse exemplo acima busca, delete e atualiza o filme com ID 1.

Ambos mudam a forma de escrever o código, veja: 

```
/**
* três tipos de parâmetros
* Query params = ?teste=1
* Route params = /users/1
* Request Body = { "name": "Thiago" }
*/
  
// Query params = ?name=thiago
// fazer a requisição no navegador: http://localhost:3333/users/?name=Thiago
server.get("/users", (req, res) => {
  const name = req.query.name;
	return res.json({ message:  `Hello ${name}` });
});


// Route Params = /users/1
// fazer a requisição no navegador: http://localhost:3333/users/1
server.get("/users/:id", (req, res) => {
// const id = req.params.id;
const { id } = req.params; // desestruturado com ES06
	return res.json({ message:  `Buscando o usuário de ID: ${id}`});
});

```

### Body Params

_**Body Params**_ recebe os dados da requisição no corpo da requisição, em um objeto em JSON. Sempre utilizando no método POST da requisição.

```
POST
{
 "name": "Thiago",
 "age": 21,
 "email": "thiago@mail.com"
}
```

E no controller vc pega a requisição para salvar os dados no banco de dados.

```
server.post("/users", (req, res){
    const { name, age, email } = req.body;

    await connection("users").insert({ name, age, email });

    return res.json({ id });
 }
```

Objetivo foi mostrar as diferenças e também dar os devidos exemplos.

Quando surgir a dúvida de qual é qual, basta voltar aqui no post.

Resumindo:

Query Param: vc vai usar ```?name=thiago&lastname=oliveira```

Route Param: vc vai usar ```/users/1```



