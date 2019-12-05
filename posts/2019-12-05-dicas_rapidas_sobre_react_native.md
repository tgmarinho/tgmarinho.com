---
title: Dicas Rápidas sobre React Native
description: >-
  Algumas dicas rápidas para iniciantes em React Native e recomendação de um
  podcast legal
date: '2019-12-05 09:11:28'
image: /assets/img/mobile_dev.png
category: mobile
background: '#03A9F4'
---
[React Native](https://facebook.github.io/react-native/) trata-se de criar interfaces de aplicações móveis.

Sim, o app se integra com GPS (geolocalização),  mostra mapa na tela, usa alguns sensores do celular, se integra com Redux para gerenciar estados globais, busca dados da API externa, faz várias coisas legais e até complexas, mas tudo se trata de **UI** (Interface Gráfica do Usuário).

Quem faz app com **React Native** está criando interface.

Portanto a primeira **regra** é:

## Interface > Funcionalidade

Interface bonita é mais importante do que tudo estar funcionando. É muito importante que a interface seja muito bonita para manter os usuários engajados no aplicativo.

Se vc não manja de Design, use [React Native Paper](https://github.com/callstack/react-native-paper) (que ele usa Material Design), fuja do [Native Base](https://nativebase.io/)  pq é verboso d+,  e tente [React Native Elements](https://react-native-elements.github.io/react-native-elements/) que é legalzinho, mas o _**Paper**_ é o melhor dentre os três. O melhor mesmo é você estilizar seguindo um protótipo de um designer, eu fiz isso nesse app: <https://github.com/tgmarinho/BmiCalculatorRN> eu segui o design do [dribbble](https://dribbble.com/shots/4585382-Simple-BMI-Calculator).

## **Expo x CLI**

[Expo](https://expo.io/) é massa pra [começar](https://blog.rocketseat.com.br/expo-react-native/), funciona com mapa, câmera, geolocalização, sensores, só não funciona bluetooth (quem usa isso?).

Compensa usar EXPO para projetos de escopo fechado, que são pequenos, e para MVP. Exemplo Rocketseat Experience, que é apenas um CRUD dá pra fazer com Expo, o Skylab não dá pra fazer com expo e tem q partir para [CLI do RN](https://facebook.github.io/react-native/docs/getting-started). A configuração de Build, de ícone e splash screen é muito rápido com expo. Mas também já ouvi histórias de aplicativos de suce$$o que estão usando expo até hoje.

## Como testar o app?

Como se trata de interface, podemos usar um [Storybook](https://storybook.js.org/) para ver como está a UI, podemos testar em vários celulares, e também se não tivermos como buildar o aplicativo para iOS porque está programando no Windows ou Linux, podemos usar o [Appcenter](https://appcenter.ms/apps) para gerar o build e instalar no celular (iphone) de um amigo ou no seu mesmo.

## **Especialização**

Quer se especializar em RN, então estude sobre construção de interface de usuários (UI) e acessibilidade. Saber bem HTML, CSS ajuda muito, ainda mais se você usar a biblioteca [styled-components](https://www.styled-components.com/) que funciona para React Native, é um ganho em produtividade, pois irá reaproveitar muito o seu conhecimento da web.

Para fazer um mesmo componente com características diferentes em relação aos ambientes iOS e Android é bem fácil, basta mudar o o nome para `index.android.js` para o Android e `index.ios.js` para iOS, e o aplicativo saberá na hora de criar um build separar o que é do Android e o que é do iOS. Veja um exemplo:[ https://github.com/tgmarinho/gobarberRN/tree/master/src/components/DateInput](https://github.com/tgmarinho/gobarberRN/tree/master/src/components/DateInput). Veja o DatePicker no iOS: <https://youtu.be/mGDstIZzmQs?t=17> 



## Configuração de Ambiente

É uma dor no React Native configurar ambiente em máquina Linux e Windows, no Macbook é chatinho mas é bem mais rápido pela facilidade da própria arquitetura do macOS. Mas a Rocketseat elaborou uma doc muito boa em português e ainda colocaram algumas experiências para resolver alguns problemas de iniciantes. Confira: <https://docs.rocketseat.dev/>



## Leia a DOC do React Native

Está começando? Leia a **DOC**umentação, ela é a fonte oficial da tecnologia, concordo que as vezes um terceiro produz conteúdos melhores do que o próprio desenvolvedor da ferramenta e tals, mas na documentação oficial pode ter nuances legais que podem te ajudar bastante. Se você já fez um projeto básico em RN ou até mesmo intermediário, através de um curso ou tutorial, tente ler você mesmo a DOC e aprender com ela, você vai se sentir melhor e estará amadurecendo (se tornando Senior) mais também.

## Tarefa

1. [Ler a Doc do React](https://pt-br.reactjs.org/docs/getting-started.html)
2. [Ler a Doc do React Native](https://facebook.github.io/react-native/)
3. [Compartilhar esse post](<http://twitter.com/share?text=Curti esse post do @tgmarinho sobre React Native&url=https://www.tgmarinho.com/dicas_rapidas_sobre_react_native/&hashtags=reactnative, soudev, mobile>) =P

Quer tirar mais insights legais? ouça o podcast [\#Faladev](https://www.youtube.com/watch?v=fO9RetLv8gs) da @Rocketseat

[Rocketseat](https://rocketseat.com.br/) pra mim hoje é melhor empresa/comunidade que cria conteúdos pagos e gratuitos sobre **React Native**. Vale a pena acompanhar. 

**\#RNFACIL**

- - -

[Créditos da Imagem](https://miro.medium.com/max/1000/1*MzlHsDKB_w3bljP6AS07Vg.jpeg)
