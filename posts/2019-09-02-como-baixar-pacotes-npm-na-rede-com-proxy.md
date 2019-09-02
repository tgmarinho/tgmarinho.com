---
title: Como baixar pacotes npm na rede com proxy
description: Baixando pacacotes npm dentro de uma rede com proxy
date: '2018-09-01 01:43:00'
thumbnail: /assets/img/cienciada.jpg
category: dev
background: '#637a91'
---
Eu fiz um git clone de um projeto com pacotes do npm, e quando fiz npm install, recebi mensagem de erro:

```
npm ERR! code SELF_SIGNED_CERT_IN_CHAIN
```

```
npm ERR! self signed certificate in certificate chain
```

```
npm ERR! A complete log of this run can be found in:
```

```
npm ERR! /home/tgmarinho/.npm/_logs/2018–01–09T13_25_08_875Z-debug.log
```

A solução foi executar o comando:

```
npm config set strict-ssl false
```

E ai depois:

```
npm install
```

E pronto, consegui baixar as dependências do projeto!
