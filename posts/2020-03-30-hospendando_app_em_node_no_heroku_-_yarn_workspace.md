---
title: Hospendando App em Node no Heroku - Yarn Workspace
description: >-
  Vamos ver como hospedar uma simples aplicação Node com Monorepo usando Yarn
  Workspace no Heroku
date: '2020-03-30 10:19:08'
image: /assets/img/heroku.png
category: dev
background: '#EB7728'
---
Se você já tiver uma aplicação **monorepo** no [**Github**](http://github.com) e quiser hospedar no [Heroku](https://dashboard.heroku.com/login), Você precisa criar a aplicação Node lá no [Heroku](https://dashboard.heroku.com/login) mesmo.

Na interface do Heroku vc precisa ir em Settings (configuração) e adicionar um **Buildpack: heroku/nodejs**

Se você tiver variáveis de ambiente no projeto, você deve colocar elas no **Config Vars** na aba **Settings** também.

Agora lá no código da aplicação, na raiz do projeto você deve colocar um arquivo **Procfile**:

```
web: yarn workspace backend prod
```

Você deve colocar esse `web:` e depois o comando que você executa o seu backend. Lembra que esse código vai ser executado na raiz do seu projeto, portanto você deve rodar igual o comando acima, usando yarn workspace o nome da pasta da sua aplicação node e o script de produção, eu coloquei `prod` pq o `start` está com `nodemon` para ambiente de desenvolvimento.

Basta ver ver o `package.json` dentro da pasta backend.

Pela própria interface gráfica do Heroku no site, se a aplicação estiver no Github (mesmo que privado), é só clicar no botão Deploy na branch master ou outra branch q vc estiver usando em produção.

Com isso já vai estar executando: <https://be-the-super-hero.herokuapp.com/ongs>

Veja: <https://github.com/tgmarinho/be-the-hero>

Se vc nunca vez o host no heroku veja esse vídeo da Rocketseat: <https://www.youtube.com/watch?v=-j7vLmBMsEU>

E ai curtiu?
