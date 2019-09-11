---
title: Criando um projeto em NODE JS
description: >-
  Nesse post apresento alguns conceitos do Node, criação de servidor com
  express, conceito de middlewares, e mostro algumas ferramentas.
date: '2019-09-11 11:52:20'
image: /assets/img/nodejs.png
category: dev
background: '#EB7728'
---
## Criação do Servidor

Se estiver com [Yarn](https://www.tgmarinho.com/conceitos-do-node/) instalado na máquina.
Só rodar o comando no terminal, em uma pasta da sua workstation _(onde você deixa seus portfólios)_:

`❯ yarn init -y`

Depois disso o arquivo package.json será criado, nele contém as referências das dependências do projeto e scripts de inicialização que são executados com **npm** ou **yarn**.

Exemplo: `package.json`

```
{
	"name":  "modulo01",
	"version":  "1.0.0",
	"main":  "index.js",
	"license":  "MIT"
}
```

Para instalar novas dependências é só executar o comando de dentro da raiz do projeto, onde arquivo package.json está localizado. Vou instalar o express que é um micro framework para fazer o servidor.

`❯ yarn add express`

Exemplo: package.json com express instalado.

```
{
	"name":  "modulo01",
	"version":  "1.0.0",
	"main":  "index.js",
	"license":  "MIT",
	"dependencies": {
		"express":  "^4.17.1"
	}
}
```

Depois de executar o comando:  `yarn add express` então será baixado o express para a máquina e ficará dentro da pasta `node_modules` essa pasta é individual, e não deve ser _commitada_ para o `git por exemplo.

Como faz para ter as dependências em outras máquinas? Basta fazer o download (clone) do projeto e na raiz do projeto executar `yarn`, e com isso o yarn vai ler o `package.json` e baixar todas as dependências descritas na propriedade `dependencies`.

Depois, criar o arquivo `index.js`

e dentro dele colocar:

```
// importo o módulo do express
const express =  require("express");
// declaro uma porta para o servidor ouvir as requisições
process.PORT  =  3333;
// inicio o servidor express
const server =  express();
// declaro uma rota test que recebe uma requisição get e não retorna nada, apenas loga no servidor: "teste"
server.get("/test", () => {
	console.log("teste");
});
// Inicia o servidor ouvindo a porta 3333
server.listen(process.PORT, () => {
	console.log("executando o express na porta: "  +  process.PORT);
});
```

Para executar o script, só rodar o comando na raiz do projeto:

`❯ node index.js`

### Lidando com Rotas, Requisições e Respostas

o Servidor escuta recebe requisições e essa requisições são enviada para rotas, no meu caso, teste é uma rota, e ela recebe uma função com dois parâmetros, req, e res, req contém os dados da requisição, e res contém os dados da resposta que o servidor está enviando para o frontend. Estou retornando um JSON com um atributo message e o conteúdo da message.

```
server.get("/test", (req, res) => {
	return res.json({message: 'Oi, eu sou um App em Node'})
});
```

### Query & Route Params

Existem três tipos de parâmetros, dois deles no método GET e um no método POST.

_**Query params**_ recebe os dados da requisição como parâmetro na URL, pode conter 1 ou mais parâmetros.

_**Route params**_ recebe os dados da requisição na rota, é melhor forma para buscar algo por ID por exemplo.

Ambos mudam a forma de escrever, veja o código: 

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

### Utilizando o Insomnia

`Request Body é mais especial, pois ele é enviado via JSON, no corpo da requisição, aceita muitos dados e vem de forma mais sigilosa. Usado muito para os métodos: POST e PUT.

Precisamos de uma software para testar os métodos BODY e PUT enquanto não temos ainda o frontend desenvolvido.

Temos duas opções: [POSTMAN](https://www.getpostman.com/) e o [INSOMNIA](https://insomnia.rest/download/) eu tenho utilizado o [Insomnia](https://insomnia.rest/download/), por um gosto pessoal, é opensource e tem um layout muito bonito.

![](/assets/img/screen-shot-2019-09-10-at-12.12.27.png)

![](/assets/img/screen-shot-2019-09-10-at-12.15.59.png)

### Utilizando o Nodemon

[Nodemon](https://nodemon.io/) é um utilitário que monitora toda alteração no código e automaticamente reinicia o servidor. De forma que não precisamos ficar fechando a aplicação e iniciando novamente. Fica um processo mais divertido e automatizado.

`❯ yarn add nodemon -D`

Observe que `-D` significa que é uma dependência de desenvolvimento, isto é, não será utilizada e instalada no ambiente de produção. Quando um projeto está no ar(produção) não faz sentido ter essas dependências instaladas, até por que a aplicação no servidor geralmente não é reiniciada, mas esse é outro assunto.

Até o momento são essas as nossas dependências:

```
{
	"name":  "modulo01",
	"version":  "1.0.0",
	"main":  "index.js",
	"license":  "MIT",
	"dependencies": {
		"express":  "^4.17.1"
	},
	"devDependencies": {
		"nodemon":  "^1.19.2"
	}
}
```

Para executar o projeto podemos executar:

`❯ yarn nodemon index.js`

É mais recomendado fazer um script no `package.json`:

```
{
	"name":  "modulo01",
	"version":  "1.0.0",
	"main":  "index.js",
	"license":  "MIT",
	"scripts": {
		"dev":  "nodemon index.js"
	},
	"dependencies": {
		"express":  "^4.17.1"
	},
	"devDependencies": {
		"nodemon":  "^1.19.2"
	}
}
```

E com isso executar:

`❯ yarn dev`

E o Yarn irá rodar o comando que está dentro do `dev`. 

## CRUD

_**CRUD**_ (_Create Retrieve, Update, Delete_) é uma operação para Criar, Ler (um ou mais usuários), Atualizar e Deletar usuários.

### Criar

Antes de criar a rota, precisamos definir que o servidor irá usar o plugin `json` para receber no corpo da **requisição**, sem isso, você receberá um erro de _status code_ 500.

`server.use(express.json());`

Ai sim, agora podemos escrever o código da rota. Essa rota vai receber `Request Body`, ou seja, receber os dados do usuário no corpo da requisição, e vai ser em formato `JSON`, por isso usamos o plugin json do `express` na instância do servidor que está na variável `server` . Observe que agora estamos usando o método POST no servidor, então no Insomnia deve ser utilizado o POST para enviar dados e 

```
server.post("/users", (req, res) => {
	// Pega a variável nome no corpo da requisição
	const { name } = req.body;
	// Adiciona o usuário no final do array
	users.push(name);
	// Retorna todos usuários, inclusive o novo usuário
	return res.json(users);
});
```

![](/assets/img/screen-shot-2019-09-11-at-09.21.40.png)

Observe que o retorno já trás o novo usuário criado.

### Ler

Para listar todos os usuários podemos criar uma rota:

```
server.get("/users", (req, res) => {
	return res.json(users);
});
```

Quando executar a rota: `http://localhost:3333/users` vai retornar um o array de usuários:

```
[
  "Thiago",
  "Delacyr",
  "Filipe",
  "Pedro",
]
```

### Editar

Para alterar o usuário pode ser via método PUT ou POST, mas o mais indicado é PUT.
A rota users agora recebe um parâmetro: `http://localhost:3333/users/2` que pode ser o ID do usuário, no nosso caso é o index(posição) do nome no array de usuários.

```
server.put("/users/:index", (req, res) => {
	// Pego número informado no parametro da rota
	const { index } = req.params;
	// Pego os dados da requisição
	const { name } = req.body;
	// altero o nome do usuário na posição do valor do index
	users[index] = name;
	// retorno todos os usuários, já com a alteração do nome
	return res.json(users);
});
```

![](/assets/img/screen-shot-2019-09-11-at-09.30.18.png)

### Deletar

Para deletar o usuário precisa usar o método DELETE e passar na rota o parâmetro, no nosso caso o index da posição do nome do usuário no array. Com essa informação iremos utilizar a função [splice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) do Javascript para manipular o array de usuários.

```
server.delete("/users/:index", (req, res) => {
	// Pego número informado no parametro da rota
	const { index } = req.params;
	// Removo o elemento do array
	users.splice(index, 1);
return res.json(users);
});
```

Perceba que na imagem ele já retorna o array com o usuário deletado.

![](/assets/img/screen-shot-2019-09-11-at-10.14.50.png)

Mas geralmente não precisa retornar uma lista, você remove o usuário e envia um sucesso ou falha, mas para simplificar vou enviar só um sucesso:

```
return res.json({ message:  "Deletado com sucesso" });
```

## Middleware

[Middleware](https://expressjs.com/pt-br/guide/using-middleware.html) é a base da aplicação Express. Pode ser chamado de interceptador.

Middleware é uma função que recebe \`req\` e `res como parâmetros, pode receber outros parâmetros também, ou seja, toda a função que passamos para as rotas, são middlewares.

Ele manipula as variáves \`res\` e \`req\`, ou seja a requisição e resposta. Ele intercepta toda requisição.

Tem várias maneiras de utilizar os middlewares, podemos ter um middleware global.

```
// oi eu sou um middleware
((req, res) => {
	return res.json(users);
});
```

Agora vou mostrar um middleware global, que a cada requisição ele loga uma mensagem no terminal, observe o parâmetro `next`, ele é uma função que é chamada no final, que faz com que termine a execução do middleware e permite seguir o fluxo da aplicação:

```
// Middleware global
server.use((req, res, next) => {
	console.log("A requisição foi chamada");
	// faz com que siga o fluxo da aplicação
	// Se não tiver o next(), o app vai ficar travado nessa função
	next();
});
```

Middleware pode ser criado para fazer um Logging de cada rota, para isso criamos um middleware global, no topo da aplicação e para cada chamada nas rotas, passa pelo middleware interceptador.

```
server.use((req, res, next) => {
	console.log(`Método: ${req.method}
				na URL:  ${req.url}`);
	next();
});
```

Console no servidor:

```
executando o express na porta: 3333
A requisição foi chamada
Método: GET na URL: /users 
A requisição foi chamada
Método: DELETE na URL: /users/1 
A requisição foi chamada
Método: GET na URL: /users/2 
A requisição foi chamada
Método: POST na URL: /users 
A requisição foi chamada
Método: PUT na URL: /users/2 
```

Observe que à cada rota que chamei através do Insomnia ou acessando a url no navegador, ele entrou no Middleware e disparou a mensagem no console, informando o método e url utilizada na requisição.

#### Middleware Local

São utilizados apenas na rota, anteriormente definimos um middleware global, a cada requisição em qualquer rota, o middleware era executado, agora queremos que em uma determinada rota, execute um middleware local.

A função que recebe o Método e a função de requisição, pode receber vários middlewares.

Criando um middleware local que verifica se o usuário existe:

```
function  checkUserExists(req, res, next) {
	// o atributo name é obrigatório, se não tiver envio um Bad Request no status code com uma mensagem.
	if (!req.body.name) {
	return res.status(400).json({ error:  "Name is required!" });
}
	return  next();
}
```

Criado o Middleware, agora é só invocá-lo nas funções que cria  e edita usuário.

```
server.post("/users", checkUserExists, (req, res) => {
	const { name } = req.body;
	users.push(name);
	return res.json(users);
});

server.put("/users/:index", checkUserExists, (req, res) => {
	const { index } = req.params;
	const { name } = req.body;
	users[index] = name;
	return res.json(users);
});
```

![](/assets/img/screen-shot-2019-09-11-at-11.09.31.png)

Falei que a função na rota, pode receber vários middlewares, então vamos fazer mais um, dessa vez ele irá checar se usuário informado na rota existe no array, caso contrário informa uma mensagem de erro, isso é bom porque evita que a requisição continue se não tiver usuário presente, evita até mesmo algum erro na aplicação:

```
// Middleware Local específico
function checkUserInArray(req, res, next) {
	if (!users[req.params.index]) {
	return res.status(400).json({ error:  "User does not exists!" });
	}
	return  next();
}
```

E agora podemos aplicar em todas as rotas que utilizam o parâmetro index, observe que o put agora vai ter dois middlewares.

```
// Lista usuário de index = ao que foi passado na rota
server.get("/users/:index", checkUserInArray, (req, res) => {
	const { index } = req.params;
	return res.json(users[index]);
});

// Editar
server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
	const { index } = req.params;
	const { name } = req.body;
	users[index] = name;
	return res.json(users);
});
// Deletar
server.delete("/users/:index", checkUserInArray, (req, res) => {
	const { index } = req.params;
	users.splice(index, 1);
	return res.json({ message:  "Deletado com sucesso" });
});
```

Os middlewares também podem alterar as variáveis \`req\` e \`res, mas especificamente a \`res`. Isso é bem útil para salvar algum dado que pode ser utilizado posteriormente nas requisições, como um token, os dados do usuário, etc.

Por exemplo, agora vou alterar o middleware \`checkUserInArray\`, para que coloca o user na req.

```
// Middleware Local específico
function checkUserInArray(req, res, next) {
	const user = users[req.params.index];
	if (!user) {
		return res.status(400).json({ error:  "User does not exists!" });
	}

	req.user = user;

	return  next();
}
```

E agora com isso podemos usar, alterando o método que pega o usuário pelo index:

```
server.get("/users/:index", checkUserInArray, (req, res) => {
	return res.json(req.user);
});
```

Como o middleware é executado antes, nessa função acima, posso acessar a variável user de dentro da req. Mantém o mesmo comportamento e diminui um pouco de código. Legal né!

![](/assets/img/screen-shot-2019-09-11-at-11.18.15.png)

## Debugando a aplicação

Espero fazer um vídeo mostrando, mas tem o [link oficial aqui](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_access-loaded-scripts).



Chegamos ao final de mais um artigo, espero que tenha curtido, eu aprendi muito, qualquer dúvida deixe nos comentários.

### _****_[_**Clique aqui para acessar o código completo.**_](https://github.com/tgmarinho/node_basico)_****_
