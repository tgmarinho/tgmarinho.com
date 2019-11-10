---
title: Introdução ao GraphQL com NodeJS e MongoDB
description: >-
  Vamos aprender como criar uma API GraphQL com NodeJS usando o Yoga Graphql
  Server e MongoDB com Mongoose
date: '2019-11-09 06:19:09'
image: /assets/img/graphql.png
category: dev
background: '#EB7728'
---
## O que é GraphQL? 

GraphQL é um protocolo de comunicação HTTP, criado pelo Facebook, ele contém algumas opiniões e regras de como informações serão transmitidas entre backend e frontend.

Vamos usar requisição HTTP, porém não iremos Axios por exemplo no backend.

## Benefício

O benefício do GraphQL em relação REST é que temos apenas um endpoint (uma rota por exemplo http://localhost:5000/graphql).

Hoje na aplicação REST temos uma rota rota para cada funcionalidade:

* GET /users - lista todos usuários

* GET /users/1 - retorna o usuário de id

* POST /users - cria um usuário

* PUT /users/1 - atualizad o usuário de id 1

* DELETE /users/1 - deleta usuário de id 1

Com Graphql isso muda. Temos apenas uma rota

* POST /graphql

Temos uma única rota para buscar, atualizar, deletar e criar registros - CRUD.

no método POST podemos enviar no corpo da requisição um JSON

```
{
 query todosUsuarios {
  users()
 }
}
```

E teremos aqui todos os usuários

e na mesma query podemos passar mais de uma query.

```
{
 query todosUsuarios {
  users()
 }

 query todosProdutos {
  produtos()
 }
}
```

Vai me trazer os usuários e produtos


Essa é a primeira diferença entre REST e Graphql. E um benefício muito grande.


## Fale mais

Graphql tem um Playground (Graphcool) bem legal, que seria parecido com Insomnia ou Postman. Tem um print no final do artigo.

Depois que o server é criado com GraphQL podemos abrir no navegador uma UI playground onde podemos fazer as consultas por lá e colocar no nosso código frontend por exemplo, é muito produtivo e legal para testar e documentar a API GraphQL.

No graphql não precisamos ter todos os métodos HTTP: GET, POST, DELETE e PUT.

### Então como eu informo o servidor o quero fazer (deletar, criar, editar)??

No GraphQL temos tres métodos:

1) Query
2) Mutation
3) Subscription

Na Query você sempre utiliza para buscar qualquer informação, nunca altera nada no backend.

A Mutation é usado para criar, alterar ou deletar um registro no backend.

A Subscription é usada para ouvir informações em real time, é um listener de tempo real, sem necessidade de socket.io. 

Os três métodos são semânticos, mas é um padrão você sempre usar query para consulta, mutation para criar, deletar e editar registros e subscription para ouvir informações em tempo real.

Query e Mutation é o mais comum e mais utilizado para começar pois com ambos é que podemos fazer o CRUD básico até avançado.

Podemos fazer múltiplas atualizações, consultas na mesma requisição ao backend. Diferente da API Rest, no site [how-to-graphql](https://www.howtographql.com/basics/1-graphql-is-the-better-rest) mostra muito bem isso.


Posso fazer:

```
{
 mutation updateUser {
  updateUser(id: 1) {
   nome: "Thiago"
  }
  query users {}
 }
}
```

No exemplo acima estou atualizado o nome do usuário de id: 1 para Thiago e na segunda estou trazendo todos os usuários.

O Frontend tem mais responsabilidades na aplicação, o backend manda as informações, mas o frontend pode buscar de forma diferente. Um frontend web pode buscar os dados de um jeito e no mobile faz de outra forma, e o graphql ajuda demais nisso, porque antes tinhamos que fazer controllers diferentes para rotas no mobile e para rotas web e com graphql só mudar a consulta.

Se vc não precisar de um registro só deletar na query =)

A gente resolve muito o problema de overfetching, vamos mostrar na tela só o que precisa, e não todos os dados que uma API Rest estaria trazendo.

Graphql já documenta nosso backend, parametros, tipos, etc, tudo isso graças ao schema que definimos os tipos de dados que esperamos receber e enviar como parâmetro.

## Vamos ver na prática - Show me the Code

Crio uma pasta no meu workspace

```
mkdir graphql-intro-blog && cd graphql-intro-blog
```

Inicio um projeto node.
```
yarn  init  -y
```

Abro o editor de código VSCODe
```
code .
```

Precisamos escolher um framework para poder fazer o backend com graphql.

Geralmente para fazer API Rest ou qualquer outro projeto para web temos o `express` amplamente usado e difundido na comunidade.

Podemos usar o `express` também porém com algumas funcionalidades a mais, então nesse caso vamos usar o `graphql-yoga` que é um wrapper do `express` por baixo dos panos, e ele tem um playground integrado.

Adiciono a dependência: 

```
yarn add graphql-yoga                                                                         
```

Crio uma pasta `src` com um arquivo `server.js` para configurar o servidor.

Vamos configurar o servidor:

```
import { GraphQLServer } from  "graphql-yoga";

const server =  new  GraphQLServer({

});

server.start();

```

Dessa maneira o server já funciona. Mas precisamos definir as rotas.

Para definir as rotas da aplicação, vamos criar um `schema.graphql` na pasta `src`.

Eu tenho dois tipos de rotas:

```
type Query {  

}

type Mutation {  

}
```

`Query` quando quero buscar informação e mutation quando quero alterar.

O schema.graphql é fortemente tipado, tudo tem um tipo.

Por exemplo se eu quero uma query que busca os usuários teria que fazer assim:

```
type Query {
 users: [User!]
}

type User {
 id: ID!
  name: String!
  email: String!
}
```

`users`: retorna um array de `User`, e veja que `user` é um tipo, é um formato de como os dados devem chegar com o tipo e nome. esses tipos não são necessariamente os tipos e variáveis do banco de dados, esse é como os tipos tem que ser disponibilizados no Graphql, vai ter alguém que resolve isso ai. 

o ponto de exclamação "!" informa que o dado é obrigatório. sempre o id vai ser obrigatório.

E podemos ter uma rota que retorna um único usuário: 

```
type Query {
 users: [User!]
 user(id: ID!): User
}
```

Veja, crio a rota query user que recebe obrigatoriamente um id como parâmetro e ela retorna um User.

Criaremos mais uma rota:

```
type Mutation {
 createUser(name: String!, email: String!): User
}
```

Dessa vez criamos uma mutation que quando for chamado o `createUser` receberemos obrigatoriamente um name e email e ela retorna um User. Nesse caso vai ser criado um novo usuário com esses parâmetros e o mesmo vai ser retornado.

Pronto definimos uma regra, e agora quem vai implementar isso ai, quem resolve essa parada? Vamos ver mais pra frente.


Eu falei rotas para designar as queries e mutation mas o nome real e sem analogia ao Rest, é Schema, isso é uma schema do graphql. Vamos começar a aceitar o padrão que o graphql nos dá!

Agora no server.js temos uma propriedade `typeDefs que recebe o schema que criamos:

```
const { GraphQLServer } = require("graphql-yoga");
const path = require("path");

const server = new GraphQLServer({
 typeDefs: path.resolve(__dirname, "schema.graphql")
});

server.start();
```

Voltando para analogia, temos mais uma vez se o typeDefs ou o schema é a rota, falta o Controller, no graphql temos os resolvers que fazem o papel do controller.

Então vamos criar o resolver na pasta `src/resolvers.js`:

```
module.exports = {

 Query: {

 },

 Mutation: {

 }

}
```

Temos as queries e mutation então vamos criar um resolver para query e outro para mutation.

```
module.exports = {
 Query: {
  users: () => {},
  user: () => {}
 },

 Mutation: {
  createUser: () => {}
 }
};
```

Pronto, para cada query e mutation definido no schema temos que ter o resolver, o schema só declara o tipo e é usado para consulta, mas quem realiza a consulta de fato é o resolver, o resolver pode ser implementado de qualquer forma, pode buscar uma api, ou ir no banco de dados com postgres ou com mongodb, etc. E o legal que o schema só define o que o usuário quer, e o resolver que se resolva para trazer isso conforme o esquema descrito ou seja conforme as regras e tipos definidos no schema. Veja bem, o resolver pode buscar uma tonelada de dados, mas o que realmente importa e o que vai para o usuário é o que está definido no tipo (typeDef) ou seja no schema.graphql. Se eu retorno do resolver um dado a mais que não está definido no tipo o graphql não vai trazer para o usuário, inclusive esse é um erro comum na hora implementar o backend você colocar no resolver para trazer um dado, mas ele não aparece na tela e você vai ver que esqueceu de ter definido o campo no schema. Schema é a regra e a regra é clara, "se tá, tá se não tá não tá"! Bora voltar para o código.

Para testar vamos criar um array estático de usuários dentro de resolvers.js.

```
const users = [{
  id: 1,
  name: "Thiago",
  email: "tgmarinho@gmail.com"
 },
 {
  id: 2,
  name: "Diego",
  email: "diego@rocketseat.com"
 }
];

module.exports = {
 Query: {
  users: () => {},
  user: () => {}
 },

 Mutation: {
  createUser: () => {}
 }
};
```

E o mesmo formato de array é que estou usando no type User do schema.graphql.


E para testar na nossa query faremos:

```
Query: {
 users: () => users,
 user: () => users[0]
},

Mutation: {
 createUser: () => users[1];
}
```

Dessa forma quando a função users for chamada, ela retorna o array de users, e quando user for chamado vamos retornar o primeiro item do array, e quando chamar o createUser vamos só retornar um usuário pra ver se está funcionando. E vamos implementando devagar.

E pra testar só executar no terminal na raiz do projeto:

```
node src/server.js
```

Se não ocorreu nenhum erro é só ir no navegador.

Eu não defini a porta onde o servidor vai ser executado, mas nesse caso vai ser na porta padrão do servidor que estamos usando, é na porta 4000 então no navegador:

[http://localhost:4000/](http://localhost:4000/)

E o playground bonitão do Graphql Yoga vai ser exibido.

Só fazer as queries para pegar id, name  e email de todos os usuários, se não quiser pode tirar o email por exemplo.

```
query {
 users {
  id name email
 }
}
```

Para pegar o usuário com id:

```
{
 user(id: 1) {
  id name
 }
}
```

E também podemos chamas as mutations:

```
mutation {
  createUser(name: "Thiago", email: "tg@gmail.com"){
    id
    name
  }
}
```

Veja como é rápido e produtivo, muito mais rápido que testar com API Rest usando Insomnia.

Agora vamos incrementar mais, vamos começar a salvar no banco de dados, no nosso caso vamos usar o mongodb com o mongoose para facilitar mais ainda.

Eu já tenho uma banco de dados com mongo executando em container docker.

Só vou inicializar: docker start mongo

e instalar a dependência do mongoose:

```
yarn add mongoose
```

E vou conectar com o mongodb no arquivo server.js:

```
const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/graphqlnode", {
 useNewUrlParser: true
});

const server = new GraphQLServer({
 typeDefs: path.resolve(__dirname, "schema.graphql"),
 resolvers
});

server.start();
```

E agora vou criar o Schema do Mongoose para o User, então eu crio o arquivo src/User.js

```
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
 name: String,
 email: String
});

module.exports = mongoose.model("User", UserSchema);
```

E agora vou usar lá no resolver.js

```
const User = require("./User");

module.exports = {
 Query: {
  users: () => User.find(),
  user: (root, {
   id
  }) => User.findById(id)
 },

 Mutation: {
  createUser: (root, {
   name,
   email
  }) => User.create({
   name,
   email
  })
 }
};

```

Retirei o array, importei o Model de User e usei os métodos do mongoose para fazer as consultas e criar o usuário, aquele primeiro parâmetro root é o contexto do graphql, e o segundo parâmetro é o que vem dos parâmetros enviados nas queries e mutations que possuem parametros.

Simples assim, está pronto a API Graphql fornecendo para o frontend que seja os dados do usuário.

Pronto, agora só rodar o servidor e abrir o localhost para testar, se fizer a consulta vai retornar um array vazio pois não temos nada no banco de dados.

Só usar a mutation para criar os novos usuários no banco de dados e começar a fazer suas consultas.

Podemos criar queries named (consultas nomeadas):

```
query myNamedQuery {
 users {
  id name email
 }
}
mutation createNewUser {
 createUser(name: "Joao", email: "jo@gmail.com") {
  name id
 }
}
```


Código fonte: [https://github.com/tgmarinho/graphql-node-blog](https://github.com/tgmarinho/graphql-node-blog)
  

## Imagens do Graphqlcool rodando na minha máquina

* Observa a documentação e o schema que ele nos mostra

![](https://raw.githubusercontent.com/tgmarinho/graphql-node-blog/master/screenshots/graphql_print1.png)


![](https://raw.githubusercontent.com/tgmarinho/graphql-node-blog/master/screenshots/graphql_print2.png)



## Quer mais?!

* [http://graphql.org/](http://graphql.org/)

* [https://www.howtographql.com/](https://www.howtographql.com/)

* [https://relay.dev/](https://relay.dev/)

* [https://github.com/prisma-labs/graphql-yoga](https://github.com/prisma-labs/graphql-yoga)

* [https://www.howtographql.com/basics/1-graphql-is-the-better-rest/](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)


## Referência

* [O vídeo mais didático para explicar sobre Graphql com NodeJS por Diego Fernandes da Rocketseat que já assisti em pt-br](https://www.youtube.com/watch?v=oD8GqurXZ-0)


Obrigado!

