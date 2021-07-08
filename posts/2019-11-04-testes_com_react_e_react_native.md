---
title: Testes com React e React Native
description: >-
  Notas de Aula do bootcamp da Rocketseat sobre Testes no Frontend e Mobile com
  React e React Native
date: '2019-11-04 01:56:31'
image: /assets/img/desert.jpg
category: dev
background: '#EB7728'
---
**Testes no ReactJS e React Native**


## Configurando o ambiente

Criei um projeto web com ReactJS:

```
npx create-react-app test-web-reactjs
```

o CRA já vem com Jest configurado e fica dentro do react-scripts, porém como eu quero configurar o JEST eu uso react-app-rewired para poder configurar o webpack, babel e também o jest do meu jeito.

```
❯ yarn add react-app-rewired -D  
```

Configuro o package.json:

```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

E limpo a estrutura removendo arquivos desncessários (veja o commit)


O `react-app-rewired` pede para criar um arquivo `config-overrides.js` para sobrescrever as configurações, então na raiz do projeto crio esse arquivo com as configurações:

```
module.exports  = {};
```

Não vai mudar nada na configuração, mas precisa estar presente.

Se eu rodar yarn test vai funcionar tudo normalmente.

Instalei as libs para usarmos para testar React e o DOM:

```
yarn add @testing-library/jest-dom @testing-library/react @types/jest -D
```

* [https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro)
* [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

Agora no `package.json` vamos criar uma chave `jest` e fazer toda a configuração ali dentro.

```
"jest": {
    "testMatch": [
      "**/__tests__/**/*.test.js"
    ],
    "setupFilesAfterEnv": [
      "@testing-library/react/cleanup-after-each",
      "@testing-library/jest-dom/extend-expect"
    ],
    "moduleNameMapper": {
      "^~/(.*)": "<rootDir>/src/$1"
    }
  },
```


testMatch vai buscar pelos arquivos que terminam com .test.js dentro de pastas e subpastas da pasta __test__ que está dentro de src.

setupFilesAfterEnv serve para configura os arquivos depois do ambiente.

Essa configuração do setupFilesAfterEnv pode ficar deprecated logo, e ai vai poder remover.

Configuração está feita, só rodar `yarn test` novamente e conferir.

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-01-configurando-ambiente](https://github.com/tgmarinho/jest-react-web/tree/aula-01-configurando-ambiente)


## Aula 02 - Primeiro Test

* Implementei o primeiro teste.

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-02-primeiro-test](https://github.com/tgmarinho/jest-react-web/tree/aula-02-primeiro-test)


## Aula 03 - Testando formulário

* Implementei o teste de submit e preenchimento de valores do formulário.

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-03-testando-formulario](https://github.com/tgmarinho/jest-react-web/tree/aula-03-testando-formulario)


## Aula 04 - Mock do LocalStorage

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-04-mock-localstorage](https://github.com/tgmarinho/jest-react-web/tree/aula-04-mock-localstorage)


## Aula 05 - Mock do useSelector

* Mockei o Redux! \o/

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-05-mock-useSelector](https://github.com/tgmarinho/jest-react-web/tree/aula-05-mock-useSelector)


## Aula 06 - Mock do useDispatch

* Mockei o Redux! \o/

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-06-mock-useDispatch](https://github.com/tgmarinho/jest-react-web/tree/aula-06-mock-useDispatch)


## Aula 07 - Testando Reducers

* Mockei o Redux! \o/

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-07-testando-reducers](https://github.com/tgmarinho/jest-react-web/tree/aula-07-testando-reducers)


## Aula 08 - Testando Sagas

* Mockei o Redux! \o/

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-08-testando-sagas](https://github.com/tgmarinho/jest-react-web/tree/aula-08-testando-sagas)


## Aula 09 - Mock do Axios

* Mockei o Redux! \o/

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-09-mock-axios](https://github.com/tgmarinho/jest-react-web/tree/aula-09-mock-axios)


## Aula 10 - Coverage report

* Mockei o Redux! \o/

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-10-coverage-report](https://github.com/tgmarinho/jest-react-web/tree/aula-10-coverage-report)


## Aula 11 - Testes no React Native

* Mockei o Redux! \o/

Código: [https://github.com/tgmarinho/jest-react-web/tree/aula-10-coverage-report](https://github.com/tgmarinho/jest-react-web/tree/aula-10-coverage-report)









