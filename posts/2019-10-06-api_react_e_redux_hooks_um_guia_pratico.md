---
title: API React e Redux Hooks um guia prático
description: >-
  Vamos aprender os conceitos de React Hooks e ver os principais Hooks em ação e
  no final refatorar um projeto usando os Hooks do React e do Redux
date: '2019-10-06 04:45:01'
image: /assets/img/react-hooks.jpg
category: dev
background: '#EB7728'
---
# React Hooks!

[React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) é a nova API do React para agilizar na construção de componentes, pois ela diminuiu a verbosidade na parte de compartilhamentos de componentes, estado e ciclo de vida.

A [documentação](https://pt-br.reactjs.org/docs/hooks-intro.html) está muito boa, fácil de entender e em português, mas vamos abordar aqui também com um projeto prático feito no Bootcamp da Rocketseat.


## Aula 01 - Configurando a estrutura do projeto

Para aprender Hooks, vamos criar um projeto:

```
npx create-react-app react-hooks
```

Instalar o Eslint:

```
yarn add eslint -D
```

Executar o comando: 

```
yarn eslint --init
```

E configure com os seguintes passos:

```
yarn eslint --init
yarn run v1.12.0
warning package.json: No license field
$ /Users/tgmarinho/Developer/bootcamp_rocketseat_studies/node_modules/.bin/eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:
eslint-plugin-react@^7.14.3 eslint-config-airbnb@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^1.7.0
? Would you like to install them now with npm? Yes
```

Depois crie o arquivo `.editorConfig`:

```
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Depois instalei o `prettier` e seus plugins, e o `babel-eslint`:

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Crie o arquivo `.prettierrc`:

```
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

E por fim configurei o `.eslintrc.js`:

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

Pronto! Essas configurações são básicas para estruturar o projeto em React, agora tudo que fizermos será referente ao React Hooks, primeiro vamos instalar uma dependência que nos ajuda a não programar Hooks de forma errada, ele vai mostrar pra gente tudo que estivermos fazendo errado:

```
yarn add eslint-plugin-react-hooks -D  
```

E lá no `.eslintrc.js`, adicionamos o `plugin`: 

```
plugins: ['react', 'prettier', 'react-hooks'],
```

E na `rules` adicionamos mais duas linhas:

```
 rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', 'js'] }],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
```

Explicando:
`react-hooks/rules-of-hooks` : avisa todo infringimento  das regras dos hooks
`react-hooks/exhaustive-deps`: auxilia a usar os `useEffects` na parte de dependências que vamos ver mais pra frente.

Agora sim podemos codar!

Código [https://github.com/tgmarinho/react-hooks/tree/aula-01-configurando-estrutura](https://github.com/tgmarinho/react-hooks/tree/aula-01-configurando-estrutura)



## Aula 02 - Hook useState

Até agora para poder ter estado na aplicação precisaríamos de criar um componente com Class, ou seja, uma classe que extendia de React.Component e definir a variável state e informar seus estados. Na versão 16.8 a API Hooks foi criada para poder diminuir a verbosidade no código evitando a necessidade de usar classes para definir componentes com estados e manipulação do ciclo de vida. Diminui também a verbosidade para integrar com Redux e Apollo (GraphQL).

Primeiro Hook que vamos ver é o `useState`.

### useState

É o hook que ser usando dentro da função que vai retornar uma variável e uma função que alterar o estado dessa mesma variável.

O useState retorna o estado e a função que atualiza o estado.

```
const [tech, setTech] =  useState([]);
```

Criamos uma const que recebe de forma desestruturada uma variável de estado e uma função que atualiza essa variábel de estado, o useState recebe como parâmetro o valor inicial do estado, que no nosso caso é um array vazio.

Mas se passarmos alguns valores, podemos listar as tecnologias:

```
import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'ReactNative', 'NodeJS']);

  return (
    <ul>
      {tech.map(t => (
        <li>{t}</li>
      ))}
    </ul>
  );
}

export default App;
```

Olha como fica mais simples e menos verboso.

Agora vamos alterar o estado com a função `setTech`.

```
import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'ReactNative']);

  function handleAdd() {
    setTech([...tech, 'Node.JS']);
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
```

Quando o usuário clicar no botão Adicionar, a função `handleAdd` será executada, o `setTech` vai ser invocado e o como o estado é imutável, replico o valor do array e adiciono o novo valor.

A variável tech armazena todos os dados e o setTech altera o seu estado.

Toda vez que a tech é alterada o render é invocado novamente.

o useState é o hook mais simples, ele pode armazenar todos os tipos do Javascript.

Podemos ainda criar um outro hook no mesmo componente, podemos criar quanto quisermos.

Criaremos um novo Hook:

```
const [newTech, setNewTech] =  useState('');
```

Vai armazenar a tecnologia que eu digitar em um input que vou criar:

```
<input  value={newTech}  onChange={e  =>  setNewTech(e.target.value)}  />
```
O input recebe um value que é o valor que está sendo digitado, o onChange executa uma função que recebe o evento de digitação no input, que passa para a função de atualização do estado do newTech o valor que está sendo digitado.

Quando o usuário clica em adicionar, chamamos o método `handleAdd()` que vai repassar para o setTech a nova tecnologia e depois limpar o input passando uma string vazia, veja:

```
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
```
Simples assim! Esse é o hook mais simples e fácil para aprender!

Código [https://github.com/tgmarinho/react-hooks/tree/aula-02-hook-useState](https://github.com/tgmarinho/react-hooks/tree/aula-02-hook-useState)


## Aula 03 - Hook useEffect

O `useEffect` soprõe os ciclos de vida anteriores que usavamos com classes: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`. Nessa aula vamos aprender como aplicar o useEffects para substituir esses três ciclos mencionados.

### componentDidUpdate

Se quisermos armazenar as variáveis das tecnologias no localStorage sempre que uma variável de estado alterasse, teríamos que comparar o estado com o que está vindo e ver se eram diferente e atualizar o estado com o novo valor e chamar o localStorage.setItem(...) para armazenar esse array com o novo valor.

Agora com useEffects fazemos assim:   

```
import React, { useEffect } from  'react';
...
useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
}, [tech]);
```

passamos para a função useEffect uma função que faz o que precisarmos que nesse caso é passar para o localStorage um novo item 'tech' com o array em formato de JSON. E o segundo parâmetro é um array de dependências, quando eu passo um array com um valor, toda vez que esse estado for alterado então esse useEffect vai ser executado. Nesse caso toda vez que `tech` sofrer uma alteração o useEffect vai ser chamado.

### componentDidMount

Mas se eu quiser que execute apenas uma vez, quando o componente montar em tela? Só não passar o estado no array de dependência:

```
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);
```

Podemos ter vários useEffects, nesse useEffect estamos fazendo a mesma coisa que a função componendDidMount está fazendo, depois que o componente é montado, verificamos o array de dependência como está vazio, ele executa quando a tela é montada, e ele pega todos os dados do localstorage que tem o 'tech' como chave e se tiver algum valor então passamos ele para o setTech, o qual vai popular o array e exibir em tela. Como ele não monitora nenhuma variável ele vai ser executado apenas uma vez.


### componentWillUnmount

Para executar uma função quando o componente é desmontado é necessário retornar uma função de dentro do useEffect, e essa é função é executada assim que o componente for desmontar ou seja sumir da tela, isso é útil para cancelar e parar todos events listeners como setTimeout ou setInterval que tenha sido declarado e podemos criar essa função de retorno para cada useEffect se for necessário.

```
useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    return () => {
      document.removeEventListener();
    };
  }, []);
```

Pronto, com Hooks, conseguimos cobrir os principais ciclos de vida da aplicação e o código ficou bem mais legível e simples de manter. Mas é bom entender todos os conceitos para não aplicar de forma errada, o bom que o eslint configurado com a regra do `react-hooks/exhaustive-deps` você vai perceber que fica impossível fazer alguma coisa errada.

Olha como ficou nosso componente até aqui:

```
import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    return () => {
      document.removeEventListener();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
```

Código [https://github.com/tgmarinho/react-hooks/tree/aula-03-hook-useEffect](https://github.com/tgmarinho/react-hooks/tree/aula-03-hook-useEffect)



## Aula 04 - Hook useMemo

Esse hook é indicado para fazer cálculos mais complexos no componente, e são úteis para componentes sensíveis que tem muita renderização. Então componentes que possuem cáclulos e  muitas alterações de estado, vão renderizar sempre que cada estado alterar e o `useMemo` vem para otimizar isso, podemos criar uma propriedade que recebe um valor e é recalculado apenas se um estado específico alterar e estiver no array de dependência no `useMemo`.

Exemplo aqui: `<strong>Você tem {tech.length} tecnologias</strong>`

Toda vez que qualquer estado altearr esse tech.length será executado, tá ele é simples e tals, mas se fosse um formatPrice, ou calculaImposto, ai seria custoso, e imagina que alterou um estado qualquer da aplicação que não tem nada haver com algo que haja necessidade de formatar preço ou calcular imposto ser renderizado refazendo todo o calculo. 

O que podemos fazer é utilizar o useMemo, importando-o:

```
import React, { useMemo } from  'react';
...
```

Criar uma variável que armazena um valor, e a cada alteração no estado de `tech` então o `useMemo` é executado alterando o valor do `techSize`:

```
const techSize =  useMemo(() => tech.length, [tech]);
```

E alterar para otimizar o código:

```
...
<strong>Você tem {techSize} tecnologias</strong>
...
```

Pronto, agora o `techSize` só alterar se o `tech` alterar. Isso é muito bom!

Portanto, se precisar fazer algum cálculo no `render` então `useMemo`.

Código [https://github.com/tgmarinho/react-hooks/tree/aula-04-hook-useMemo](https://github.com/tgmarinho/react-hooks/tree/aula-04-hook-useMemo)


## Aula 05 - Hook useCallback

 Ele é parecido com `useMemo`, a diferença que ele retorna uma função, e nós utilizaremos o `useCallback` quando  criamos funções dentro dos componentes. a exemplo da função `handleAdd()` que temos na função `App` que é o componente. Toda vez que o render é chamado, essa função interna `handleAdd` e outras que esse componente possuir vai ser criada, e criar cada função consome processamento e nesse caso é um processamento inútil, só precisamos que a função seja criada uma única vez. E ai que entra o `useCallback`. 
 
```
import React, { useCallback } from  'react';
```

Vamos refatorar a função `handleAdd`, para usar `useCallback`:

```
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
```

Olhá só como é parecido com tudo que já fizemos nos outros hooks:

```
 const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);
```

Declaro uma constante `handleAdd` que recebe a chamada do `useCallback` que recebe uma arrow function que contém toda a lógica da função, e no final ela recebe o array de dependências. E tudo funciona normalmente.

E agora função interna do `handleAdd` só será recriada se os estados `newTech` e `tech` forem alterados, semelhante ao `useMemo` e `useEffect`.

O useCallback só é utilizado em funções que alteram o estado interno do componente.

Pronto! Simples assim! Vimos até aqui os principais Hooks do React.

Código [https://github.com/tgmarinho/react-hooks/tree/aula-05-hook-useCallback](https://github.com/tgmarinho/react-hooks/tree/aula-05-hook-useCallback)



## Aula 06 - Convertendo classe pra hooks

Vou converter o projeto rocketshoes do frontend com React para usar Hooks. Vou utilizar a última branch mais atual com classes.

Baixar o projeto: [https://github.com/tgmarinho/rocketshoes/tree/aula-26-navegacao-no-sagas](https://github.com/tgmarinho/rocketshoes/tree/aula-26-navegacao-no-sagas)

Primeiro eu baixo o plugin do eslint para lidar com hooks:

```
yarn add eslint-plugin-react-hooks -D
```

No arquivo `.eslintrc` adiciono o plugin `react-hoooks`:

```
plugins: ['react', 'prettier', 'react-hooks'],
```

E nas `rules`: adiciono:

```
...
'react-hooks/rules-of-hooks':  'error',
'react-hooks/exhaustive-deps':  'warn',
...
```

Pronto, agora vamos começar a refatorar o componente statefull Home:

Os imports vão ficar assim:
de:
```
import React, { Component } from  'react';
```
para:
```
import React, { useState, useEffect } from  'react';
```

Primeiro vamos alterar as declarações de estados.

de:
```
state = {
 products: []
}
```

para: 
```
const [products, setProducts] =  useState([])
```

Depois alteramos de class para function:
de: 
```
class  Home  extends  Component { ... }
```
para:
```
function  Home() { ... }
```

E agora vamos refatorar o `componentDidMount` e usar `useEffect`:

de:
```
async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }
```

para:
```
 useEffect(() => {
   async function loadProducts() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    setProducts(data)
   }

   loadProducts()
 }, [])
```

Confesso que fica mais complexo na primeira impressão, pois como estamos lidando com uma chamada assíncrona, não podemos fazer como no código abaixo, e o que seria o mais óbvio no primeiro contato:

```
 useEffect( async () => {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    setProducts(data)
   }

 }, [])
```

Acho que todos fariam assim na primeira vez, eu mesmo já fiz isso antes! lol

O jeito certo está lá em cima, então precisamos declarar uma função assíncrona, que executa toda a lógica anterior do mesmo jeito e inclui o dada no setProducts para alterar o estado, do jeito React Hook de se fazer. E no final invocamos a função.

Observe também que não passei nenhum estado no array de dependência `[]`, com isso esse useEffect vai ser executado apenas quando o componente estiver montando em tela, e só essa vez, então nesse caso só precisamos que carregue o produto na tela apenas uma única vez, igual fizemos com a classe usando o `componentDidMount`.

Agora vamos refatorar o método `render() { ... } `

de:
```
render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{' '}
                {amount[product.id] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
```

para:
```
return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
```

A função `handleAddProduct` pode ser removida, e a `addToCartRequest` pode ser passada na props do componente Home.
 
Podemos passar a prop dentro da `function Home({ amount, addToCartRequest }) {...}`

Tudo fica assim:
```
import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/models/cart/actions';

function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => addToCartRequest(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
```

Pronto!

Agora está tudo usando funções e o único componente que gerencia estado está usando função com Hooks.

Código [https://github.com/tgmarinho/rocketshoes/tree/aula-27-convertendo-classes-para-hooks](https://github.com/tgmarinho/react-hooks/tree/aula-27-convertendo-classes-para-hooks)


## Aula 07 - Hooks com Redux

Com a vinda do Hooks ficou muito mais simples usar Redux.

Vamos converter o Header do ecommerce para usar os Hooks com Redux.

Vou usar a função useSelector em vez de connect do react-redux:
sai fora:
```
import { connect } from  'react-redux';
```
entra:
```
import { useSelector } from  'react-redux';
```

removo as props da função Header:
sai fora:
```
function  Header({ cartSize }) { ... }
```

entra uma nova constante `cartSize`:
```
const cartSize =  useSelector(state => state.cart.length);
```

E agora ao invés de usar o connect com a função lá em baixo, com o export default, tudo fica ali dentro do  `useSelector`.

Removo:
```
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
```

E o export fica assim:
```
export default function Header() { ... }
```

Muito mais simples, diminui umas cinco linhas de código e ficou menos verboso!

Olha como fica o componente:

```
import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
```

Agora vamos refatorar o componente `Home`:

DE:
```
import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/models/cart/actions';

function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => addToCartRequest(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
```

PARA: 
```
import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/models/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button
            type="button"
            onClick={() => dispatch(CartActions.addToCartRequest(product.id))}
          >
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
```

Usamos o `useSelector` e `useDispatch` para simplificar o uso do Redux, veja que não usaremos mais o `connect` e nem o `bindActionCreators`, inclusive a complexidade diminui devido a diminuição da verbosidade.

E tudo volta a funcionar! 

Vamos refatorar agora o componente `Cart` para usar o `useSelector` e `useDispatch`:

DE:
```
import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { bindActionCreators } from 'redux';
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/models/cart/actions';
import { formatPrice } from '../../util/format';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.price}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7169c1"
                      onClick={() => decrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#7169c1"
                      onClick={() => increment(product)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdDelete
                      size={20}
                      color="#7169c1"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
```

PARA:
```
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/models/cart/actions';
import { formatPrice } from '../../util/format';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.price}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7169c1"
                      onClick={() => decrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#7169c1"
                      onClick={() => increment(product)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdDelete
                      size={20}
                      color="#7169c1"
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
```

Pronto, agora com os hooks sempre que precisarmos de um estado do Redux podemos usar o `useSelector` e quando precisar de uma action só usar o `useDispatch`, ambos do `react-redux` para fazer essa integração com Redux.  

Pronto, tudo está funcionando e com um código bem legal usando React Hooks, todos os códigos daqui para frente podem usar a API de Hooks.

Código [https://github.com/tgmarinho/rocketshoes/tree/aula-28-hooks-com-redux](https://github.com/tgmarinho/react-hooks/tree/aula-28-hooks-com-redux)

Agora o desafio é refatorar o projeto mobile do Rocketshoes para usar Hooks do React e do Redux:

Sinta-se a vontade para fazer o [fork do projeto](https://github.com/tgmarinho/RocketshoesRN) e concluir o [desafio](https://github.com/tgmarinho/RocketshoesRN).


Fim!



[Créditos da imagem](https://pescaprendiz.wordpress.com/2015/05/07/um-pouco-sobre-a-pesca/)


