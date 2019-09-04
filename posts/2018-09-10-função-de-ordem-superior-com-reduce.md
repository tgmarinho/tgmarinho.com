---
title: 'Função de Ordem Superior com Reduce '
description: Função de Ordem Superior com Reduce — Compose do Recompose
date: '2019-09-10 04:03:00'
thumbnail: /assets/img/high-order-function.png
category: js
background: '#D6BA32'
---
Introdução

Olá, tudo bem? Quero falar de um assunto bem avançado de Javascript.

Motivação

Que Javascript é difícil quando você começa avançar nos estudos nós já sabemos, se você entender o que vou explicar nesse post, interiorizar, saber aplicar, o seu JS é avançado! Pode ter certeza! Me falaram isso, então posso repassar essa afirmação.

Nesse post vamos entender esse algoritmo:

```
const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)))
```

**Pré-requisito**

para continuar lendo:

* Saber o básico de Javascript (const/let/var).
* Conhecer ES06, desestruturação de parâmetros, arrays, funções, arrows functions, HOF, e "só".
* Ser curioso, vontade de aprender, perguntar e dar feedback.

**Caso de Uso**

A função compose é muito útil em aplicações React que usam a lib Recompose para lidar com Smart/Dumb componentes e escrever menos linhas de código. No exemplo abaixo, no final da linha executo o compose que retorna para o BirthdaysContainer o componente puro Birthdays que é apenas a tela de aniversariantes com os dados carregados, data e withApollo. O BirthdaysContainer é usado no Router, e Router renderizado no App.js e assim vai subindo a árvore de componentes do React… Vamos voltar para o assunto, só quis colocar aqui uma vantagem de usar o recompose/compose.

![Exemplo do uso do Compose](/assets/img/code-hoc.png "Exemplo do uso do Compose")

**Explicação**

Leia o código mais uma vez, é meio chato debugar reduce, então vou deixar aqui "mastigado" o que está acontecendo trecho por trecho, qualquer dúvida, sugestão ou correção pode comentar.

```
const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)))
```

Para me ajudar a exemplificar vou criar cinco funções de soma bem simples, que recebem um número como parâmetro e realiza a soma com o valor especificado na função:

```
const add1 = (num) => num + 1;
const add2 = (num) => num + 2;
const add3 = (num) => num + 3;
const add4 = (num) => num + 4;
const add5 = (num) => num + 5;

const compose = (...funcs) =>
   funcs.reduce((a, b) => (...args) => a(b(...args)))

console.log(compose(add1,add2,add3,add4,add5)(5));
```

A função add1 recebe um número e soma por 1, função add2 recebe um número qualquer e soma por 2 e assim sucessivamente para função add3, add4 e add5.

**Compose**

Veja na linha 10 o console.log() que serve apenas para exibir o resultado da chamada da função compose.

Quando o compose é chamado, estou passando para o compose as cinco funções como argumento/parâmetro e como o retorno do compose é uma função então eu passo outro parâmetro (5) para o retorno da função.

Veja o código abaixo, se você chamar só o compose passando uma função, então ele retorna função.

![Exemplo da chamadas de compose.](/assets/img/compose-code.png "Exemplo da chamadas de compose.")

Se você chamar a função e passar um parametro para a função que foi retornada então ele executa a função retornada com o parâmetro informado, no exemplo acima informei 5 e recebi a soma de 5 +1 = 6.

```
const compose = (...funcs) =>  funcs.reduce((a, b) => (...args) => a(b(...args)))
```

Os argumentos que forem recebidos no compose serão desestruturados e será criado um array com todos os parâmetros.

Logo, se eu fizer a chamada como no exemplo abaixo vou ter esse resultado (linha 7):

```
const compose = (...funcs) =>  funcs.reduce((a, b) => (...args) => a(b(...args));

compose(add1, add2, add3, add4, add5)(5);

const compose = (...funcs) => [add1,add2,add3,add4,add5].reduce((a, b) => (...args) => a(b(...args));
```

É por isso que posso usar o reduce, na variável funcs, pois funcs é um array dos parâmetros recebidos.

Esse reduce retorna um HOF.

## (…args) => a(b(…args)

Parametro a é o acumulador e o parâmetro b é o valor atual do array.

Consequentemente o acumulador do A na primeira iteração será primeiro valor do array \[add1] e o valor de B será a segunda posição do array \[add2], pois não foi passado nenhum valor inicial, e o args são os argumentos que a função pode receber.

Reduce reference, consulte a documentação de reduce se tiver alguma dúvida, eu sempre faço isso!

// Reduce / Reduzir

a = acumulador

b = valor atual do array

Como cada elemento do array é uma função ficaria assim a cada interação:

```
// iteração
1: add1(add2(5))
2: add1(add2(add3(5)))
3: add1(add2(add3(5)))
4: add1(add2(add3(add4(5)))
5: add1(add2(add3(add4(add5(5)))))
```

A função foi só resolvendo, não foi chamando, a chamada é depois que termina a iteração e o reduce retorna a função e executa.

Após o final da quinta iteração acima, o reducer retorna o resultado da execução da função, ele vem reduzindo (resolvendo):

```
1: add1(add2(add3(add4(add5(5)))))
2: add1(add2(add3(add4(10)))
3: add1(add2(add3(14)))
4: add1(add2(17))
5: add1(19)
6: // 20
```

Vemos claramente o retorno e chamada da função, função que chama função, função que retorna outra função, ou Função de Ordem Superior (HOF).

Logo o resultado dessa chamada, é o valor 20.

## 5 + 5 = 10 + 4 = 14 +3 = 17 + 2 = 19 + 1 = 20

Pronto, é isso ai! Tudo isso pra isso! rsrs.

A maior complexidade é entender o fluxo do reduce dentro de um array de funções, e o pior que ele retorna uma função, isso é meio mágico e díficil de debugar.

Agora tudo fica mais claro na hora de usar algumas libs famosas e até mesmo desenhar seus próprios sistemas. Essa função usa fortemente o conceito de programação funcional, dá para perceber que ela é bem declarativa, ela vai fazendo sem você dar muitas instruções (imperativo) de como fazer.

É bem complicado e demora para entender no começo mas depois você vai interiorizando, escrevi justamente para eu pegar bem esse conceito e repassar o que tenho aprendido e obter um feedback.

Obrigado por ler, se gostou deixa umas palmas ai!
