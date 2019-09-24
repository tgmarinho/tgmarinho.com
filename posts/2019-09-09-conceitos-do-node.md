---
title: Conceitos do Node
description: >-
  Apresento o ambiente, conceitos e características do Node, NPM, Yarn, Event
  Loop, Call Stack e muito mais
date: '2019-09-10 06:21:00'
image: /assets/img/nodejs.png
category: dev
background: '#EB7728'
---
# Ambientes e conceitos

## Node

A maneira mais recomendada é usar o [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) para os sistemas Unix (Linux e MacOS). Com ele é possível gerenciar várias versões do Node na mesma máquina.

Depois de instalado o nvm, para instalar um versão do node:

`❯  nvm install 10.16.3`

Deixando a versão como padrão:

`❯  nvm alias default 10.16.3`

Com Node já vem o NPM (Gerenciador de pacotes do Node)
`❯  node -v`
`❯  npm -v`

## Yarn (Gerenciador de pacotes de terceiros)

[Yarn](https://yarnpkg.com/lang/en/) tem o mesmo propósito que o NPM, porém ele é mais performático, serve para baixar pacotes(bibliotecas de terceiros) que estão publicado no [npmjs.com](https://www.npmjs.com).

Instalação recomendada para MacOS:

```
❯ brew install yarn --without-node
```

Isso porque eu já tenho o node na máquina.

## Conceitos do NodeJS

### O que é Node.js?

* Javascript no **backend** \o/
  		- Integração com banco de dados, pagamentos, código de regra de negócio;
  		- Não lidamos com eventos do usuário final no NodeJS:
  			- Aqui **NÃO** é feita a manipulação do _html_, _css_, quem faz isso é o frontend.
  		- Rotas e integrações: 
  			- O que pode ser feito é o frontend chamar uma rota que é enviada para o servidor e o mesmo dispara para um porta que está executando a aplicação, a aplicação ouve essa requisição verifica na rota no servidor node qual é a rota e se tem a rota a qual foi chamada se sim, executa o código de negócio e retorna alguma coisa para o frontend, se não tiver a rota no backend o frontend recebe uma mensagem de erro, o qual ele deve passar de forma amigável para o usuário;
  		- Node não é uma linguagem, ele é uma plataforma de desenvolvimento
  		- Node foi construído em cima da [engine V8](https://v8.dev/). V8 é o motor  do chrome, é um código que interpreta o JS para navegador, e a mesma estrutura e conceito foi usado para construir o Node para rodar no Sistema Operacional. O que faz o Node ser muito adotado é que você pode escrever um código JS que pode rodar no Frontend no Backend, salvo algumas API's que são específicas para cada.
  		- Node é comparavél ao PHP/Ruby/Pyton/GO
  			- Node tem algumas diferenças e vantagens em relação a essas e outras linguagem backend.

### O que é o NPM?

* NPM permite que **instalemos** bibliotecas de terceiros, qualquer um pode escrever uma lib, e **publicar** no site do [npmjs](https://www.npmjs.com/), para que outros possam utilizar. Isto é você pode instalar e também fornecer libs.
* Por que utilizar o **Yarn**?
  	- é muito mais rápido e está avançando com novas funcionalidades mais rápido que o npm, por exemplo: [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) que serve para trabalhar com múltiplos projetos que tem as mesmas dependências sem precisar duplicá-las. Ver conceito de **monorepo**.
* NPM é comparado ao 
  		- Composer do PHP;
  		- Gems do Ruby;
  		- PIP do Pyton; 
  		- Maven do Java; e por ai vai;

### Características do Node

* Arquitetura [Event-loop](https://imasters.com.br/front-end/node-js-o-que-e-esse-event-loop-afinal)
  		- Baseada em eventos(Rotas na maioria das vezes);
  		- Call Stack (ponto central da arquitetura):
  			- Pilha de eventos, um evento pode ser como  uma função sendo disparada pelo nosso código o qual é processado pelo Node de dentro de um loop que verifica se tem um novo código para ser processado. Então, todo nosso código é executado de dentro da Call Stack, cada código entra na stack e é executado no processo do event loop.
  		- Node é single-thread;
  			- Independente da máquina tiver vários núcleos no processador, o código em node é executado em apenas um (diferentemente no Java, etc).
  			- O Node usa o [libuv](https://github.com/libuv/libuv) do C++ e com isso faz com que o Node fique mais rapido pois essa _libuv_ em baixo dos panos permite que os processos da Call Stack seja executadas em threads no processador. Isto é o C++ sim pode fazer isso o NodeJS não. Ou seja, multithread acontece com um sistema em Node
  			- [Non-blocking I/O](https://pt.stackoverflow.com/questions/185666/o-que-%C3%A9-non-blocking-i-o), input e output não bloqueante, isto significa que o Node pode receber requisições a qualquer momento, inclusive quando está processando alguma, isso facilita o desenvolvimento de aplicações em Real time, no momento que o frontend chama o backend, a conexão fica aberta para ambos estarem conversando. É uma implementação mais simples de ser fazer com Node, em outras linguagens que não possuem essa arquitetura fica mais complexo fazer chats, etc.

![](/assets/img/call_stack_node.png)

A última função for chamada mais tarde, será a primeira executada, então a call stack recebe várias funções e a primeira a ser executada no event loop é a que entrou por último.

### Exemplos de Frameworks

* Express como base:
  		 - Sem opinião: Ele é muito flexível, não tem estrutura fechada, você pode estruturar como quiser
  		 - Ele é um microframework, com pouca coisa já pode fazer uma API
  		 - Micro-serviços: Com express fica mais fácil construir vários serviços da aplicação.
* Frameworks opinados:
  			- AdonisJS: Tem uma documentação muito boa, ele já tem um arquitetura e plugins disponíveis, segue a arquitetura MVC;
  			- NestJS: Novo no mercado, mas está crescendo.

## Conceitos de API Rest

### Como funciona?

* Fluxo de requisição e resposta do servidor:
  		- Requisição feita por um cliente: 
  			- Browser (frontend)  faz uma requisição (via ajax) ao servidor no backend;
  			- Aguarda uma resposta do servidor;
  		- Resposta retornada através de uma estrutura da de dados:
  			- Servidor recebe a requisição, processa e envia um objeto ou um array de dados para o cliente que fez a requisição.
  		- Cliente recebe a resposta e processa o resultado
  			- Cliente manipula o array, exibindo as informações de forma amigável.

OBS: Diferente de uma outra aplicação, que recebe uma requisição e envia o próprio html com os dados, com REST vc recebe um JSON como resposta e o frontend manipula os dados.

* Métodos HTTP são os mesmo no conceito Rest:


```
 - GET http://minhapi.com/users
 - POST http://minhapi.com/users
 - PUT http://minhapi.com/users/1
 - DELETE http://minhapi.com/users/1
```

Métodos:
**GET**: Busca uma informação, por receber nenhum, 1 ou vários resultados;
**POST**: Envia informações de forma sigilosa, os dados não aparecem na url, a melhor forma para submeter um formulário;
**PUT**: atualiza uma informação, um atributo do usuário por exemplo: status: ativo/inativo; sexo: masculino/feminino;
**DELETE**: para deletar um registro do banco de dados, um usuário por exemplo.

Método HTTP, Recurso/Rota

### Benefícios de uma API Rest

* Múltiplos clientes(frontends), com o mesmo backend
  		- Pode ter um site, um aplicativo mobile e um desktop acessando a mesma API.
* Protocolo de comunicação padronizado:
  		- Mesma estrutura para web / mobile / API pública;
  			- O retorno é sempre um **JSON**, que toda aplicação, toda linguagem de programação utiliza para se comunicar entre backend/frontend.
  		- Comunicação com serviços externos

### JSON

* estrutura:


```
{  
	"user":{  
		"name":"Thiago Marinho",  
		"email":"tgmarinho@gmail.com",  
		"tech":["ReactJS", "NodeJS", "React Native"],  
		"company":{  
			"name":"Freelancer",  
			"url":"https:www.tgmarinho.com"  
			}
		}  
}
```

**JSON** pode ter, data em formato de string, Strings, Arrays, Números, Objetos. Tudo fica mais fácil de trabalhar ainda mais com Javascript.

### Conteúdo da requisição

`GET http://api.com/company/1/users?page=2`

Route: company
Route Params: 1
Query Params: ?page=2

o método **GET** recebe a requisição na própria URL, como pode ser visto, a rota, a rota com parâmetros e os parâmetros de consulta.

`POST http://api.com/company/1/users`

O método **POST** recebe o dados da requisição no **body** (Apenas POST/PUT), no formato JSON.

```
{  
	"user":{  
		"name":"Thiago Marinho",  
		"email":"tgmarinho@gmail.com",  
		"tech":["ReactJS", "NodeJS", "React Native"],  
}
```

O body não fica visível na URL. 

* **Headers**: São dados adicionais: usado para enviar Locale, Token, usuário logado.

### HTTPS Codes

Código de três dígitos numéricos que informa o status da requisição:

Quando inicia com:

* 1xx: informational
* 2xx: Sucesso
  		- 200: SUCCESS
  		- 201: CREATED
* 3xx: Redirection
  		- 301: Moved Permanently
  		- 302: Moved
* 4xx: Client Error
  		- 400: Bad Request
  		- 401: Unauthorized
  		- 404: Not Found
* 5xx: Server Error
  		- 500: Internal Server Error

Agora é só codar! Próximo post terá conceitos mais técnicos.

_**Show me the code!**_
