---
title: Conheçendo a Lib Polished para manipular cores no JS
description: >-
  Achei bem legal aumentar e diminuir o tom de cores com a lib polished, ela
  auxilia bem a estilização de componentes com Styled Components
date: '2019-09-30 04:33:31'
image: /assets/img/javascript.png
category: js
background: '#D6BA32'
---
Achei bem legal aumentar e diminuir o tom de cores com a lib polished, ela auxilia bem a estilização de componentes com Styled Components.

* Instalar 


```
yarn add polished styled-components
```

* Utilizando


```
import styled from 'styled-components';
import { darken } from 'polished';

button {
      background: #7169c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex; 
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#7169c1')};
      }
}
```

Veja funcionando: 

https://youtu.be/CbFMwHvHK1Y


Confira mais no site oficial: https://polished.js.org

[code](https://gist.github.com/tgmarinho/0022665c69c2b1089f6dc1c98fe0df10)
