---
title: Utilizando ícones do react-native-vector-icons no React Native - ANDROID
description: >-
  Como instalar a biblioteca react-native-vector-icons no React Native na versão
  0.61 para Android
date: '2019-10-27 12:03:59'
image: /assets/img/react-native-header.png
category: mobile
background: '#03A9F4'
---
Para utilizar ícones no React Native temos que instalar a lib:

```
yarn add react-native-vector-icons
```

Ela vem com vários ícones legais do MaterialIcons, Font Awesome, etc... pra ver todos [clique aqui](https://oblador.github.io/react-native-vector-icons/).

E com a versão do RN q estou utilizando`"react-native":  "0.61.1",` (Fast Reload \o/)

**Não precisamos** mais fazer:

```
react-native link react-native-vector-icons
```

Mas [precisamos](https://github.com/oblador/react-native-vector-icons#android) editar o arquivo: 
```
android/app/build.gradle
```

Mas NÃO o arquivo `android/build.gradle`, cuidado tem dois, é o q está no */app/*.


Só adicionar essa linha no final do arquivo:

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Ou se você quiser selecionar as fontes especificamente, o que eu recomendo:

```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Para utilizar precisamos importar no código, nesse caso estou importando do MaterialIcons.

```
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
```

Sim, esse `Icon.loadFont()` é obrigatório, se você trocar o MaterialIcons por outra fonte por exemplo:  FontAwesome, esse loadFont() tem que ser chamado novamente, ou seja, é melhor deixar ele no código mesmo que você já tenha executado ele uma vez com uma outra fonte. Interessante colocar essa configuração em um arquivo de configuração, por exemplo: `loadFonts.js`.

Agora só aplicar o `Icon` no seu código: 

```
...
<SubmitButton>
   <Icon name="add" size={20} color="#FFF" />
</SubmitButton>
...
```

Pronto! 

Esse foi tranquilo, Aqui no meu celular rodou perfeitamente! =)


Fonte: https://github.com/oblador/react-native-vector-icons


[Imagem do Post](https://medium.com/react-native-training/best-practices-for-creating-react-native-apps-part-1-66311c746df3) 
