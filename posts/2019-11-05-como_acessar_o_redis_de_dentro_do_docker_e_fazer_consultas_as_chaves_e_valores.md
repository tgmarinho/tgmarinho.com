---
title: Como acessar o Redis de dentro do Docker e fazer consultas
description: >-
  Vamos conectar com a instância do Redis que está rodando no Docker e consultar
  as chaves para obter seus respectivos valores 
date: '2019-11-05 03:35:13'
image: /assets/img/redis.png
category: dev
background: '#EB7728'
---
## **Conceito**

O [Redis](https://redis.io/) é um armazenamento de estrutura de dados de chave-valor de código aberto e na memória. O Redis oferece um conjunto de estruturas versáteis de dados na memória que permite a fácil criação de várias aplicações personalizadas. Os principais casos de uso do Redis incluem cache, gerenciamento de sessões, PUB/SUB e classificações. É o armazenamento de chave-valor mais conhecido atualmente. Ele tem a licença BSD, é escrito em código C otimizado e é compatível com várias linguagens de desenvolvimento. Redis é um acrônimo de **RE**mote **DI**ctionary **S**erver (servidor de dicionário remoto). ([Fonte](https://aws.amazon.com/pt/elasticache/what-is-redis/)).

Ele amarzena listas (lists), conjuntos (sets), strings, hashes. Ele muito performático, ótimo para ser usado para cache de consultas e gerenciamento de filas de agendamento de Jobs.

## Usando

Na internet tem artigos ensinando a instalar com o Docker. Então depois que instalei eu quero ver as coisas persistidas na memória, ou seja, no banco de dados chave/valor Redis.

Acessando o Redis do docker:

```
docker exec -it redisbarber sh 
```

Pronto agora só eu entrar no CLI do Redis digitando **redis-cli**:

```
/data # redis-cli
```

Se der certo vai aparecer para mim o ip e a porta, e o console esperando eu digitar os comandos:

```
127.0.0.1:6379>
```

Os dois comandos mais úteis para mim até agora foram:

Listar todas a chaves (elas são strings):

```
127.0.0.1:6379> keys *
```

Saída:

1. "bq:CancellationMail:id"
2. "**cache:providers**"
3. ... _OBS: E muitas outras que eu tinha q estou omitindo aqui._

Se eu quiser pegar uma chave específica só digitar KEYS "**nome da chave**":

```
127.0.0.1:6379> KEYS "cache:providers"
```

E para pegar o valor da chave:

```
127.0.0.1:6379> MGET key "cache:providers" 
```

1. (nil)
2. "\[{"id":7,"name":"Augusto Cezar","email":"amarinho@gmail.com","avatar_id":1,"avatar":{"url":"http://localhost:3333/files/a3fcd73a5ea2a69d1add2a47d6ba2c15.png","name":"code-hoc.png","path":"a3fcd73a5ea2a69d1add2a47d6ba2c15.png"}},{"id":8,"name":"Pedro Presta","email":"ppresta@gmail.com","avatar_id":2,"avatar":{"url":"http://localhost:3333/files/667a48e3b15165456142ece1a98b276d.png","name":"code-hoc.png","path":"667a48e3b15165456142ece1a98b276d.png"}},{"id":10,"name":"Thiago Marinho","email":"avatar@gmail.com","avatar_id":19,"avatar":{"url":"http://localhost:3333/files/0b5e3ebfee40c3f96d63ae3368deb846.jpg","name":"tgprofile.jpg","path":"0b5e3ebfee40c3f96d63ae3368deb846.jpg"}}}] .... _mais e mais valores q estou omitindo aqui_"
   127.0.0.1:6379>

_Trouxe um array com vários objetos, para fins de curiosidade ele é o cache de uma consulta que tenho do banco de dados que traz os meus fornecedores. Se quiser um post sobre como lidar com cache no Node usando Redis deixa no comentário: Posta sobre cache com Nodes + Redis._

Então resumindo os comandos são:

```
docker exec -it redisbarber sh 
```

```
/data # redis-cli
```

```
keys *
```

```
KEYS "cache:providers"
```

```
MGET key "cache:providers"
```

Valeu =)
