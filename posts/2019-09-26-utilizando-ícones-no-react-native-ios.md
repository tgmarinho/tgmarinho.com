---
title: Utilizando Ícones no React Native - iOS
description: Como instalar a biblioteca de ícones no React Native na versão 0.61 para iOS
date: '2019-09-26 06:49:36'
image: /assets/img/react-native.png
category: mobile
background: '#03A9F4'
---
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

Pronto!

Depois vou atualizar para o Android também!

Fonte: https://github.com/oblador/react-native-vector-icons

Kudos para Hugo Duarte e William Amorim que deram uma força!


[Imagem do Post](https://medium.com/react-native-training/best-practices-for-creating-react-native-apps-part-1-66311c746df3) 
