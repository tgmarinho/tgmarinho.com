---
title: Introdução ao React Native
description: >-
  Minhas notas de aula do bootcamp da RocketSeat, onde construímos em RN um app
  que pega os dados dos usuários do Github e mostra os repositórios favoritos de
  cada um.
date: '2019-09-28 09:05:50'
image: /assets/img/react-native-header.png
category: mobile
background: '#03A9F4'
---
## Primeiro Projeto com React native

App que busca os usuários do github e mostra os dados básicos e os repositórios favoritos dos usuários, e salva no banco de dados do SO do celular.

### Stack

- React
- React Native
- Styled Components
- Eslint, Prettier, EditorConfig
- AsyncStorage
- React Navigation
- React Vector Icons
- Axios

![Tela de Usuários](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/list-users-intro-rn.png?raw=true)

## Aula 01 - Conceitos do React Native

### O que é React Native?
- Versão do React para o Desenvolvimento Mobile, como o React serve para criar interfaces, o RN é uma lib que permite a criação de interfaces para o dispositivo móvel para Android e iOS. Porém tem algumas diferenças com ReactJS.
- Ele é multiplataforma, então podemos escrever o mesmo código para iOS e para Android, e podemos ainda manipular algumas particularidades entre os SO.
- O React Native pega toda a interface construída e converte para Java e Objective-C, ou seja, é você não usa uma webview, mas sim os componentes nativos do sistema operacional que estiver utilizando, o que deixa a experiência de usuário muito melhor e performática.
- O código não é transpilado, o código vai para uma dependência chamada JSCore o que torna possível escrever código em javascript.
- A Microsoft tem mais de 40 apps construído com React Native.

### Arquitetura

Como o RN consegue converter o código JS em interface nativa?

O código Javascript passa para uma ferramenta chamada Metro Bundler (packager) que fica monitorando todo o código javascript e ele pega todo o nosso código, e gera o bundle.js. O Metro Bundler é comparado ao Webpack da Web. O Bundle gerado é repassado para a Bridge, que é a ponte de comunicação entre o código javascript e o código javascript, a Bridge vai transformar o que precisa da interface do bundle para Android e iOS, Java para Objective-C.

imagem da arquitetura


### Sintaxe

pegar do slide

- A declaração de componentes é igual ao da web
- Não usamos html e sim componentes próprios
- Aplicamos estilo sem classes ou IDs
- Todo texto é o <Text /> não existe estilização própria
- Para criar estilos temos que usar StyleSheet e usar CSS in JS
- Mas podemos usar styled-components/native
- [Yoga](https://github.com/facebook/yoga) é responsável de converter o CSS para ObjectiveC e Java


### O que é EXPO? 

- SDK com um conjunto de funcionalidades prontas para usar (câmera, vídeo, integrações);
- Não precisa configurar emulador, ele tem um app Expo e você baixa o seu app de lá, o App fica no App do Expo. 
- Simplifica bastante o desenvolvimento

Geralmente não é bom utilizar, pois limita o controle do código nativo, se precisar mexer no Java ou Objective-C não é possível com Expo;
Várias libs não tem suporte ao Expo;


 Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-01-conceitos-react-native](https://github.com/tgmarinho/intro-react-native/tree/aula-01-conceitos-react-native)


## Aula 02 - Ambiente de Desenvolvimento

Para configurar o ambiente de desenvolvimento basta seguir os [tutoriais](https://docs.rocketseat.dev/ambiente-react-native/introducao) da Rocketseat, ficou muito boa essa [doc](https://docs.rocketseat.dev/ambiente-react-native/introducao).

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-02-ambiente-desenvolvimento](https://github.com/tgmarinho/intro-react-native/tree/aula-02-ambiente-desenvolvimento)


## Aula 03 - Criando um projeto

Para criar um projeto com React Native podemos, instalar o [react-native-cli](https://github.com/react-native-community/cli) e podemos usar o npx também.

Para instalar usando o CLI, basta instalar o react-native-cli de forma global na máquina:

```
yarn add react-native-cli 
```

E para criar o projeto só executar:

```
react-native init NomeDoProjeto
```

Ou se quiser usar o [npx](https://walde.co/2018/02/15/conhecendo-o-npx-o-package-runner-npm/):

```
npx react-native init MyAwesomeApp
```

E depois de criar o projeto, no console já mostra o que você deve fazer, então, pode entrar na pasta do projeto, e rodar o emulador: 

- iOS
```
react-native run-ios
```

- Android, o emulador tem que estar aberta antes de rodar o comando.
```
react-native run-android
```

O processo pode demorar bastante dependendo da configuração da sua máquina. Bora tomar um chá sem açúcar!

Quando emulador abrir, você vai ver que abrirá uma janela com o Metro Bundler, ela deve ficar minimizada.

Na Doc da Rocketseat tem um Menu de [Erros Comuns](https://docs.rocketseat.dev/ambiente-react-native/errors/ios), que pode ajudar a resolver alguns problemas na execução do projeto.

Se o Metro Bundler não abriu, ou se você fechou sem querer, você pode abrir novamente, basta rodar o comando:

```
react-native start
```

Se a aplicação já foi instalada, não precisa executar `react-native run-ios` novamente, bastar executar `react-native start`.


Abrindo o projeto no VSCode, o arquivo principal de é o App.js onde contém a primeira tela da aplicação.


E podemos editar o arquivo para ficar mais simplificado:

```
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao RN</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
```

Podemos perceber que não temos div, nem h1, mas a View é como se fosse uma div e Text é como se fosse um h1, p, h2, etc.

O React Native utiliza o FlexBox para posicionar elementos.

Por padrão todos os elementos do RN têm flex-direction column por padrão, um elemento em baixo do outro. Que está certo, pois geralmente a tela é menor e um elemento fica embaixo do outro.

E a estilização é feita com CSS in JS escrevendo em camelCase e trocando `,` por `;`.

A escrita de código de React para Web e para Native é bem semelhante com poucas diferenças o que faz com que fica fácil alguém que já saiba ReactJS trabalhar com React Native.

![Emulador React Native](https://raw.githubusercontent.com/tgmarinho/Images/master/bootcamp-rocketseat/rn-emulador-metro-bundler.png)

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-03-criando-projeto](https://github.com/tgmarinho/intro-react-native/tree/aula-03-criando-projeto)


## Aula 04 - ESLint, Prettier e EditorConfig

Vamos configurar as ferramentas para manter um guia de estilos, e padrão de código no projeto.

Para criar o `editorConfig` no VSCode basta clicar com botão direito na raiz do projeto e clicar em `generate .editorConfig`  e fazer só alguns ajustes:

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

### Eslint

Instalar eslint:

```
yarn add eslint -D
```

E no terminal executar: 

```
yarn eslint --init
```

E configurar, conforme abaixo:

```
❯ yarn eslint --init             
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? None
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in? JavaScript
? Would you like to install them now with npm? Yes
```

Depois só remover o arquivo package-lock.json pois estamos usando apenas o yarn. e Depois no terminal executar o comando yarn para atualizar as dependências no yarn.lock.

Se ocorrer algum erro no emulador, não tem problema, pode deixar assim por enquanto.

Vamos instalar mais algumas extensões para configurar no eslint.

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Pronto, agora podemos configurar o `.eslintrc.js`.

```
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react', // integração do prettier com react
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint', // para entender as ultimas versões do EcmaScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier', // adicionando mais um plugin
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off', // para garantir que import/export sem ser apenas o i/e default
  },
};
```

E também criaremos o arquivo `.prettierrc` para definir mais algumas [regras](https://prettier.io/docs/en/options.html), :

```
{
	"singleQuote":  true,
	"trailingComma":  "es5"
}
```
Agora toda vez que salvarmos o arquivo o prettier irá trocar as aspas duplas por simples e adicionar `,` em objetos e arrays.

Pronto, agora no App.js você vai ver alguns errinhos e só ajustar conforme a regra do `airbnb` que está no `.eslintrc.js`.

Se depois de toda essa configuração,  o seu projeto apresentar algum erro, basta você fechar a janela do Metro Bundler, e no terminal rodar o comando:

```
react-native start --reset-cache
```

E com isso o Metro Bundler vai abrir novamente  e a aplicação deve voltar a funcionar.

Grande partes dos problemas são resolvidos executando os comandos:

1 - Sempre resolve na grande maioria das vezes.
```
react-native start --reset-cache
```

ou

2 - Se tiver algum erro que com o passo anterior não resolveu, então rode esse comando, para reinstalar o app no seu emulador novamente.
```
react-native run-ios
```

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-04-eslint-prettier-editor-config](https://github.com/tgmarinho/intro-react-native/tree/aula-04-eslint-prettier-editor-config)


## Aula 05 - Configurando o Reactotron

Com React Native temos uma forma de debug com o `console.log` assim como temos no browser.

Só ir no emulador e e com cmd+d ou ctrl+d podemos clicar em debug, e podemos debugar a aplicação no navegador.

Mas no React Native é muito ruim debugar a aplicação desse jeito.

Uma alternativa é utilizar um debugger externo,  o [Reactotron](https://github.com/infinitered/reactotron) que tem uma integração muito com com `console.log`, para aplicações com React e também com Redux, Saga. E sua interface gráfica é muito bonita e rápida. Vale muito a pena utilizar. Funciona na web também, mas não faz muito sentido, apenas se utilizar o Redux, ai faz mais sentido e também vai do gosto do desenvolvedor.

Para instalar basta acessar o repositório oficial do [Reactotron](https://github.com/infinitered/reactotron/releases) e fazer o download do Reactotron.app na sua máquina (linux, windows ou mac).

E para baixar a biblioteca de integração com nosso projeto, executamos no terminal:

```
yarn add reactotron-react-native
```

Tem que ser instalado como dependência de projeto mesmo.

Depois de instalar podemos criar uma pasta `src` e dentro de la uma outra pasta `config` e adicionar um arquivo `ReactotronConfig.js` para configurar o Reactotron.

```
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '127.0.0.1' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}

```

Isso faz com que o Reactotron só funcione em modo de desenvolvimento.
```
if (__DEV__) {...
```

Porém para o eslint não ficar reclamando, temos que declarar essa variavél como global no arquivo `.eslintrc`:

```
...
 globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
...
```

Criamos uma propriedade `tron` dentro do console com as configurações do reactotron para podermos utilizar sem precisar importar em cada código, basta chamar o `console.tron.log('meu log aqui');` e o log será exibindo da interface do Reactotron.
```
console.tron = tron;
```

Toda vez que o Reactotron reinicia eu limpo os logs anteriores, isso não é obrigatório, só por gosto mesmo.
```
 tron.clear();
```

Se estiver usando o emulador do celular tem que passar o `host: 'com_seu_ip_192....'`

```
Reactotron.configure({ host:  '127.0.0.1' })
```

Se estiver no emulador do Android tem que rodar no terminal:
```
adb reverse tcp:9090 tcp: 9090
```

O adb tem que estar na variável de ambiente,  ou pode ir:

```
~/Android/Sdk/platform-tools/adb reverse tcp:9090 tcp: 9090
```

E agora para utilizar mesmo, precisamos chamar a configuração e pode ser no `index.js` que é o `App.js` que renomeie e coloquei na raiz da pasta `src`:

```
import React from  'react';
import { SafeAreaView, StyleSheet, Text } from  'react-native';

import  './config/ReatotronConfig';

console.tron.log('TESTANDO A CONFIG DO REACTTRON')
console.tron.log('TESTANDO A CONFIG DO REACTTRON', 2  +  3);
...
```

![IMAGEM DO REACTOTRON](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/rn-reactotron.png?raw=true)


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-05-configurando-reactotron](https://github.com/tgmarinho/intro-react-native/tree/aula-05-configurando-reactotron)


## Aula 06 - React Navigation

Vamos utilizar o React Navigation para configurar as rota da nossa aplicação de navegação entre telas.

Para utilizar navegação no projeto, precisamos instalar algumas bibliotecas externas do React Native.

```
yarn add react-navigation react-native-gesture-handler react-native-reanimated
```

`react-native-gesture-handler`:  serve para trabalhar com gestos na aplicação

`react-native-reanimated`: serve para fazer animação nas transições das navegações.

No Android precisamos fazer algumas configurações após a instalação do `react-native-gesture-handler`, veja a [doc](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html):

No arquivo a`android/app/src/main/java/com/SEUPROJETO/MainActivity.java` temos que fazer as seguinte configuração:

```
package com.reactnativegithubapi;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactNativeGithubAPI";
  }
  
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

Salvar o arquivo, e se estiver no emulador do Android só rodar:

```
react-native run-android
```

Ou se estiver rodando emulador no iOS, tem que acessar a pasta: `ios`, e executando o comando:

```
pod install
```

Para instalar as dependências nativas, no Android isso é automático.

Depois rodar: 

```
react-native run-ios
```

E aguardar finalizar a build!

Adicionaremos também outra lib, pois tivemos um update no react-navigation que removeu o stack de suas rotas e deixou em uma lib separada: 

```
yarn add react-navigation-stack
```

Vamos criar um arquivo `src/routes.js`:

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;

```

`createAppContainer`:  É como se fosse o BrowserRouter do react-router-dom, que contém as configurações para o roteamento funcionar independente do tipo da rota que estivemos utilizando. Ele engloba todas as rotas.

`createStackNavigator`: Contém um tipo de configuração de rota, ele criar automaticamente um header, e dá para perceber visualmente. mais fácil demonstrar no emulador. Ela é um tipo de navegação de stack (pilha), toda vez que o usuário clica em uma rota, ele vai voltando para a rota anterior que fica salva em um tipo de pilha, a última rota acessada vai ser acessada novamente se o usuário clica no botão voltar por exemplo. CreateStackNavigation é a navegação em pilha, as rotas ficam em background, não são removidas.

Temos também: 

```
import { createAppContainer, createSwitchNavigator } from  'react-navigation';
...
```

`createSwitchNavigator`:  Ele não dá nenhum feedback visual, como o createStackNavigator mostra um header por exemplo. Ele não cria a pilha de rota, se ele navegar da página user para página main, a user é deletada, só se navegar novamente para a rota user para ela existir.

Podemos instalar tambem outra rota:

```
yarn add react-navigation-tabs
```

E utilizar no projeto:

```
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Main,
    User,
  })
);

export default Routes;
```

`createBottomTabNavigator`: Também dá um efeito visual, mostrando um footer, com as rotas em baixo, com o nome das rotas.

```
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createMaterialTopTabNavigator({
    Main,
    User,
  })
);

export default Routes;
```

`createMaterialTopTabNavigator`: Também da um efeito visual, mostrando no header, o nome das rotas e usa uma cor por padrão, no emulador do iOS tem que configurar um SafeView para mostrar corretamente, no Android já fica certo automaticamente até porque o MaterialUI é do Google, assim como o Android, então a integração fica melhor.

Podemos utilizar também react-navigation-drawer, precisamos instalar:

```
yarn add react-navigation-drawer
```
E utilizar: 

```
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createDrawerNavigator({
    Main,
    User,
  })
);

export default Routes;
```

`createDrawerNavigator`: Dá um efeito visual também, onde o usuário pode tocar o dedo no canto esquerdo e arrastar para poder ver as rotas da aplicação.

Na aplicação de exemplo iremos utilizar o `createStackNavigator`:

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;
```

Para adicionar um título no header da rota main, precisamos ir no arquivo Main.js:

```
// ... no final do arquivo adicionar
Main.navigationOptions = {
	title:  'Usuários',
};
```

E para configurar as rotas para seguir um padrão em todos os sistemas operacionais, podemos passar algumas configurações como segundo paramêtro do `createStackNavigator`:

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
```

`headerLayoutPreset` = garante que o título sempre fica no centro.

`headerBackTitleVisible` = Faz com que mostre apenas a "flechinha" de voltar e não a fecha + o título da rota.

`defaultNavigationOptions` = são opções padrões do NavigationOptions, que podemos passar: `headerStyle`, que recebe um `backgroundColor` para cor de fundo. E outra propriedade `headerTintColor` que é a cor das fontes.

Pronto, agora vamos estilizar a página `Main.js`.

Para complementar, leia o artigo: [navegacao-react-native](https://blog.rocketseat.com.br/navegacao-react-native/) da Rocketseat que está excelente e com imagens e gifs para exemplificar melhor.


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-06-react-navigation](https://github.com/tgmarinho/intro-react-native/tree/aula-06-react-navigation)



## Aula 07 - Configurando StatusBar

A [Status Bar](https://facebook.github.io/react-native/docs/statusbar) é onde aparece o horário a o status da bateria do celular, e por padrão ela vei preto no iOS, no Android cinza.
E dependendo do seu layout é interessante que ela fique com outra cor, por exemplo branco.

Para utilizar bastar importar `StatusBar` do propróio `react-native`:

`src/index.js`:

```
import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReatotronConfig';

import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Routes />
  </>
);

export default App;
```

E poderemos ver que o [StatusBar](https://facebook.github.io/react-native/docs/statusbar) ficou branco no emulador, a hora, barra do wifi e da bateria.

Para o Android a gente passa essa configuração a mais:
```
backgroundColor="#7159c1"
```

tem outras propriedades também, só apertar cmd ou ctrl + espaço no componente para ver as opções.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-07-configurando-statusbar](https://github.com/tgmarinho/intro-react-native/tree/aula-07-configurando-statusbar)


## Aula 08 - Styled Components

O Styled Component funciona quase 100% como na Web, salvo algumas alterações. Essa lib é full javascript, então só instalar no projeto com RN e usar.

```
yarn add styled-components
```

Depois de instalar, basta criar um arquivo: `styles.js`:

```
import styled from  'styled-components/native';

export  const Container = styled.View``;
```

Mudou que agora temos que importar o `/native` e também não temos uma `div` e sim uma `View`.  Temos que usar as tags nativas do React Native.

Motivo de usar Styled Component  é poder escrever o CSS igual eu escrevo na web e também reaproveitar o CSS de uma aplicação React  em um app com React Native e apenas mudar os componentes, a mudança é bem menor. E no RN algumas propriedades de estilização são diferentes da web normal mesmo usando o CSS in JS com StyleSheet.

No React Native não tem estilização global igual temos na web, onde estilizamos o body, a div, h1, p no reset. Não tem como estilizar só pelo nome da tag.

O que podemos fazer é criar pequenos componentes e reutilizar em vários lugares.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-08-styled-components](https://github.com/tgmarinho/intro-react-native/tree/aula-08-styled-components)

## Aula 09 - Estilizando Formulário

Vamos desenvolver uma aplicação que consome a API Rest do Github, no formulário ele irá informar o nome do usuário e vamos pegar algumas informações desse usuário e salvar.

Para utilizar ícones no React Native temos que instalar uma lib:

```
yarn add react-native-vector-icons
```

Ela vem com vários ícons legais do MaterialIcons, Font Awesome, etc... pra ver todos [clique aqui](https://oblador.github.io/react-native-vector-icons/).

E com a versão do RN q estou `"react-native":  "0.61.1",`

**Não precisamos** fazer:

```
react-native link react-native-vector-icons
```

Mas [precisamos](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) entrar na pasta do `ios` e executar `pod install`, voltar `cd .. ` e executar `react-native run-ios` na raiz do projeto novamente.

Para utilizar precisamos importar no código, nesse caso estou importando do MaterialIcons.

```
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
```

Sim, esse `Icon.loadFont()`  é obrigatório, se você trocar o MaterialIcons por outra fonte por exemplo:  FontAwesome, esse loadFont() tem que ser chamado novamente, ou seja, é melhor deixar ele no código mesmo que você já tenha executado ele uma vez com uma outra fonte. Interessante colocar essa configuração em um arquivo de configuração, por exemplo: `loadFonts.js`.

E agora só aplicar o Icon no seu código: 

```
...
<SubmitButton>
	<Icon name="add" size={20} color="#FFF" />
</SubmitButton>
...
```

O restante do código está no commit abaixo.

Fonte: [https://www.tgmarinho.com/utilizando-%C3%ADcones-no-react-native-ios/](https://www.tgmarinho.com/utilizando-%C3%ADcones-no-react-native-ios/)


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-09-estilizando-formulario](https://github.com/tgmarinho/intro-react-native/tree/aula-09-estilizando-formulario)

## Aula 10 - Acessando API do Github

Quando o usuário digitar o nome de usuário e clicar no botão ok, temos que pegar os dados dele no github.

Como precisamos gerenciar estados, precisamos converter o stateless component para statefull component usando class ou hooks, nesse primeiro momento vamos usar class.

Como vamos consultar um API externa, então vamos utilizar o axios:

```
yarn add axios
```

Vamos criar uma pasta `services` dentro da pasta `src` e depois configurar a baseUrl da api do github e exportar para podermos fazer as chamadas get.

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
```

Depois adicionamos duas variáveis de estado, newUser para pegar o valor digitado e a users para poder armazenar os usuários.

Crio o método que é chamando quando o usuário clica em `send` ou clica no botão enviar `+`.
Nele pego o usuário digitado e passo para a chamada a api do github, que retorna uma promisse resolvida com os dados no `response`, enfim pego os dados do `response` e guardo no objeto `data`, o qual utilizo para colocar no array de users, criando um novo array passando os valores antigos pelo spred operation e passo o novo valor como segundo parâmetro, e limpo a variável `newUser` para poder digitar novamente.

```
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard } from 'react-native';
import { Container, Form, Input, SubmitButton } from './styles';
import api from '../../services/api';

Icon.loadFont();

class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const { users, newUser } = this.state;
    const response = await api.get(`/users/${newUser}`);
    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({ users: [...users, data], newUser: '' });

    Keyboard.dismiss();
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};

export default Main;
```

Esse código server para fechar o teclado após a operação do método.
```
Keyboard.dismiss();
```

```
// armazena o valor do newUser
value={newUser} 
// a cada alteração no texto é salvo no estado com o novo valor do text
onChangeText={text => this.setState({ newUser: text })} 
// Para o teclado virtual poder submeter o formulário
returnKeyType="send" // 
// Quando clicar em send chamar essa função
onSubmitEditing={this.handleAddUser} //
```
```
  // Chama a função para adicionar o usuário
  <SubmitButton onPress={this.handleAddUser}>
```

Vale ressaltar que toda a chamada a API, o Reactotron faz o log exibe o status e os dados de resposta da requisição, sem precisar ter que colocar o `console.tron.log`.


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-10-acessando-api-github](https://github.com/tgmarinho/intro-react-native/tree/aula-10-acessando-api-github)


## Aula 11 - Estilizando a listagem

Vamos estilizar a Listagem de usuários.

A listagem no RN é diferente da Web porque no RN não tem a tag ul e li e também não fazemos o map. O RN já tem um componente próprio para isso: FlatList.

No mesmo componente do index.js da Main, importamos mais componentes de estilização que criamos.

```
...
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Avatar,
  User,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
...
```

E adicionamos no final do `</Form>`:

```
 <List
   data={users}
   keyExtrator={user => user.login}
   renderItem={({ item }) => (
     <User>
       <Avatar source={{ uri: item.avatar }} />
       <Name>{item.name}</Name>
       <Bio>{item.bio}</Bio>
       <ProfileButton onPress={() => {}}>
         <ProfileButtonText>Ver perfil</ProfileButtonText>
       </ProfileButton>
     </User>
   )}
 />
```

É muito legal ver que os componentes React Native com apenas estilização, sem lógica, e ainda com estilização separada por componente.

Por fim criamos os componentes estilizados:
```
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #6159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
```

Destaque para o atributo:
```
 showsVerticalScrollIndicator: false,
```
Serve para o `FlatList` não mostrar a barra de rolagem, dando uma experiência mais legal no app.

```
...
styled.Text.attrs({
	numberOfLines: 2,
})`
...
```

Serve para cortar o texto em duas linhas e colocar `...` no final.

Confira o resultado até aqui:

![Listagem de Usuários do Github](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/lista-dev-intro-rn.png?raw=true)


Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-11-estilizando-listagem](https://github.com/tgmarinho/intro-react-native/tree/aula-11-estilizando-listagem)


## Aula 12 - Loading e disabled

Vamos colocar um loading quando estiver buscando o usuário na API e diminuir a opacidade do botão, uma vez que no `RectButton` não tem uma opção de `disabled`, então trataremos apenas no visual.

Veja no código fonte!

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-12-loading-disabled](https://github.com/tgmarinho/intro-react-native/tree/aula-12-loading-disabled)

## Aula 13 - Salvando no Storage

Vamos salvar os dados do usuário no storage do celular, de forma que podemos consultar os valores diretamente do celular se ficarmos sem internet poderemos pegar esses dados, deletar, sem problema algum.

Primeiro vamos instalar a lib:
```
yarn add @react-native-community/async-storage  
```

Depois rodar os comandos:

para iOS: 
```
cd ios && pod install & cd ..
react-native run-ios
```
e no Android:
```
react-native run-android
```

`AsyncStorage` é semelhante ao LocalStorage do navegador, e ele é assíncrono então temos que usar `async/await` do Javascript.


Não tem um tamanho limite para salvar no `AsyncStorage`, na verdade dependendo da capacidade de armazenamento do celular do usuário, enquanto estiver espaço em disco, pode armazenar os dados.

Para utilizar é muito simples, basta importar:

```
import AsyncStorage from  '@react-native-community/async-storage';
```

Criar uma constante que armazena uma chave, pois o AsyncStorage é um banco de dados em SQLITE3 ou [https://rocksdb.org/](https://rocksdb.org/) no Android que utiliza chave e valor.

```
const KEY_ASYNC_STORAGE =  '@intro-rn:users:key';
```

E igual na web, utilizamos o ciclo de vida do React:

Sempre que atualizar o estado do array de users, se tiver alteração então altera o valor da chave `KEY_ASYNC_STORAGE` passando o novo array com o dado já atualizado, aqui nesse caso não é imutável, realmente alteramos o valor sem ter que fazer cópia do array, etc, que nem no `this.setState`.

```
  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users !== users) {
      AsyncStorage.setItem(KEY_ASYNC_STORAGE, JSON.stringify(users));
    }
  }
```

E quando fazemos um refresh ou saímos e voltamos para a tela de usuários e componente é montado, então nós buscamos do `AsyncStorage` os dados da chave `KEY_ASYNC_STORAGE` e preenchemos ela no estado de `users`.

```
 async componentDidMount() {
    const users = await AsyncStorage.getItem(KEY_ASYNC_STORAGE);
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }
```

Pronto, agora já temos os dados salvos e podemos alterar, remover, ou adicionar mais, porém em outra chave. 

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-13-salvando-no-storage](https://github.com/tgmarinho/intro-react-native/tree/aula-13-salvando-no-storage)


## Aula 14 - Realizando navegação

Agora, vamos trabalhar com navegação entre rotas, quando o usuário clicar em um botão, vamos redirecionar para outra rota, no nosso app, quando clicar em `VER PERFIL` vamos para outra tela.

No arquivo de `routes.js` no método `createStackNavigator` onde configuramos as rotas da aplicação, ele cria uma `prop` chamada `navigate`.

E a partir dessa prop `navigate` que chamamos as rotas, pois no React Native, não tem um tag `<a href>`  do `html (jsx)` ou `Link` do `react-router-dom`.

Então no botão `ProfileButton` no método `onPress`  passamos o usuário como referência para uma nova função que vai lidar com a navegação:

```
...
<ProfileButton  onPress={() =>  this.handleNavigate(item)}>
...
```

A função `handleNavigate` recebe o usuário, e nós desetruturamos a prop `navigation` de dentro das props e essa prop veio do `routes.js` lá do método `createStackNavigator`. Pegamos o usuário e chamamos a função `navigate` informando a rota `User` que o `routes.js` conhece e passamos os dados do usuário como um objeto:

```
...
  handleNavigate = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
  };
  ...
```

E por fim fazemos que a página `Users.js` receba os parametros que está no navigation:

```
...
export default function User({ navigation }) {
  console.tron.log(navigation.getParam('user'));
  return <View />;
}
...
```
Acessamos os dados chamando a função `getParam` passando a mesma chave `user` que usamos anteriormente.

Pronto, agora os dados do usuário estão logando no Reactotron.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-14-realizando-navegacao ](https://github.com/tgmarinho/intro-react-native/tree/aula-14-realizando-navegacao )


## Aula 15 - Buscando dados da API

Quando usuário clicar em VER PERFIL o componente de usuário vai mostrar o perfil do usuário e vamos buscar os repositórios que o usuário favoritou dando *start*.

Primeiro vamos mostrar o header com o nome do usuário.

```
static navigationOptions = ({navigation}) => ({
  title: navigation.getParam('user').name
});
```

[navigationOptions](https://reactnavigation.org/docs/en/headers.html) é um atributo estático que serve para colocarmos um title no header da tela navegada, entre outras opções.

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
// import { Container } from './styles';
import api from '../../services/api';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }

  render() {
    const { stars } = this.state;
    return <View />;
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
```

Declaramos o `componentDidMount` como metódo async porque depois de montar a tela, o método vai ser chamado pelo React e vai chamar a api do github para buscar os repositórios que o usuário favoritou.

Por fim, apenas verificamos no Reactotron se a API foi chamada, detalhe que não tem o `console.tron.log`, pois quando é feita um chamada a API o Reactotron já faz o log pra gente *automágicamente*.

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-15-buscando-dados-da-api](https://github.com/tgmarinho/intro-react-native/tree/aula-15-buscando-dados-da-api)


## Aula 16 - Listando favoritos

Agora vamos estilizar a página que lista os repositórios favoritos dos usuários.

O trabalho aqui, basicamente é apenas de estilização:

Criou o arquivo `styles.js` dentro da pasta `User`

Importo os novos componentes estilizados na `index.js` do User:

```
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Author,
  Title,
} from './styles';
```

E no método render monto a tela utilizando os componentes:

```
render() {
    const { stars } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
```

Detalhe que estamos utilizando a `FlatList` para poder exibir uma lista dinâmica e *escrolável*.

Pronto, agora só falta o desafio, que será apenas para refinar a aplicação.

Veja abaixo o resultado final até aqui:
 
![It's working](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/react-native-aula-16.gif?raw=true)

Algumas imagens:

![Tela de Usuários](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/list-users-intro-rn.png?raw=true)

![Tela de Repositórios](https://github.com/tgmarinho/Images/blob/master/bootcamp-rocketseat/list-repos-starred-intro-rn.png?raw=true)

Código Fonte: [https://github.com/tgmarinho/intro-react-native/tree/aula-16-listando-favoritos](https://github.com/tgmarinho/intro-react-native/tree/aula-16-listando-favoritos)




Créditos da imagem do [post](https://miro.medium.com/max/720/1*BEWiJlbozw80B7RvgbLmxg.png)

