---
title: Como acessar o Redis de dentro do Docker e fazer consultas as chaves e valores
description: >-
  Vamos conectar com a instância do Redis que está rodando no Docker e consultar
  as chaves e seus respectivos valores 
date: '2019-11-05 03:35:13'
image: /assets/img/redis.png
category: dev
background: '#EB7728'
---
## **Conceito**

O [Redis](https://redis.io/) é um armazenamento de estrutura de dados de chave-valor de código aberto e na memória. O Redis oferece um conjunto de estruturas versáteis de dados na memória que permite a fácil criação de várias aplicações personalizadas. Os principais casos de uso do Redis incluem cache, gerenciamento de sessões, PUB/SUB e classificações. É o armazenamento de chave-valor mais conhecido atualmente. Ele tem a licença BSD, é escrito em código C otimizado e é compatível com várias linguagens de desenvolvimento. Redis é um acrônimo de **RE**mote **DI**ctionary **S**erver (servidor de dicionário remoto). ([Fonte](https://aws.amazon.com/pt/elasticache/what-is-redis/)).

Ele amarzena listas (lists), conjuntos (sets), strings, hashes. Ele muito performático, ótimo para ser usado para cache de consultas e gerenciamento de filas de agendamento de Jobs.



## Usando

Na internet tem artigos ensinando a instalar com o Docker. Então depois que instalei eu quero ver as coisas persistidas na memória, ou seja, no Redis.





Acessando o Redis do docker:

```
docker exec -it redisbarber sh 
```



Pronto agora só eu entrar no CLI do Redis digitando **redis-cli**:

```
/data # redis-cli
```

Se der certo vai aparecer para mim:

```
127.0.0.1:6379>
```

Esperando eu inserir os comandos.

Os dois comandos mais úteis para mim até agora foram:



Listar todas a chaves que são strings:

```
127.0.0.1:6379> keys *
```



Saída:

127.0.0.1:6379> keys *

 1) "bq:CancellationMail:id"

 2) "cache:providers"

3) ... _OBS: E muitas outras que eu tinha q estou omitindo aqui._



Se eu quiser pegar uma chave específica só digitar KEYS "nome da chave":

```
127.0.0.1:6379> KEYS "cache:providers"
```



E para pegar o valor da chave:

```
127.0.0.1:6379> MGET key "cache:providers" 
```



1) (nil)

2) "\[{\"id\":7,\"name\":\"Augusto Cezar\",\"email\":\"amarinho@gmail.com\",\"avatar_id\":1,\"avatar\":{\"url\":\"http://localhost:3333/files/a3fcd73a5ea2a69d1add2a47d6ba2c15.png\",\"name\":\"code-hoc.png\",\"path\":\"a3fcd73a5ea2a69d1add2a47d6ba2c15.png\"}},{\"id\":8,\"name\":\"Pedro Presta\",\"email\":\"ppresta@gmail.com\",\"avatar_id\":2,\"avatar\":{\"url\":\"http://localhost:3333/files/667a48e3b15165456142ece1a98b276d.png\",\"name\":\"code-hoc.png\",\"path\":\"667a48e3b15165456142ece1a98b276d.png\"}},{\"id\":10,\"name\":\"Thiago Marinho\",\"email\":\"avatar@gmail.com\",\"avatar_id\":19,\"avatar\":{\"url\":\"http://localhost:3333/files/0b5e3ebfee40c3f96d63ae3368deb846.jpg\",\"name\":\"tgprofile.jpg\",\"path\":\"0b5e3ebfee40c3f96d63ae3368deb846.jpg\"}},{\"id\":13,\"name\":\"Pedro\",\"email\":\"pedro@gmail.com\",\"avatar_id\":20,\"avatar\":{\"url\":\"http://localhost:3333/files/d91bed34a782b9961085eec7e3f1442a.jpg\",\"name\":\"praia-top.jpg\",\"path\":\"d91bed34a782b9961085eec7e3f1442a.jpg\"}},{\"id\":14,\"name\":\"Lopes\",\"email\":\"lo@gmail.com\",\"avatar_id\":22,\"avatar\":{\"url\":\"http://localhost:3333/files/4cf7b47e4783e3cc38a75281d7cad120.png\",\"name\":\"Festa das Crianc\xcc\xa7as.png\",\"path\":\"4cf7b47e4783e3cc38a75281d7cad120.png\"}},{\"id\":21,\"name\":\"Marco Presta\",\"email\":\"mp@gmail.com\",\"avatar_id\":24,\"avatar\":{\"url\":\"http://localhost:3333/files/be16819407cf02ce3f5105ad507314a6.jpg\",\"name\":\"praia-top.jpg\",\"path\":\"be16819407cf02ce3f5105ad507314a6.jpg\"}},{\"id\":11,\"name\":\"Thiago Demo Prestador\",\"email\":\"thiagoprestademo@gmail.com\",\"avatar_id\":null,\"avatar\":null},{\"id\":9,\"name\":\"Ti\xc3\xa3o Cliente\",\"email\":\"ticlient@gmail.com\",\"avatar\_id\":null,\"avatar\":null},{\"id\":4,\"name\":\"Thiago Marinho\",\"email\":\"tgmarinho\_@gmail.com\",\"avatar_id\":null,\"avatar\":null},{\"id\":1,\"name\":\"Thiago Marinho\",\"email\":\"tgmarinho@gmail.com\",\"avatar_id\":null,\"avatar\":null}]"

127.0.0.1:6379>
