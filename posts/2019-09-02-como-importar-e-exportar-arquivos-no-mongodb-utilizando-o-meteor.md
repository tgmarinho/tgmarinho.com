---
title: Como importar e exportar arquivos no MongoDB utilizando o Meteor
description: Importar/Exportar arquivos no MongoDB utilizando o Meteor para importação
date: '2018-01-04 02:57:00'
thumbnail: /assets/img/ocean.jpg
category: dev
background: '#637a91'
---
Olá, vou começar com o cenário, você desenvolveu uma app TODO que tem uma lista de tarefas com title (título) e description (descrição), você já tinha todas as tarefas no excel (ou em editor de planilha qualquer) e agora quer alimentar seu banco de dados (Documentos) que utiliza o MongoDB.

Você vai no excel ou calc (seu editor de planilha preferido), na linha 1 você deve colocar o nome do atributo da coleção.

![](/assets/img/image_excel.png)

Em seguida, Salvar Como no formato: CSV.

Depois você precisa converter para JSON (fica mais fácil)

Abra o arquivo CSV e copie o conteúdo, acesse o site ([csvjson.com](https://www.csvjson.com/csv2json?source=post_page-----af967319aea1----------------------)) que faz conversão do CSV para JSON.

Coloque o conteúdo do seu CSV no local indicado e clica em “Convert”.

![](/assets/img/site-exemplo.png)

O resultado aparece ali ao lado em JSON, um Array com vários objetos todo, com título e description como atributos.

Faça o download do arquivo (mais rápido) ou selecione tudo (CTRL+A) e copie (CTRL+C) e crie seu próprio arquivo e cole.

Agora vem a parte legal…

Poderíamos usar o comando mongoimport direto para fazer a importação em CSV ou JSON:

```
mongoimport -h localhost:3001 -d meteor -c tasks  --file taks.json 
```

```
mongoimport -h localhost:3001 -d meteor -c tasks  --file taks.json 
```

> h : local do servidor
>
> \-d : seu banco de dados
>
> \-c : A coleção
>
> — type: tipo do formato de arquivos que será importado
>
> — file: nome do arquivo (se estiver executando o comando $mongoimport no mesmo diretório então é só colocar o nome do arquivo mesmo)

Mas ele vai gerar um Id de forma inconveniente para trabalhar. _id: ObjectId(“h1h23h1j2k12h1”)

Então como estou usando Meteor para desenvolver meus projetos, eu prefiro usar o próprio Meteor para ler o arquivo .json e inserir no banco de dados cada item do array, ele gerencia a geração do Id junto com o MongoDB.

Coloco o arquivo csvjson.json (que fiz download no site que converte csv -> json) na pasta private que está na raiz do projeto todo que desenvolvi com Meteor.

Escrevo esse código no main.js que está na pasta server do projeto.

```
// Add new todos
import { Meteor } from 'meteor/meteor';
import { TasksCollection } from 'my/path/to/collections/TasksCollection';


Meteor.startup(function() {
  // esta na pasta private do Meteor     console.log(data.length);
  const data = JSON.parse(Assets.getText('csvjson.json')); 

  data.forEach(item => {
   TasksCollection.add(item);
  });

});
```

E claro que na coleção TasksCollection precisa ter o método add que invoca o insert do Mongo para salvar a tarefa.

```
import { Mongo } from 'meteor/mongo';

const tasksCollection = new Mongo.Collection('tasks');

Object.assign(tasksCollection, {

   add(task) {
    this.insert({ ...task }));
   });

export { tasksCollection as TasksCollection };
```

depois inicia a aplicação:

```
$meteor run
```

e pronto, seus dados estarão no MongoDB.

Cuidado, a cada edição do arquivo se você salvar, o Meteor.startup() será chamado e executará novamente o processo e você vai ter os dados duplicados, então quando executar uma vez e viu que está ok, comente o código ou retire do main.js.

Para exportar suas coleções do MongoDB é extremamente fácil:

```
mongoexport -h localhost:3001 -d meteor -c tasks -o output.json

#remote

#JSON
##Import collection

mongoimport -h database.mlab.com:34212 -d heroku_xxxxxxxx -c <collection> -u <user> -p <password> --file <input file>

##Export collection

mongoexport -h database.mlab.com:34212 -d heroku_xxxxxxxx -c <collection> -u <user> -p <password> -o <output file>

##CSV

##Import collection

mongoimport -h database.mlab.com:34212 -d heroku_xxxxxxxx -c <collection> -u <user> -p <password> --file <input .csv file> --type csv --headerline

##Export collection

mongoexport -h database.mlab.com:34212 -d heroku_xxxxxxxx -c <collection> -u <user> -p <password> -o <output .csv file> --csv -f <comma-separated list of field names>
```



> \-h: servidor
>
> \-d: banco de (documento)
>
> \-c : coleção 
>
> \-o: criação do arquivo de saída que conterá a sua coleção exportada.

Isso ajuda muito quando você precisar importar/exportar arquivos…

Muita gente na comunidade Meteor e Mongo estavam com problemas para importar arquivos por causa do ID, e com Meteor você resolve isso bem rápido e fácil, ainda mais se você já estiver desenvolvendo em Meteor seu projeto com MongoDB.

Referências:

<http://dweldon.silvrback.com/get-text>

<https://docs.meteor.com/api/assets.html>

[https://forums.meteor.com/t/loading-external-json-file-into-a-mongo-collection/1293](https://stackoverflow.com/questions/15329309/how-to-import-mongodb-objectid-from-csv-file-using-mongoimport)

<https://stackoverflow.com/questions/15329309/how-to-import-mongodb-objectid-from-csv-file-using-mongoimport>
