---
title: Conceitos do Node
description: >-
  Apresento o ambiente, conceitos e características do Node, NPM, Yarm, Event
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
- Javascript no **backend** \o/
	- Integração com banco de dados, pagamentos, código de regra de negócio;
	- Não lidamos com eventos do usuário final no NodeJ:
		- Aqui **NÃO** é feita a manipulação do *html*, *css*, quem faz isso é o frontend.
	- Rotas e integrações: 
		- O que pode ser feito é o frontend chamar uma rota que é enviada para o servidor e o mesmo dispara para um porta que está executando a aplicação, a aplicação ouve essa requisição verifica na rota no servidor node qual é a rota e se tem a rota a qual foi chamada se sim, executa o código de negócio e retorna alguma coisa para o frontend, se não tiver a rota no backend o frontend recebe uma mensagem de erro, o qual ele deve passar de forma amigável para o usuário;
	- Node não é uma linguagem, ele é uma plataforma de desenvolvimento
	- Node foi construído em cima da [engine V8](https://v8.dev/). V8 é o motor  do chrome, é um código que interpreta o JS para navegador, e a mesma estrutura e conceito foi usado para construir o Node para rodar no Sistema Operacional. O que faz o Node ser muito adotado é que você pode escrever um código JS que pode rodar no Frontend no Backend, salvo algumas API's que são específicas para cada.
	- Node é comparavél ao PHP/Ruby/Pyton/GO
		- Node tem algumas diferenças e vantagens em relação a essas e outras linguagem backend.

### O que é o NPM?
- NPM permite que **instalemos** bibliotecas de terceiros, qualquer um pode escrever uma lib, e **publicar** no site do [npmjs](https://www.npmjs.com/), para que outros possam utilizar. Isto é você pode instalar e também fornecer libs.
- Por que utilizar o **Yarn**?
	- é muito mais rápido e está avançando com novas funcionalidades mais rápido que o npm, por exemplo: [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) que serve para trabalhar com multiplos projetos que tem as mesmas dependencias sem precisar duplicá-las. Ver conceito de **monorepo**.
- NPM é comparado ao 
	- Composer do PHP;
	- Gems do Ruby;
	- PIP do Pyton; 
	- Maven do Java; e por ai vai;

### Características do Node
- Arquitetura [Event-loop](https://imasters.com.br/front-end/node-js-o-que-e-esse-event-loop-afinal)
	- Baseada em eventos(Rotas na mairoia das vezes);
	- Call Stack (ponto central da arquitetura):
		- Pilha de eventos, um evento pode ser como  uma função sendo disparada pelo nosso código o qual é processado pelo Node de dentro de um loop que verifica se tem um novo código para ser processado. Então, todo nosso código é executado de dentro da Call Stack, cada código entra na stack e é executado no processo do event loop.
	- Node é single-thread;
		- Independente da máquina tiver vários núcleos no processador, o código em node é executado em apenas um (diferentemente no Java, etc).
		- O Node usa o libuv do C++ e com isso faz com que o Node fique mais rapido pois essa libuv em baixo dos panos permite que os processos da Call Stack seja executadas em threads no processador. Isto é o C++ sim pode fazer isso o NodeJS não.
