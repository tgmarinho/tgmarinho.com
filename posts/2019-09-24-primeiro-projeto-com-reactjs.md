---
title: Primeiro Projeto com ReactJS
description: >-
  Vamos criar uma aplicação com React e Styled Components que busca o
  repositório no github e salva no localStorage e podemos ver as Issues no
  github.
date: '2019-09-24 04:24:40'
image: /assets/img/logo-og.png
category: dev
background: '#EB7728'
---

## Aula 01 - Criando projeto do zero

Para criar um projeto não precisamos configurar na mão o webpack, babel, etc, temos um boilerplate muito legal chamado Create React App.

Para utilizar podemos executar no terminal:

```
yarn create react-app nome-do-projeto
```

Estou chamando meu projeto de `fron-react` (Frontend com react)

o CRA irá criar toda a estrura que precisamos sem termos que configurar nada.

Toda configuração fica no `react-scripts` que pode ser localizado no `package.json` a referência para a configuração.

Eu vou deletar a configuração do eslint padrão pois irei configurar por conta.

Deletar essa configuração:
```
"eslintConfig": {
	"extends":  "react-app"
},
```

Para executar a aplicação, basta rodar:

```
yarn start
```

Legal que o webpack-server-dev já vem configurado também! =)

O projeto vem com alguns arquivos por padrão inclusive com arquivos para fazer o PWA funcionar, eu vou excluir alguns arquivos e você pode verificar pelo commit.

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula01-criando-projeto-do-zero](https://github.com/tgmarinho/front-react/tree/aula01-criando-projeto-do-zero)


## Aula 02 - ESLint, Prettier e EditorConfig

Vamos configurar as ferramentas ESLint, Prettier e EditorConfig para manter uma *style guide* no projeto.

### Editor Config

Primeiro vamos configurar o EditorConfig, usando o VSCode e a extensão do EditorConfig basta clicar com botão direito do mouse e escolher: `generate .editorConfig`, e o VSCode vai criar um arquivo para nós.

E faço uma pequena alteração.

```
root = true

[*]
end_of_line = lf # forçar o padrão do final da linha para padrão unix
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true # mudo para  true
insert_final_newline = true # mudo para true

```

### Eslint

Vamos instalar o eslint como dependência de desenvolvimento:

```
yarn add eslint -D
```

e executar:

```
yarn eslint --init
```

Opções:

```
❯ To check syntax, find problems, and enforce code style 

❯ JavaScript modules (import/export) 

❯ React

❯ Typscript -> Não

❯ Browser

❯ Use a popular style guide 

❯ Airbnb (https://github.com/airbnb/javascript) 

❯ JavaScript

❯ Y
```

e as dependências serão instaladas.

O Eslint usa o npm por padrão, então depois de baixar as dependências, eu removo o arquivo `package.json-lock` e rodo o comando `yarn` novamente para atualizar as dependências no `yarn.lock`.

Pronto, agora o código vai acusar alguns erros, e para concluir a configuração vamos instalar o Prettier.

### Prettier

Para instalar o prettier e alguns plugins de configuração, vamos rodar no terminal:

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

E agora configuraremos o `.eslintrc`:

```
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', 'js'] }],
    'import/prefer-default-export': 'off',
  },
};
```

E depois criamos um arquivo `.prettierrc` na raiz do projeto, com a seguinte configuração:

```
{
	"singleQuote":  true,
	"trailingComma":  "es5"
}
```

Isso melhora a integração do prettier com a style guid airbnb que estamos utilizando.

Pronto! Agora o prettier deixa o código mais bonita e o eslint procura por erros na style-guide.

Agora toda vez que entrar em um arquivo e salvar, ele vai verificar se as regras estão de acordo com o style-guide através do eslint e o prettier irá formatar de acordo com as regras do style-guide e eslint.

Podemos automatizar isso fazendo um script no package.json:

```
"lint":  "eslint --fix src --ext .js"
```

e agora rodar o comando:

```
yarn lint
```

Para deixar o código seguindo as normas da style-guide.

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula02-eslint-prettier-editorconfig](https://github.com/tgmarinho/front-react/tree/aula02-eslint-prettier-editorconfig)


## Aula 03 - Roteamento no React

Estamos criando um SPA, e as nossas páginas terão uma navegação, porém não teremos um refresh na tela quando mudarmos de página, isso será instantâneo, o usuário chama outra rota, muda a página, faz requisição no servidor e página é exibida e a tela nem pisca!

E para fazer esse gerenciamento de rotas no frontend da aplicação vamos utilizar a biblioteca [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start):

```
yarn add react-router-dom
```

E agora podemos criar um arquivo `routes.js` na pasta `src`.

Criamos também uma pasta `pages` que conterá a pasta `Main` com um arquivo chamando  `index.js`. E outra pasta `Repository` com um arquivo chamado `index.js`.

O conteúdo do arquivo vai estar no link do github.

Dentro do routes.js vamos importar o BrowserRouter da lib react-router-dom, 
BrowserRouter é responsável por permitir criar uma navegação entre rotas e atualizar a barra de endereços.

** BrowserRouter **: Deve englobar todas as rotas

o ** Switch ** é usado para controlar que apenas uma rota seja chamada por momento.

No ** react-router-dom  ** é possível chamar mais de uma rota pro vez.

** Route ** é a cada rota da aplicação.

** Route ** recebe um caminho (path) e o componente (Component).

OBS: Toda vez eu estiver utilizando uma sintaxe de jsx temos que importar o react.

```
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

```

Até aqui criamos um componente Routes que será importado no `App.js`, ele retorna um BrowserRouter que engloba todas as routas para fazer o gerenciamento das rotas na barra de endereço no navegador, e ele tem um filho Switch que é responsável por executar apenas uma rota por vez e dentro dele tem uma ou mais rotas, que são as Route que recebe um path e o seus respectivo Component.

Agora só importar a routa no App.js:

```
import React from 'react';

import Routes from './routes';

function App() {
  return <Routes />;
}

export default App;
```

Testando a aplicação vamos observer um comportamento não esperado.

Só conseguimos acessar a rota / que redireciona para o componente Main.

Quando tentamos acessar /repository é redirecionado para o componente Main, também!

Isso ocorre porque o react-router-dom não vê se o path é igual ao path da routa, mas ele  verifica o começo, se começa com '/' ele já envia para a primeira rota que tenha o '/'. E como ambas tem o '/' e a primeira rota leva para a Main, então sempre a aplicação será redirecionada para a Main.

Para verificar por igualdade nas rotas, basta usar a propriedade `exact`.

```
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
```

Agora sim as duas páginas estão sendo renderizadas! 

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula03-roteamento-no-react](https://github.com/tgmarinho/front-react/tree/aula03-roteamento-no-react)


## Aula 04 - Styled Components

Vamos instalar uma biblioteca muito boa para estilizar a aplicação com React.

```
yarn add styled-components
```

Ela muda a forma de escrever o CSS no React e no React Native.

Agora não usaremos as propriedades style e nem className, o próprio componente será estilizado.

No VSCode tem a extensão do styled-components que é ajuda muito a desenvolver pois ele entende a sintax css de dentro do js.

O código é escrito com JS e também usamos a sintaxe CSS.

Legal que o styled-components permite o encadeamento de CSS também. E o estilo não é global, é apenas aplicado para o componente.

Podemos também acessar as propriedades dos componentes no CSS.

Criamos o arquivo `styles.js`  na pasta `Main`.
```
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ error }) => (error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`;
```
Agora criaremos componentes estilizados.

Vamos aplicar no Main/index.js:

```
import React from 'react';

import { Title } from './styles';

const Main = () => (
  <Title error>
    Main
    <small>menor</small>
  </Title>
);

export default Main;
```

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula04-styled-components](https://github.com/tgmarinho/front-react/tree/aula04-styled-components)


## Aula 05 - Estilos Globais

Sabendo que o estilo de cada componente é local, no  styled componentes temos uma funcionaliade muito legal que são os estilos globais, onde podemos aplicar para todo o restado aplicação.

Para isso eu crio uma pasta styles com o arquivo global.js dentro da nova pasta.

```
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100%;
}

body {
  background: #7159c1;
  -webkit-font-smoothing: antialiased !important;
}

`;
```

importo a função createGlobalStyle do styledcomponents e passo a configuração CSS de reset e estilos globais e exporto essa função para ser usada no componente pai do projeto.

E agora uso no App.js:

```
import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/globals';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
```

Pronto, agora a aplicação já recebe a estilização global.



Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula05-estilos-globais](https://github.com/tgmarinho/front-react/tree/aula05-estilos-globais)

## Aula 06 - Estilizando a página Main

Vamos começar a estilizar a página principal da aplicação. A Main.js

Vamos nos conectar na API Rest do Github para consumir os repositórios do usuário, salvando com localstorage e podermos ver algumas informações sobre o repo.

Instalamos a lib de ícons do React:

```
yarn add react-icons
```

styles.js:

```
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
```

Main.js:

```
import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

const Main = () => (
  <Container>
    <h1>
      <FaGithubAlt />
      Repositórios
    </h1>

    <Form onSubmit={() => {}}>
      <input type="text" placeholder="Adicionar repositório" />

      <SubmitButton>
        <FaPlus color="#FFF" size={14} />
      </SubmitButton>
    </Form>
  </Container>
);

export default Main;
```
Detalhe que no styled-components não precisamos passar os atributos básicos dos componentes diretamente no componente, podemos colocar direto na estilização:

Não precisamos fazer: 

```
<SubmitButton type="submit">
```
Mas podemos fazer assim: 
```
...
 <SubmitButton>
   <FaPlus color="#FFF" size={14} />
 </SubmitButton>
...

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
...
```

O que deixa o componete mais limpo. E mais pra frente veremos que isso fica mais clean ainda pois teremos componentes principalmente no RN que tem muita propriedades, por exemplo, as FlatLists e TouchableOpacitys.

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula06-estilizando-pagina-main](https://github.com/tgmarinho/front-react/tree/aula06-estilizando-pagina-main)


## Aula 07 - Adicionando repositórios

Quando o usuário digitar o nome de usuário valido, vamos buscar o repostório e salvar no estado.

Instalamos a lib axios para fazer requisição a API externa.

```
yarn add axios
```
E agora podemos configurar um baseURL para fazer requisições passando apenas a rota e os paramêtros de consulta da API.

Crio a pasta `services` dentro da `src` e o arquivo `api.js` dentro da nova pasta, com o conteúdo.

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
```

E no método handleSubmit da Main.js, quando o usuário salvar o formulário, pegamos o valor digitado e buscamos na api do github o repositório informado:

```
...
  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);
    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };
 ...
```

Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula07-add-repositorios](https://github.com/tgmarinho/front-react/tree/aula07-add-repositorios)


## Aula 08 - Listando repositórios



Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula08-listando-repositorios](https://github.com/tgmarinho/front-react/tree/aula08-listando-repositorios)

## Aula 09 - Utilizando LocalStorage 

Vamos salvar os repositórios no localstorage, que é um banco de dados embutido no navegador que armazena chave valor em Strings.



Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula09-utilizando-localstorage](https://github.com/tgmarinho/front-react/tree/aula09-utilizando-localstorage)


## Aula 10 - Navegação de rotas




Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula10-navegacao-de-rotas](https://github.com/tgmarinho/front-react/tree/aula10-navegacao-de-rotas)



## Aula 11 - Carregando dados da API



Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula11-carregando-dados-api](https://github.com/tgmarinho/front-react/tree/aula11-carregando-dados-api)


## Aula 12 - Definindo PropTypes


Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula12-definindo-prop-types ](https://github.com/tgmarinho/front-react/tree/aula12-definindo-prop-types)


## Aula 13 - Exibindo Repositório



Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula13-exibindo-repositorio](https://github.com/tgmarinho/front-react/tree/aula13-exibindo-repositorio)


## Aula 14 - Exibindo Issues 



Fim, código fonte: [https://github.com/tgmarinho/front-react/tree/aula14-exibindo-issues](https://github.com/tgmarinho/front-react/tree/aula14-exibindo-issues)


