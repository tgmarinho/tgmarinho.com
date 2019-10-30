---
title: GoBarber - Aplicação Mobile com React Native
description: >-
  Minhas notas de aula e código do bootcamp da Rocketseat, nesse projeto criamos
  o aplicativo mobile em React Native que consome a API GoBarber
date: '2019-10-30 04:51:57'
image: /assets/img/screen_shot_2019-10-30_at_16.57.11.png
category: mobile
background: '#03A9F4'
---

Vamos construir o GoBarber Mobile com React Native que vai consumir a API Rest Gobarber Backend em NodeJS, vamos controlar rotas privadas, fazer a autenticação JWT e receber um token de autenticação. A autenticação do usuário vai ficar guardada no Redux para sempre que precisarmos do usuário logado, ter acesso aos dados do profile. Ele é diferente do Go Barber Web pois nele não cadastramos os prestadores, apenas listamos os prestadores e fazemos o agendamento, esse é um app cliente, e o web é o provedor.


## Aula 01 - Estrutura do projeto

Para começar vamos criar um projeto com React Native CLI, executando o comando:

```
react-native init gobarberRN
```

Depois pegamos as libs do  [Go Barber Web](https://github.com/tgmarinho/gobarber-web) e as configurações e aplicamos para o Go Barber Mobile, veja no commit o que foi feito, é semelhante a tudo que já foi feito em outros tutoriais de React Native que já escrevi para estruturar uma aplicação.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-01-estrutura-projeto](https://github.com/tgmarinho/gobarberRN/tree/aula-01-estrutura-projeto)


## Aula 02 - Configurando Root Import

Root Import se não sabe, é a ferramenta que permite fazemos imports de forma mais fácil, exemplo:

Como é:
```
import Card from '../../../../components/Card'
```
Como fica com root import:
```
import Card from '~/components/Card'
```

Ou seja fica muito mais fácil fazer o import, não precisamos saber onde está, a ferramenta faz isso pra gente, após uma prévia configuração.

Vamos instalar as duas libs necessárias para a configuração:

```
yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
```

No React Native temos acesso as configurações do Babel, no Create React App não, por isso fizemos outras configurações usando o react-app-rewired por exemplo.

Então no `babel.config.js` adiciono um plugin babel-plugin-root-import e informo a pasta raiz do código:

```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
```

E no `eslintrc.js`:

```
...
 settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
```

Crio também o arquivo `jsconfig.json` que ajuda na importação dos arquivos, e para pode acessar os arquivos:

```
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

Pronto, só testar criando um componente qualquer e colocando dentro do App.js, a importação e o acesso ao arquivo devem funcionar.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-02-configurando-root-import](https://github.com/tgmarinho/gobarberRN/tree/aula-02-configurando-root-import)


## Aula 03 - Rotas de autenticação

Vamos configurar as rotas de autenticação, como foi feito no gobarber-react

Primeiro vamos adicionar as libs que gerenciam rotas:

```
yarn add react-navigation react-native-gesture-handler                        
```

Depois instalamos [jetifier](https://github.com/mikehardy/jetifier):
```
yarn add jetifier -D
```

Depois só rodar o comando:

```
yarn run jetify 
```
Para corrigir as bibliotecas. Ele conserta as libs para a arquitetura do AndroidX.

Para o React Navigation funcionar precisamos  configurar um arquivo Java do Android, conforme a [documentação](https://reactnavigation.org/docs/en/getting-started.html).

Após isso só executar o comando para o ios ou android, em qual vc estiver emulando durante o desenvolvimento:

```
react-native run-ios 
react-native run-android
```

Agora vamos trabalhar com as rotas, crie um arquivo: `routes.js` dentro do `src`.

```
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  }),
);
```

E depois criamos um functional components SignIn e SignUp na pasta pages. E está configurando, veja os detalhes no código.

Na execução deve aparecer o texto SignIn no canto esquerdo do celular ou emulador.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-03-rotas-auth](https://github.com/tgmarinho/gobarberRN/tree/aula-03-rotas-auth)


## Aula 04 - Configurando Background

Vamos começar a fazer a parte visual da aplicação.

Instalando a lib:

```
yarn add react-native-linear-gradient                                                         
```

Só rodar o comando para instalar essa biblioteca se estiver no macos e se estiver emulando no iOS, no Android não precisa fazer isso: 

```
cd ios/ && pod install && cd..
```

Agora vamos criar o background:

Criamos a pasta `src/components/Background/` e dentro o arquivo `index.js` com a seguinte configuração:

```
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
flex: 1;
`;
```

Legal bem simples, apenas estamos reestilizando um componente passando uma cor na primeira posição e uma segunda cor na segunda posição, que vai dar um efeito vertical de gradiente.

Esse componentes Background será usando em todas as telas.

Depois só aplicar no SignIn e no SignUp:

```
import React from 'react';
import {Text} from 'react-native';

// import { Container } from './styles';
import Background from '~/components/Background';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>
    </Background>
  );
}
```

Deve aparecer uma tela muito bonita em gradiente no seu emulador/simulador ou celular.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-04-configurando-background](https://github.com/tgmarinho/gobarberRN/tree/aula-04-configurando-background)


## Aula 05 - Input & Button

Criei dois componentes globais, isolados, na pasta componentes.

Ambos serão usados no SignIn e no SignUp.

Detalhe que usei o `forwardRef` do React para passar o ref para o componente TIInput e dar o foco manual via programação, que será feito nas próximas aulas.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-05-input-button](https://github.com/tgmarinho/gobarberRN/tree/aula-05-input-button)


## Aula 06 - Página SignIn

* Estilizei a página SignIn
* Detalhe que usei KeyboardAvoidingView ao invés da View, pois no iOS quando clico no input ele não joga o conteúdo para cima, ele sobrescreve o conteúdo de forma que não dá para ver o input. Então usei o KeyboardAvoidingView e use o Platform para habilitar o behavior padding desse componente. No Android não precisa, ele já faz isso por natureza, veja os detalhes na implementação

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-06-pagina-signin](https://github.com/tgmarinho/gobarberRN/tree/aula-06-pagina-signin)


## Aula 07 - Página SignUp

* Basicamente só copiar a colar do SignIn e adicionar um campo e trocar os labels

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-07-pagina-signup](https://github.com/tgmarinho/gobarberRN/tree/aula-07-pagina-signup)


## Aula 08 - Configurando StatusBar

Status Bar é a barra que fica no topo onde mostrar os status de bateria, wifi, relógio, e nesse caso estamos colocando a cor de fundo com a mesma da aplicação e o conteúdo na cor branca ao invés de preto que é o padrão.

```
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
```

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-08-configurando-statusbar](https://github.com/tgmarinho/gobarberRN/tree/aula-08-configurando-statusbar)


## Aula 09 - Dicas de Acessibilidade

Aqui vai uma dica bem legal para otimizar o tempo do usuário e dar uma experiência legal.

No SignUp declaramos `emailRef` e `passwordRef`, criamos também a função handleSubmit :

```
import React, { useRef } from  'react';
...
const emailRef = useRef();
const passwordRef = useRef();

function handleSubmit() {}
...
```

Cada `ref` desses vai para seu respectivo componente:

```
 <FormInput
  icon="person-outline"
  autoCorrect={false}
  autoCapitalize="none"
  placeholder="Nome completo"
  returnKeyType="next"
  onSubmitEditing={() => emailRef.current.focus()}
/>

<FormInput
  icon="mail-outline"
  keyboardType="email-address"
  autoCorrect={false}
  autoCapitalize="none"
  placeholder="Digite seu email"
  returnKeyType="next"
  ref={emailRef}
  onSubmitEditing={() => passwordRef.current.focus()}
/>

<FormInput
  icon="lock-outline"
  secureTextEntry
  placeholder="Sua senha secreta"
  returnKeyType="send"
  ref={passwordRef}
  onSubmitEditing={handleSubmit}
/>

<SubmitButton onPress={handleSubmit}>Criar</SubmitButton>
```

Depois usamos a prop  `onSubmitEditing={() => emailRef.current.focus()}` para poder chamar o focus do próximo input. Nesse caso essa prop está no Input do Nome do usuário, e quando ele clica no teclado em next vai para o email, o email ganha o foco.   A prop `returnKeyType="next"` é o botão de `next` ou `próximo` que aparece no teclado (depende da configuração do seu idioma no celular)

No último input temos a prop: `returnKeyType="send"` com o valor `send` onde muda o comportamento, o qual chama a função que envia o formulário `onSubmitEditing={handleSubmit}`. Logo o botão de de criar ou acessar acaba sendo desnecessário, se o usuário clicar no enviar que aparece no teclado, isso é um ganho de acessibilidade, claro que não dá para tirar o botão acessar ou criar da tela, pois às vezes o usuário não manja disso.

Para a tela de SignIn, foi feito a mesma coisa que descrito, veja o código.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-09-dicas-de-acessibilidade](https://github.com/tgmarinho/gobarberRN/tree/aula-09-dicas-de-acessibilidade)


## Aula 10 - Reactotron

Na aula 05 desse post [https://www.tgmarinho.com/introducao-ao-react-native/](https://www.tgmarinho.com/introducao-ao-react-native/) explico cada um dos passos.

Veja o código abaixo no link.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-10-reactotron](https://github.com/tgmarinho/gobarberRN/tree/aula-10-reactotron)


## Aula 11 - Configurando Redux

* Peguei toda a pasta `store` do gobarber-web e colei dentro de `src`.
* Removi o history do sagas e também o toast, usei o Alert do React Native para exibir mensagens de feedback para o usuário
* Nas configurações alterei o `process.env.NODE` para `__DEV__`
* Grande benefício do Redux, reaproveitamos 99% da lógica da aplicação ao integrar com React Native o mesmo que estava funcionando na web com React.s

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-11-configurando-redux](https://github.com/tgmarinho/gobarberRN/tree/aula-11-configurando-redux)


## Aula 12 - Conectando Redux

* Conectei com o Redux para poder fazer o login (sign in) e o signup de novos usuários, chamando as actions que são interceptados pelo saga que vai no servidor e efetua o procedimento de login e cadastro de usuário volta com os dados de sucesso do servidor e atualizam os reducers na store e mostram algo visual ou alertas para o usuário.

Veja o código.

No post [https://www.tgmarinho.com/arquitetura_flux/](https://www.tgmarinho.com/arquitetura_flux/) explico os mesmos conceitos.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-12-conectando-redux](https://github.com/tgmarinho/gobarberRN/tree/aula-12-conectando-redux)


## Aula 13 - Rota inicial

* Depois do usuário logar ele deve ser redirecionado para uma nova rota (Dashboard).

 Instalei a lib `react-navigation-tabs` e `react-native-reanimated`, e executei `pod install` na pasta `ios`

Criei um arquivo `pages/Dashboard/index.js` com um componente inicial usando o snippet: `rnfc`, que vai ser o componente de Dashboard que o usuário vai ver após se logar na aplicação.

No arquivo `routes.js` importei `react-navigation-tabs` para poder usar o `createBottomTabNavigator`

Importei também o Dashboard.

Modifiquei a routes para exportar uma função que recebe um parâmetro, no caso `isSigned` com o valor padrão `false`. 

E dentro do `createAppContainer` criei dois grupos, primeiro Sign e o segundo App, o usuário será redirecionado para esse grupo se não estiver logado, se estiver logado vai para App, conforme a regra:

```
{ initialRouteName: isSigned ? 'App' : 'Sign', }
```

E assim vai acessar a rota que foi solicitada de dentro desse grupo, seja a rota SignIn ou SignUp our Dashboard se estiver logado.

Observe que nas telas de SignIn e SignUp estou usando `createSwitchNavigator` pois não preciso de nenhum feedback visual nessas rotas. Agora na rota de Dashboard estou usando `createBottomTabNavigator` que cria um botão no inferior da tela com o nome da rota (Dashboard) e tudo isso pode ser customizado, é o que iremos fazer na próxima aula. Legal que cada tela pode ter um tipo de navegação através desses agrupamentos.

* routes.js:
```
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator({
          Dashboard,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
```

 Criei um outro arquivo `App.js` dentro da `src` e o arquivo `index.js` renomei o componente para `Index`, fiz isso para poder importar o App dentro de index.js e no App.js poder acessar os reducers da store, para poder verificar se o usuário está logado para determinar o valor que será passado como parâmetro na função que cria a rota, lembrando que o arquivo routes agora recebe uma função e retorna outra função, ela se tornou um [High Order Component](https://www.tgmarinho.com/high-order-functions-%E2%80%94-easy-mode/), [outro artigo.](https://www.tgmarinho.com/b%C3%A1sico-sobre-composicao-de-componentes/), mais um [post sobre HOC](https://www.tgmarinho.com/funcao-de-ordem-superior-com-reduce/). No index.js da pasta `src` importamos o App e trocamos pelos Routes, uma vez que o Routes foi para o arquivo App.js.

Basicamente esse lance entre o index.js e o App.js ocorreu pois não tinhamos como acessar o store de dentro do index.js onde estávamos passando o Provider, por isso separamos essas configurações, agora perceba que o App ficou dentro do Provider e dessa forma o App tem acesso aos reducers da store.

* App.js:
```
import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}

```

* index.js:

```
import './config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <App />
      </PersistGate>
    </Provider>
  );
}

```

Olhando o código abaixo no link, fica fácil pelos diffs ver a necessidade da alteração.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-13-rota-inicial](https://github.com/tgmarinho/gobarberRN/tree/aula-13-rota-inicial)


## Aula 14 - Estilizações das rotas

* Estilizei as rotas Dashboard e Profile (criei esse novo componente), e estilizei as abas do menu que está no canto inferior da tela.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-14-estilizacao-rotas](https://github.com/tgmarinho/gobarberRN/tree/aula-14-estilizacao-rotas)


## Aula 15 - Lista de Agendamentos

* Criei uma Flatlist no Dashboard para mostrar os agendamentos (Appointments) e estilizei a FlatList e os items da FlatList criando um novo componente Appointment.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-15-lista-de-agendamentos](https://github.com/tgmarinho/gobarberRN/tree/aula-15-lista-de-agendamentos)


## Aula 16 - Agendamentos da API

* Coloquei os dados da API na Flatlist
* Adicionei o método cancelar agendamento

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-16-agendamentos-api](https://github.com/tgmarinho/gobarberRN/tree/aula-16-agendamentos-api)


## Aula 17 - Atualização de perfil

* Criei, estilizei e atualizei os dados do Profile usando a API.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-17-atualizacao-perfil](https://github.com/tgmarinho/gobarberRN/tree/aula-17-atualizacao-perfil)


## Aula 18 - Logout

* Implementei o logout da aplicação.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-18-logout](https://github.com/tgmarinho/gobarberRN/tree/aula-18-logout)

## Aula 19 - Rotas de agendamento

* Criei um outro agrupamentos de rotas chamado New que mostra na TabBar o ícone de + com o label 'Agendar', clicando nesse ícone ele vai para o processo de agendamentos. Nesse agrupamento  contém três rotas de pilha para poder ir e voltar entre os passos de escolher fornecedor, escolher data e confirmar o agendamento.
* Criei os componentes SelectProvider, SelectDateTime e  Confirm, porém não estilizei, vou fazer na implementação das próximas aulas.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-19-rotas-agendamento](https://github.com/tgmarinho/gobarberRN/tree/aula-19-rotas-agendamento)

## Aula 20 - Listagem de Prestadores

* Estilizei o componente SelectProvider e usei navigation.navigate para ir para a próxima tela, com o provider selecionado.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-20-listagem-prestadores](https://github.com/tgmarinho/gobarberRN/tree/aula-20-listagem-prestadores)


## Aula 21 - DatePicker por Plataforma

* Implementei o DatePicker tanto para Android quanto para o iOS.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-21-datepicker-por-plataforma](https://github.com/tgmarinho/gobarberRN/tree/aula-21-datepicker-por-plataforma)


## Aula 22 - Selecionando horário

* Implementei a chamada da API para buscar a disponibilidade (available) do provider na data selecionada e trazer os horários (disponíveis) para que o usuário selecione e seja enviado para a próxima tela (Confirmação).

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-22-selecionando-horario](https://github.com/tgmarinho/gobarberRN/tree/aula-22-selecionando-horario)


## Aula 23 - Confirmando Agendamento 

* Implementei a estilização da confirmação de agendamento e seu comportamento, quando o usuario cai nessa rota, ele recebe o provider e o time como parâmetro, mostro na tela os dados e quando ele clica no botão confirmar é finalizado o fluxo e o agendamento é concluído. Para finalizar falta agora implementar a atualização de lista de agendamentos.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-23-confirmando-agendamento](https://github.com/tgmarinho/gobarberRN/tree/aula-23-confirmando-agendamento)



## Aula 24 - Load de Agendamentos

* Para finalizar implementei o load de agendamento, toda vez que o agendamento é finalizado o usuário é redirecionado para a página de Dashboard onde mostra os agendamentos, e para poder recarregar novamente a página usei o `withNavigationFocus` do react-navigation para que dispor da pro `isFocused` que sempre que a tela receber o foco essa variável recebe `true` então se for `true` eu faço o load Novamente e passo ela como dependência do useEffect que faz a busca na API.

E também por fim usei no arquivo routes.js a prop: `resetOnBlur: true,` que faz com que a pilha da navegação seja limpa, pois toda vez que eu clicava em agendar após um agendamento anterior, ele estava indo para a tela final, e eu queria começar do zero, com essa prop resolveu o problema.

Código: [https://github.com/tgmarinho/gobarberRN/tree/aula-24-load-agendamento](https://github.com/tgmarinho/gobarberRN/tree/aula-24-load-agendamento)

Fim!

OBS: Ficou alguns detalhes de implementação que devo voltar a escrever sobre eles no futuro. Por enquanto é isso, veja as telas da aplicação.

Telas do aplicativo:

* Login:

![https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/signin.png](https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/signin.png)

* Cadastro:

![https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/signup.png](https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/signup.png)

* Perfil:

![https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/profile.png](https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/profile.png)

* Selecionar Prestar:
![https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/prestador.png](https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/prestador.png)

* Selecionar Horário:

![https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/select-horario.png](https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/select-horario.png)


* Confirmar Agendamento:

![https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/Screen%20Shot%202019-10-30%20at%2016.36.21.png](https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/Screen%20Shot%202019-10-30%20at%2016.36.21.png)

* Listagem de Agendamentos:

![https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/Screen%20Shot%202019-10-30%20at%2016.36.30.png](https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/gobarberRN/Screen%20Shot%202019-10-30%20at%2016.36.30.png)
