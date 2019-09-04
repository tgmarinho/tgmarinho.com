---
title: Básico sobre Composição de Componentes
description: >-
  Em javascript existe o conceito de funções puras, que vem do paradigma da
  programação funcional, conceito é que a função tem que devolver o mesmo
  resultado quando chamada mais de uma vez com os mesmos parâmetros. 
date: '2018-02-04 01:54:00'
image: /assets/img/desert.jpg
category: misc
background: '#D6BA32'
---
Em javascript existe o conceito de funções puras, que vem do paradigma da programação funcional, conceito é que a função tem que devolver o mesmo resultado quando chamada mais de uma vez com os mesmos parâmetros. Ela não depende de nada além dos parâmetros recebidos e não faz uma modificação externa.

Exemplos de Função Pura:

```
const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const subtrair = (a, b) => a-b;
```

você pode chamar:

```
somar(2,3); // o resultado sempre será 5
```

Exemplo de função Impura:

```
const meDeUmNumero = (a, b) => Math.random(a+b); // o resultado será aleatório
```

Tem uma modificação externa de um outro código externo Math que é o objeto com métodos estáticos.

você pode passar até os mesmos parametros sempre, mas o resultado sempre será diferente:

```
meDeUmNumero(1,3); // 0.7790099266309651
```

```
meDeUmNumero(1,3); // 0.6637543698896975
```

```
meDeUmNumero(1,3); // 0.7493726954950461
```

A ideia da composição de componentes é podermos construir componentes mais genéricos (funções puras, responsabilidade única), para que outros componentes possam utilizar.

Exemplo do Botão: `button.js`

Aqui eu crio apenas um simples botão que recebe um children e uma função que é executada quando o usuário clica no botão.

Crio agora outros dois componentes que fazem uso da composição desse Button.

Criamos o arquivo` likeButton.js:`

Criamos outro arquivo `deslikeButton.js;`

Simplesmente estou criando uma composição, onde LikeButton retorna um Button informando os parâmetros que eu quero: a definição da função anônima que exibe um Alert e o texto com nome do botão.

E agora vamos usar no `App.js:`

Veja que a lógica fica escondida no Like e Deslike Buttons e também dentro do próprio Button. Logo o App.js teve componentes compostos de outro componente e cada um com sua responsabilidade única e separada.

Esse é um exemplo básico, mas dá para ter uma ideia do poder dessa metodologia.

Acredito que mais pra frente eu posto outro exemplo mais avançado, assim que ir aprendendo mais sobre esses conceitos dentro do JS e React.

Créditos: Curso de React Ninja do [@fdaciuk](http://twitter.com/fdaciuk)
