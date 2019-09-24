---
title: Introdução ao React
description: >-
  Como configurar o webpack, babel e os loaders do css e imagem, principais
  ciclos de vida do React
date: '2019-09-23 07:17:32'
image: /assets/img/logo-og.png
category: dev
background: '#EB7728'
---

## Introdução ao React

## Aula 1 - Conceitos do React

Vamos entender os principais conceitos de React!

### O que é React?

- É uma biblioteca para construção de interfaces;
- Foi construída com Javascript;
- Pode ser utilizado em interface de realidade virtual, mobile, web, isso é toda interface do usuário que rode com Javascript;
- Utilizado para construção de SPA (Single Page Applications), conceito de 2011 que veio junto com Angular. Agora com as SPA, o backend retorna JSON e o frontend controla as rotas e o consome o JSON. É uma página só, a página não recarrega o navegador, não faz refresh.
- Podemos chamar de framework?
	- O React se tornou um ecossistema, para mobile, web, desktop, ai sim é um framework.
- Tudo fica dentro do Javascript: o CSS, Imagens, fica no Javascript
- React / ReactJS / React Native
	- React = Biblioteca de construção de interfaces, que é usado tanto na web com React quanto no mobile com React Native
	- ReactJS = Comportamento do React no navegador, integração com React DOM
	- React Native = É a junção do React com a construção de interfaces nativas do Android e iOS.


Hello React:

```
import React from 'react';

import './button.css';
import icon from './button.png';

function Button() {
 return (
	 <button>
		 <img src={icon} />
	 <button>
 );
}
```

Isso é um código escrito com React.

Sempre tem que importar a lib React nos componentes da página.

Nesse código React  temos Javascript, CSS e Imagem.

JS: a function
CSS : o arquivo button.css
Imagem: button.png

Que lê tudo isso é o webpack e consegue embutir em um código javascript nativo e com o babel faz a tradução do código mais moderno para a versão que o navegador entende. 

Esse código não fica menos performático porque o webpack + babel fazem a otimização.

Esse código na verdade é um .JSX React com Javascript. Inclusive os elementos html no arquivo são na verdade do React.

#### Vantagens

- Organização do código
	- Componentização: Tudo é componente, e outros frameworks (angular, vue) copiaram a mesma solução. Pequenos trechos de códigos que serão reaproveitados, a divisão do componente acontece quando dividimos a lógica. Podemos entender um componente como uma lógica (JS), estilização(CSS) e estruturação(HTML), juntos formam um Componente que podem ser reutilizados ou simplesmente removido e a página funciona normalmente.
	- Divisão de responsabilidades:
		- Back-end: regra de negócio
		- front-end: interface
- Uma API e múltiplos clientes:
	- Podemos ter um backend com uma API REST, e um projeto web e outro mobile para consumir o mesmo backend. 
- Programação declarativa 
	- Programação imperativa: o programador descreve para o computador cada passo que se deve fazer.
	- Programação declarativa: Você informa qual resultado que você espera e ela se comporta de acordo com estado que a gente passa.

#### JSX
 - Escrever HTML dentro do Javascript;
 - Com react podemos criar nosso próprios elementos;
	
 Antes do JSX:

```
// ANTES
function Button() {
 return React.createElement(
	 'button',
	 { type: button },
	 React.createElement(
		 'span',
	 { class: 'icon' }
	 )
    )
}
<button type="button">
 <span class="icon"/><span>
</button>
```

Muito ruim, verboso...

E agora com JSX

```
// Com JSX
function Button() {
 return (
	 <button type="button">
		<span class="icon"></icon>
	 <button>
 );
}
```

Agora posso criar uma função Header e retornar um Button que contém toda a estrutura de um button. E o Button pode ser reaproveitado onde quisermos, assim como o Header.

```
// Nossos próprios elementos 
// (componentes)

function Header() {
 return <Button />
```

Tanto o Header e Button são componentes

#### Programação Imperativa x Programação Declarativa

Programação imperativa você dá os passos e as condições para algo acontecer.
Programação declarativa você dá as condições para algo acontecer.

#### IMPERATIVA

```
const notificacoes = 0;

function montaBadge(num) {
 if (notificacoes === 0 !& num > 0) {
 // Adiciona badge
 // container.appendChild(badge)..
 }

 if (notificacoes !== 0 !& num > 0) {
 // Apenas muda o número
 // badge.innerHTML = num...
 }

 if (notificacoes !== 0 !& num === 0) {
 // Remove badge
 // container.removeChild(badge)
 }
}
```

#### DECLARATIVA

```
!/ Não comparamos com o estado anterior
function Badge({ num }) {
 return (
	 <div id="container">
	   { num > 0 !& <div id="badge">{num}</div>}
	   <span class="icon"></span>
	 </div>
 );
} 
```

### Babel / Webpack
- O browser não entende o código React com imagens, css;
- O babel converte o código JS de uma forma que o browser entende;
- O webpack possui várias funções:
	- Ele cria o bundle, arquivo como todo o código da aplicação;
	- Ensina o Javascript como importar arquivos CSS, imagens e etc através dos loaders;
	- Live reload com webpack dev server: Toda vez que altera um código o browser atualiza com a nova versão do bundle.




## Aula 2 - Configurando estrutura

Criar um pasta chamada `intro-react` no seu workspace, e executar o comando `yarn init -y` para criar um `package.json` na raiz do projeto.

Criar uma pasta `src` que conterá o código javascript da aplicação frontend.

Criar um arquivo `index.js` na raiz do `src` que será o ponto de entrada da aplicação frontend.

### Instalando as libs do webpack, babel, react e react-dom

Em seguida instalar as bibliotecas como dependência de desenvolvimento: 

```
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
```

São libs que funcionam a integração do[webpack](https://webpack.js.org/) com [babeljs](https://babeljs.io/) e [reactjs](https://pt-br.reactjs.org/).

Instalar as bibliotecas:

```
yarn add react react-dom
```

### Configurando o Babel

Depois criar um arquivo na raiz do projeto: `babel-config.js` para fazer as configurações do babel.

```
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"]
};
```

`@babel/preset-env` = alterar as funcionalidades que o browser não entente para uma versão que ele entenda, por exemplo, import/export, arrow functions, classes, do javascript moderno que o browser ainda não entende. Essa lib altera para versão antiga do JS ES5.

`@babel/preset-react` = altera as funcionalidades do React que o browser não entende, por exemplo os JSX é convertido para arquivo JS.


### Configurando o Webpack

Criar na raiz do projeto um arquivo: `webpack.config.js`

`entry`: é o arquivo de entrada da aplicação.

`path.resolve(__dirname, "src", "index.js")`: Essa propriedade do `nodejs`, `resolve` as questões das barras para navegar entre diretórios, no windows é de um jeito no linux é de outro. então a função `resolve` trata isso pra gente.

`output`: é o local onde vai ser lançado o código transpirado pelo webpack, que é o que será colocado em produção e que o navegador entende. Ela recebe o path que é o local do arquivo e o filename  que é o nome do arquivo.

Podemos criar uma pasta `public` na raiz do projeto para receber o `bundle`.

```
 output: {
    path: path.resolve(__dirname, "public"),
    filename:  'bundle.js'
  }
```

Depois vamos configurar o module no webpack que armazena as regras (rules):

```
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
```

Declaramos uma regra por enquanto, para que test o arquivo, tem que ser .js ou seja um arquivo javascript na nossa aplicação, excluindo todo javascript que estiver na pasta node_modules por que elá já está com os arquivos transpilados, isso é responsabilidade do desenvolvedor da biblioteca. e Declaramos que iremos usar (use) um loader chamado babel-loader, o babel que lida com arquivos Javascript, tem outros loaders para lidar com imagem, css, etc, por enquanto vamos utilizar só esse,  e para funcionar vamos instalar como dependência de desenvolvedor:

```
yarn add babel-loader -D
```

E agora para testar a configuração, adicionamos um script no package.json para fazer o build da aplicação. Build é o ato do webpack transpilar o nosso projeto e colocar tudo no bundle.js na pasta public conforme configurandos mo webpack.config.js.

```
"scripts": {
    "build": "webpack --mode development"
  },
```

e agora só executar: 

```
yarn build
```

E o arquivo bundle.js será gerado, observe que no final temos o mesmo código escrito em javascript mais antigo que o browser suporta: 
```
var soma = function soma(a, b) {
  return a + b;
};
alert(soma(1, 3)); 
```

O código anterior, não se preocupe, mas é o que faz o import/export funcionar no navegador. Thanks webpack, babel! 

E agora vamos testar o bundle.js no navegador.

Criando o arquivo `index.html` na pasta `public`.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React JS</title>
</head>

<body>
    <h1>Hello World</h1>

    <script src="./bundle.js"></script>
</body>

</html>
```

e acessando o endereço no navegador:

```
/Users/SEU_USER_AQUI/Developer/workspace/intro-react/public/index.html
```

Recebemos um alerta com o valor da soma e é exibido um h1 com Hell World grandão.

### Live Reload

Para funcionar o live reload precisamos de uma biblioteca de desenvolvimento e algumas configurações:

```
yarn add webpack-dev-server -D
```

E no webpack.config.js, adicionamos: 

```
devServer: {
	contentBase: path.resolve(__dirname, "public")
},
```

E no package.json adicionamos mais um script: 

```
"scripts": {
   "build":  "webpack --mode development",	
   "dev": "webpack-dev-server --mode development"
  },
```

e executamos
```
yarn dev
```

E agora podemos ir no navegador e digitar na barra de endereço:

```
[http://localhost:8080/](http://localhost:8080/)
```
E vamos ter o projeto funcionando e se alteramos o código ele é atualizado e exibido na tela. Só alterar o Javascript novamente.

Um detalhe que 

```
"scripts": {
   "build":  "webpack --mode development",	
   "dev": "webpack-dev-server --mode development"
  },
```

esse --mode development gera um bundle que ainda dá para ler, se a gente muda essa propriedade para --mode production ele gera um bundle impossível de ler, deixando em uma única linha, minificado, de forma que o computador processa mais rápido, otimizando a performance.

```
"scripts": {
   "build":  "webpack --mode production",	
   "dev": "webpack-dev-server --mode development"
  },
```
 Resultado: 
 ```
 !function(e){var t={};function  r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof  Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return  Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){alert(11+3)}]);
```

Quando o código for para produção vamos enviar o bundle minificado, rodando o yarn build.


Fim: [https://github.com/tgmarinho/intro-react/tree/aula02-configurando-estrutura](https://github.com/tgmarinho/intro-react/tree/aula02-configurando-estrutura)


## Aula 03 - Criando Componente Raiz

Vamos criar um componente Raiz que é o pai de todo os componentes de dentro da aplicação com React.

Podemos utilizar o React pois configuramos no babel config o preset-react que converte o JSX (React) para o JS para o browser entender.

No `public/index.html` trocamos o elemento ```<h1>``` pela div que recebe o componente raiz:

```
<div  id="app"></div>
```

Criamos um componente App.js:

```
import React from "react";

function App(params) {
  return <h1>Hello Thiago Marinho</h1>;
}

export default App;
```

E no `index.js`, utilizamos o método `render` do React Dom para poder renderizar o Componente App dentro da div que contém o ID "app", com isso todo o html,  javascript, css e imagem que contém no JSX aparecerá nessa a partir dessa div: 

```
import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App />, document.getElementById("app"));
```


Fim: [https://github.com/tgmarinho/intro-react/tree/aula03-criando-componente-raiz](https://github.com/tgmarinho/intro-react/tree/aula03-criando-componente-raiz)


## Aula 4 - Importando CSS

Para importar o CSS de dentro do JSX, precisamos adicionar mais dois novos loaders no webpack.

```
yarn add style-loader css-loader -D
```

Adicionaremos mais uma regra no webpack.config.js:

```
{
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }]
}
```

* Style Loader: Serve para importar arquivos css,  ele pega o arquivo css, por exemplo App.css, e o conteúdo que está no App.css, para para dentro de um `<style>` no html.

* CSS Loader: server para importar outros arquivos que estão no CSS, por exemplo um `background: url('../imagem/bonita.jpg')`,  ele pega os recursos que estão declarados no CSS.

Agora criamos um arquivo css no projeto: `src/App.css`:

```
body {
  background: #7159c1;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
```

E por fim importamos ele no App.js:

```
import React from "react";
import "./App.css";

function App(params) {
  return <h1>Hello Thiago Marinho</h1>;
}

export default App;
```

E agora só rodar o projeto: yarn dev e conferir  o resultado, deve aparecer uma tela roxa com texto em branco.

Fim: [https://github.com/tgmarinho/intro-react/tree/aula04-importando-css](https://github.com/tgmarinho/intro-react/tree/aula04-importando-css)


## Aula 05 - Importando Imagens

Para importar o imagens de dentro do JSX, precisamos adicionar mais um  loader no webpack.

```
yarn add file-loader -D 
```

E adicionamos mais uma nova regra para poder carregar imagens que contenham .gif, png, jpeg ou jpg de forma maíscula ou mínuscula.

```
{
  test: /.*\.(gif|png|jpe?g)$/i,
  use: {
     loader: "file-loader"
       }
}
```

E por fim importamos a imagem e colocamos na tag `img`:

```
import React from "react";
import "./App.css";

import homeoffice from "./assets/images/homeoffice.png";

function App() {
  return <img src={homeoffice} />;
}

export default App;
```

Pronto, até agora, já estamos importando, CSS e imagens! =)

Fim: [https://github.com/tgmarinho/intro-react/tree/aula05-importando-imagens](https://github.com/tgmarinho/intro-react/tree/aula04-importando-imagens)


## Aula 06 - Class Components

Com React podemos escrever componentes utilizando classes, e é útil para poder definir estados e  adicionar métodos de gerenciamento de ciclo de vida que veremos mais pra frente.

Criamos uma pasta `src/components` e criamos o arquivo `TechList.js` dentro da nova pasta:
```
import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.JS", "ReactJS", "React Native"]
  };

  render() {
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
```

E utilizamos o novo componente no App.js:

```
import React from "react";
import "./App.css";

import TechList from "./components/TechList";

function App() {
  return <TechList />;
}

export default App;
```
Quando executar o yarn dev para rodar o projeto e abrir o navegador, você verá um erro no console, pedindo para adicionar um plugin no babel, isso ocorre porque no babel não tem suporte a essa nova sintaxe de adicionar o `state` dentro da classe se definir um `constructor`.

Precisamos adicionar um plugin do babel para poder adicionar componentes nas classes com uma sintaxe mais simplificada do React.

```
yarn add @babel/plugin-proposal-class-properties -D
```

E adiciono no `babel.config.js`:

```
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
```

E agora executando o projeto com yarn dev ele deve funcionar perfeitamente.

Fim: [https://github.com/tgmarinho/intro-react/tree/aula06-class-components](https://github.com/tgmarinho/intro-react/tree/aula06-class-components)


## Aula 07 - Estado e Imutabilidade

Vamos agora manipular a variável de estado, que declaramos na aula passada, que é a `techs` que tem um array de novas tecnologias.

Podemos percorrer o array e exibir na tela:
```
...
 render() {
    return (
      <ul>
        {this.state.techs.map(tech => (<li key={tech}>{tech}</li>))}
      </ul>
    );
  }
...
```

Toda vez que fazemos um map ou iteração de listas, precisamos passar um prop `key` em cada item da lista para remover o warning,  essa `key` tem que receber uma propriedade única, geralmente um ID deve ser passado.

Toda vez que o estado da aplicação muda, o método render é executado novamente.

E para atualizar o estado, precisamos utilizar um método: `setState`:

```
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };
```
E no input de texto, adicionamos:
```
 <input type="text"value={this.state.newTech} onChange={this.handleInputChange} />
```
a cada alteração no input, será executado o método handleInputChange que irá chamar o setState atualizando o valor do newTech, e com essa alteração de estado o método render(){..} é executado novamente.

```
  render() {
    return (
      <>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
      </>
    );
  }
```

Observação, coloquei a tag `<>` e `</>`que significa que é um Fragment, isto é, um fragmento de código, uma vez que adicionamos uma nova tag `input` no mesmo nível da `ul` e do `h1`, os componentes precisam um pai, elas não podem ficar "flutuando". E por isso colocamos um Fragment, poderia ser uma div, ou outro elemento que receber filhos, porém a vantagem de criar um Fragment que ele não coloca elemento visual na tela o que atrapalharia na estilização do projeto e a manutenção do html.

Agora precisamos passar o texto que está em `newTech` para o array de `techs`.

Todo estado no React é imutável, para adicionar um novo item no techs temos que recriar o array, copiando o estado atual e adicionar um novo, para remover é a mesma coisa.

```
import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.JS", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
```

*O estado do React é imutável, ele não se altera, ele é recriado.*



Fim: [https://github.com/tgmarinho/intro-react/tree/aula07-estado-e-imutabilidade](https://github.com/tgmarinho/intro-react/tree/aula07-estado-e-imutabilidade)



## Aula 08 - Removendo itens do estado

Para remover itens do estado, precisamos recriar um novo estado, para remover items do array, precisamos devolver um novo array sem o elemento que será deletado.

```
handleDelete  =  tech  => {
	this.setState({ techs:  this.state.techs.filter(t  => t !== tech) });
};
```

Dessa forma recebemos como parâmetro o id o elemento a ser deletado e percorro todos os elementos filtrando todos que não tem esse id, com isso o filter irá recriar um novo array para dentro de techs apenas com os itens que não tem no id informado.

```
import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.JS", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type="button">
                Remover
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
```
*Conceito de imutabilidade é justamente não atribuir diretamente um valor a propriedade de estado, mas sim recriar um novo valor para o estado, considerando o estado atual.*

Fim: [https://github.com/tgmarinho/intro-react/tree/aula08-removendo-itens-do-estado](https://github.com/tgmarinho/intro-react/tree/aula08-removendo-itens-do-estado)

## Aula 09 - Propriedades do React

Vamos ver o conceito mais importante do React, que são as props, props ou propriedades é tudo que passamos para dentro de um componente.

Legal falar que um Componente em React é uma função, e que essa função pode ou não receber parâmetros, e esses parâmetros no componente são as propriedades.

Criamos um novo componente: `src/components/TechItem`:
```
import React from "react";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

export default TechItem;
```

E utilizamos o novo componente no `TechList`:

```
import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.JS", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;

```

Algumas observações: O método de deleção de itens tem que ficar na classe onde está o estado, e o que podemos fazer é passar como referência a função para o TechItem só chamar.

A Key sempre fica no componente pai, raiz da iteração.


Fim: [https://github.com/tgmarinho/intro-react/tree/aula09-propriedades-do-react](https://github.com/tgmarinho/intro-react/tree/aula09-propriedades-do-react)


## Aula 10 - Default Props & PropTypes

As default props e prop-types ajudam o desenvolvedor não cometer erro de passar tipos inválidos para as propriedades, ou deixar de passar algum valor padrão não obrigatório para um componente ou seu elemento.

* Default Props:
Declarando dentro de classes:
```
static deaultProps = {
  newTech:  "Digite aqui a tech..."
};
```

Declarando em funções:
```
import React from "react";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};

export default TechItem;
```


* PropTypes:
	
	```
	yarn add prop-types
	```

Agora adicionar no código:

```
import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
```

Quando um prop é obrigatório passo isRequired, quando não é obrigatório, não informo o isRequired e tenho que declarar no defaultProps, e o browser sempre vai receber um alerta se alguma regra foi descumprida e podemos ajustar no código.

Fim: [https://github.com/tgmarinho/intro-react/tree/aula10-default-props-e-prop-types](https://github.com/tgmarinho/intro-react/tree/aula10-default-props-e-prop-types)

## Aula 11 - Ciclo de Vida do Componente

O react tem vários ciclos de vida.

Vamos detalhar os três principais mais utilizados aqui:

```
componentDidMount() { }
```
É executado assim que o componente aparece na tela, é recomendo utilizar esse método para buscar recursos de uma API externa para preencher o estado e exibir na tela.

```
componentDidUpdate(prevProps, prevState) {
// this.props, this.state
}
```

É executado sempre que houver alterações nas props ou estado, podemos acessar as props e state antigos.


```
componentWillUnmount() { }
```

É executado quando o componente deixa de existir.


Vamos ver na prática, precisamos salvar no localStorage o array de tecnologia, toda vez que o usuário adicionar ou remover uma tech. E o método que faz update toda vez que um estado altera é o `componentDidUpdate`, ou seja, o componente fez uma alteração.

```
// Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("@techs", JSON.stringify(this.state.techs));
    }
  }
```

Então, eu verifico se o array anterior é diferente do array atual, se for faz alguma coisa, nesse caso estou adicionando uma novo array de tech no localStorage, baseado no array atual.
Como eu não preciso utilizar o prevProps pois esse componente não recebe props, então eu ignore colocando um `_` no primeiro parâmetro da função.

Agora temos outro cenário, precisamos fazer com que o array de techs venha preenchido se tiver algum item salvo no localStorage quando o componente aparece na tela.

```
 // Executado assim que o componente aparece na tela
  componentDidMount() {
    const techs = localStorage.getItem("@techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
```

Agora eu pego as techs do localStorage, verifico se realmente veio alguma coisa, se sim, salvo no estado de `techs`. Se recarregar a página, pode verificar que o array de tech vai vir com o mesmo conteúdo que tem dentro do localStorage.


A função `componentWillUnmount` é utilizada muito pouco, mas um cenário seria, limpar um event listener. Imagina que você está usando um setTimeout dentro do componentDidMount e quando esse componente sair da tela, o setTimeout ainda continuará funcionando. Então o correto é utilizar o `componentWillUnmount` para limpar o event listener, no caso fazer um `clear` no `setTimeout`.


Os métodos mais utilizados são componentDidMount, depois componentDidUpdate e por fim componentWillUnmount, geralmente nessa sequência.

Fim: [https://github.com/tgmarinho/intro-react/tree/aula11-ciclo-de-vida-do-componente](https://github.com/tgmarinho/intro-react/tree/aula11-ciclo-de-vida-do-componente)

## Aula 11 - Debugando React com DevTools

Para debuggar a aplicação com React, é muito interessante utilizar a extensão do google: [react-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

Para utilizar, depois de instalar bastar clicar inspecionar elemento, e selecionar a aba React.

Ela vai mostrar todos os componentes, com estado, as propriedades. 

Isso é muito bom para ver o ciclo de vida do React.

Chegamos ao fim da introdução ao React.

Agora tem o [desafio](https://github.com/tgmarinho/faceseat) para fazer! Bora programar!
