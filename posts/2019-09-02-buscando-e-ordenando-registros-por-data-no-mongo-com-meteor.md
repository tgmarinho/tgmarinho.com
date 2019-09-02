---
title: Buscando e Ordenando registros por data no Mongo com Meteor
description: Buscando e Ordenando registros por data no Mongo com Meteor
date: '2018-09-04 03:27:00'
thumbnail: /assets/img/mountains.jpg
category: dev
background: '#637a91'
---
É algo bem simples, porém pode dar problema para iniciantes, mesmo com experiência com Mongo, eu comecei com Mongo esse ano, então estou publicando essa dica até para deixar um registro aqui, pois é difícil encontrar isso em português ou até de forma clara para iniciantes.

Eu tentei executar essa consulta no [Robo3T](https://robomongo.org/):

```
db.getCollection(‘members’).find({ status: { $eq: true }, birth: { $ne: null} }).sort({ birth: 1 })
```

ele me trouxe o resultado esperado: todos os membros ativos, com data de aniversário preenchido, e ordenado por ordem do menor para o maior (ascendente).

Entretanto, quando coloquei no projeto a consulta:

```
async birthdays(root, args) {

return MembersCollection.find({ status: { $eq: true }, birth: { $ne: null } }).sort({ birth: 1 }).fetch();

}
```

Não fez a consulta e não apareceu um erro no servidor, apenas na tela, mas devido o retorno da função ter chegado undefined no cliente e ter feito `data.length` para ver o tamanho do array de aniversariantes, e como não tem como fazer undefined.length o erro ocorre, pois não tem a propriedade length de undefined (típico erro no JS).

O Meteor tem o seu próprio Mongo, com alguns métodos um pouco diferente do MongoDB, então para fazer um **sort** no Meteor tem que ser com essa sintaxe:

```
// Sorted by \`createdAt\` descending.

Users.find({}, { sort: { createdAt: -1 } });

E no meu projeto tem que ficar assim:

async birthdays(root, args) {

return MembersCollection.find({ status: { $eq: true }, birth: { $ne: null } }, { sort: { birth: 1 } }).fetch();

}
```

Uma simples mudança de sintaxe gerou um probleminha para ter que ir no Google achar a solução.

Então fica a dica, sempre consulte a documentação do MongoDB e Meteor quando estiver com algum problema com as suas queries.

Referências:

<https://docs.mongodb.com/manual/reference/method/cursor.sort/>
