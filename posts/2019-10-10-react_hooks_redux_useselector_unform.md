---
title: React Hooks + Redux (useSelector) + Unform
description: Produtividade com React Hooks + Redux (useSelector) e Unform
date: '2019-10-10 10:26:52'
image: /assets/img/praia-top.jpg
category: dev
background: '#EB7728'
---
Está vendo esse layout, é muito fácil alimentar esses campos com [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) + [Redux](https://redux.js.org) + [Unform](https://github.com/Rocketseat/unform)?

![formulário com react hooks](/assets/img/screen_shot_2019-10-10_at_09.37.48.png)

Veja:

![código do formulário com react hooks](/assets/img/screen_shot_2019-10-10_at_09.50.26.png)

É só pegar os dados do **reducer** de **user** usando **useSelector** do **React Redux** (Hooks):

```
const profile = useSelector(state => state.user.profile);
```

Passar para dentro de `initialData={profile}` do Form

Os Inputs precisam ter apenas a propriedade name com o mesmo nomes dos campos que vem da **api** ou dos valores dos **reducers**.

Concluindo, uma vez que você entende os conceitos de **React Hooks**, **Redux** e como usar a nova lib **Unform** de formulários com React Hooks feito Rocketseat, você ganha muito em produtividade mesmo com Hooks já dando muita produtividade e fazendo com que diminuímos a verbosidade na escrita de código, com **Unform** essa verbosidade é menor ainda muita coisa fica abstraída pela biblioteca, e você só pega os dados da api e manda renderizar na tela e pronto, para submeter os dados do formulário também é muito fácil.

Se você entende todo o fluxo do **Redux**, **React Hooks** que no começo é difícil, a produtividade aumenta muito no médio prazo.

Curti demais os hooks e **useSelector** do Redux, e também tem o **useDispatch** que é bem maneiro e facilita mais ainda! Adeus **mapStateToProps**, **mapActionsToProps**, **bindActionCreators**.

Tem outras libs no mercado também que concorrem com [Unform](https://github.com/Rocketseat/unform) cada uma com seu prós e contra:



* [React Hook Form](https://react-hook-form.com/)
* [Redux Form](https://redux-form.com/8.2.2/)
* [Formik](https://jaredpalmer.com/formik/docs/overview)

Se quiser ver a estilização com styled-components desse código: 



Se quiser ver a estilização: <https://gist.github.com/tgmarinho/8ab80ea0951abad6f2069e98e55850f5>

Código do Profile: <https://gist.github.com/tgmarinho/e551383fedbec22d1d5b202e31a0a745>
