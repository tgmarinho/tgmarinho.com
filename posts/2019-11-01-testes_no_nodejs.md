---
title: Testes no NodeJS
description: Minhas notas de aula sobre o módulo de Testes do Bootcamp da Rocketseat
date: '2019-11-01 10:49:14'
image: /assets/img/simple_banner_linkedin_post_header.png
category: dev
background: '#EB7728'
---

# Testes e TDD

O que vamos aprender?

* Conceitos básicos de testes e TDD
* Configuração do Projeto backend com NodeJS
* Configuração do framework Jest
* Configuração de variáveis de ambiente para teste e desenvolvimento
* Testaremos criação de email, email duplicado, criptografia de senha e iremos gerar dados aleatórios com a lib faker


# Conceitos de Testes


## Por que testar e otimizar testes?

Para garantir que tudo vai continuar funcionando a cada alteração no sistema.

Um projeto pequeno fica fácil alterar ir na tela e testar o fluxo da aplicação, mas agora um projeto com mais de 20 models, 20 controllers, com várias regras de sistema, fica difícil e é um tempo que o desenvolvedor perde


## Tipos de testes?

 - Testes unitáros:
	 - Testam uma função mínima e pura, que não realiza efeitos colaterais como acessos ao banco de dados ou integração a API externas.
- Testes de integração
	 - Os principais testes do backend, testam funcionalidades completas como acesso às rotas até o retorno do controller. (uso de mocks para retorno estático dos resultados)
	 - teste E2E 
		 - Testes de interface que simulam o acesso ao usuário


# TDD

Test Driven Development - Desenvolvimento Dirigido a Testes

- Criar o teste antes da funcionalidade
- Falha -> Sucesso -> Refatorar
- RED -> GREEN -> REFACTOR

Criar o teste antes dá um norte para ter noção do que vc espera que aconteça.

Facilita a visualização das regras de negócio.

# Code Coverage

- O que testar? Testei suficiente? Falta algo?
- Code Coverage coleta informações das linhas de código que seus testes atuais não alcançaram.

Essa ferramenta mostra o quanto seu código está sendo coberto de testes, o ideal é manter o máximo possível de cobertura de testes na aplicação. Acima de 80% é aceitável.


# Ferramenta - JEST

Ferramenta de testes criada pelo Facebook, ela pode ser considerada uma framework pois abrange várias áreas de testes na aplicação.

Existe várias ferramentas para cada tipo de teste, mas com Jest funciona fullstack e uma lib para tudo, para code coverage integrado, multi-thread integrado, asserções, etc.


## Aula 02 - Configurando o projeto


Primeiro instalo a lib [@rocketseat/omni](https://www.npmjs.com/package/@rocketseat/omni) que é uma ferramenta interna da Rocketseat para criar projetos Node, Web e Mobile.

```
yarn  global add @rocketseat/omni
```

Feito isso agora só usar:

```
omni init tests-node --only=server
```

Com esse comando estou inicializando um novo projeto chamado tests-node e para criar apenas a estrutura de server, ou seja vou testar só o backend a parte do servidor com NodeJS.

E ele cria toda a estrutura de pastas, configuração do eslint e outras libs que estão no package.json.

Depois eu criei um arquivo `.env` da raiz do projeto: `server/.env` e configurei as propriedades.

Descomentei e apaguei os comentários do arquivo app.js:

No arquivo app.js:
```
// Uncomment this line to enable database access
// --------
// import './database';
```

deixei assim:
```
import  './database';
```

Código: [https://github.com/tgmarinho/tests-node/tree/aula-02-configurando-projeto](https://github.com/tgmarinho/tests-node/tree/aula-02-configurando-projeto)

## Aula 03 - Configurando Jest

Vamos usar o [Jest](https://jestjs.io/) para fazer testes da aplicação.

Vamos instalar:

```
yarn add jest -D
```

Depois executando o comando:

```
yarn jest --init
```

Minhas configurações (veja no commit o arquivo todo, está no final dessa seção):
```
❯ yarn jest --init
yarn run v1.12.0
$ /Users/tgmarinho/Developer/bootcamp_rocketseat_studies/testes/tests-node/server/node_modules/.bin/jest --init
✔ It seems that you already have a jest configuration, do you want to override it? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Automatically clear mock calls and instances between every test? … yes

📝  Configuration file created at /Users/tgmarinho/Developer/bootcamp_rocketseat_studies/testes/tests-node/server/jest.config.js
```

a CLI do Jest vai criar o arquivo `jest.config.js` na raiz do projeto.

Crio um pasta `__tests__` na raiz do projeto, onde ficaram todos os arquivos de testes da aplicação.

Instalei o Sucrase Jest para poder ter o import/export nos testes.

```
yarn add --dev @sucrase/jest-plugin
```

E altero o arquivo `jest.config.js` :
```
bail:  1,
collectCoverage:  true,
collectCoverageFrom: ['src/app/**/*.js'],
coverageReporters: ['text', 'lcov'],
coverageDirectory:  '__tests__/coverage',
testMatch: ['**/__tests__/**/*.test.js'],
// A map from regular expressions to paths to transformers
transform: {
'.(js|jsx|ts|tsx)':  '@sucrase/jest-plugin',
},
```

E no arquivo nodemon.json altero também para não ficar executando o teste a cada alteração em desenvolvimento na parte do servidor.

```
{
  "execMap": {
    "js": "sucrase-node"
  },
  "ignore": ["__tests__"]
}
```

E agora antes de escrever os testes, eu baixo os types do jest para poder ter o intellisense do jest no projeto:

```
yarn add -D @types/jest 
```

Agora o VSCode conhece os comandos do Jest para escrever teste: `test`, `describe`, `expect`, etc..


Criamos o  arquivo `example.test.js` na pasta `__tests__`:

A estrutra de um teste é:

```
test('', () => {}) 
```

Função global `test` do JEST que executa um teste, primeiro parâmetro é o nome do teste e o segundo é o teste em si.

Então ficaria assim, o título pode ser em português ou inglês, dependendo do projeto e time que vc está, e deve ter uma descrição fiel ao que o teste pretende fazer/testar.

```
test('se eu chamar a rota /authenticate como um usuário válido, ela deve retornar um token JWT', () => {});
```

Eu geralmente escrevo em inglês mesmo:

```
function sum(a, b) {
  return a + b;
}

test('if I call sum function with 4 and 5 it should return 9', () => {
  const result = sum(4, 5);
  expect(result).toBe(9);
});
```

Executo o teste para ver se está tudo ok:

```
yarn start 
```

Se passou, ok, e deve ter passado pq a configuração está correta,  e `4 + 5` é `9` até hoje (funções puras, dados as mesmas entradas sempre devem retornar a mesma saída)!!! =)

Vamos ver alguns testes mais avançados e usar o TDD na próxima aula.

Código: [https://github.com/tgmarinho/tests-node/tree/aula-03-configurando-jest](https://github.com/tgmarinho/tests-node/tree/aula-03-configurando-jest)


## Aula 04 - Variáveis de Ambiente

* Crio um arquivo `.env.test` para salvar as configurações das variáveis de ambiente em modo de teste.
* Em ambiente de teste iremos usar o banco [sqlite](https://www.sqlite.org/index.html)
* Crio um arquivo bootstrap.js na raiz do projeto para se executado antes de tudo na aplicação, para poder ler o .env baseado no NODE_ENV que está sendo informado
*  No arquivo app.js e database.js eu importo o .bootstrap.js para executar.
* No arquivo package.json eu configuro a NODE_ENV para test quando executo o script de teste: `"test":  "NODE_ENV=test jest"`

Executo o teste para ver se está tudo ok:

```
yarn start 
```

Código: [https://github.com/tgmarinho/tests-node/tree/aula-04-variaveis-ambiente](https://github.com/tgmarinho/tests-node/tree/aula-04-variaveis-ambiente)


## Aula 05 - Teste de criação de usuário

* Criei um migration para cadastro de usuário:
```
yarn sequelize migration:create --name=create-users        
```
* Configurei a migratrion da tabela users
*  Alterei o bootstrap, com import/export não estava funcionando:

```
require('dotenv').config({
	path:  process.env.NODE_ENV  ===  'test'  ?  '.env.test' :  '.env',
});
```

* No package.json criei dois scripts:

```
"pretest": "NODE_ENV=test sequelize db:migrate",
"test": "NODE_ENV=test jest",
"posttest": "NODE_ENV=test sequelize db:migrate:undo:all"
```

Quando eu rodo `yarn test` o `pretest` é executado primeiro criando as migrations dentro do sqlite depois o test é executado e por fim o `posttest` é executado excluindo todas os dados do sqlite.

* Instalei a lib: `yarn add sqlite -D`
* Executei `yarn test` para conferir
* Criei o Model de User na pasta app/models. E executei `yarn test`, tudo deu certo mas já vimos no test coverage que meu novo código User.js não está coberto por testes, vamos testar então.
* Criei a pasta `integration` dentro de `__tests__` e o arquivo `user.test.js` dentro da nova pasta.
* Instalei a a lib supertest para fazer as chamadas a API para cadastrar usuário, ela tem alguns recursos a mais para testes:
```
yarn add supertest -D
```
* Vamos testar o cadastro do usuário e para isso acontencer, temos que simular o Insomnia ou até mesmo o frontend, chamando a o servidor na rota de cadastro de usuários que chama o controller e o controller chama a função do Model de User que salva o usuário no banco de dados.
Como estamos fazendo um TDD, nada disso ainda existe, então no arquivo de teste vamos escrever para falhar, ou seja, vamos declarar tudo que esperamos e depois escrever para funcionar, como estou escrevendo o que espero, e vai falhar, vou criando aos poucos o que eu preciso para o teste passar, passo a passo.

arquivo de teste `user.test.js`:

```
import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Thiago Marinho',
        email: 'tgmarinho@gmail.com',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});
```

Usei o describe pra categorizar o teste, nesse caso tudo que estiver abaixo do describe('User') ... será referente a teste no cadastro de User.

Usei o `it()` ao invés do `test()` por uma questão de semântica, como escrevo em ingles, fica legal usar o `it()`. ` it('should be able to register'` Para quem sabe o básico de inglês, entende que o 'it' deve estar na frente do texto para referir a alguma coisa. `Isto deve ser capaz de registrar` é o que seria uma tradução válida para o texto em inglês.

Esse teste vai falhar porque estou querendo fazer uma requisição usando o supertest, no servidor que importamos do app, fazendo um post na rota /users, enviando os dados na requisição com send.

eu espero que a resposta tenha uma propriedade ID, isto é, quando eu chamo essa rota, o controller chama o model, e model salva o usuário e retorna o id, que é passado para o response.body.

```
 expect(response.body).toHaveProperty('id');
```
Só que ainda não tenho rota, nem controller, então deu falha, para funcionar vamos lá implementar a rota e controller.


Lá no arquivo routes:

```
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/users', (req, res) => {
  return res.json({ id: 1 });
});

export default routes;
```

Agora eu tenho a rota e estou retornando um json com id: 1, eita eu to roubando agora, pq eu na verdade queria que fosse no banco de dados e salvasse o usuário, bom nesse caso, eu tenho q testar pouco a pouco, veja que agora o resultado deu certo, se executar o test ele passa. Isso quer dizer que pelo menos a rota está funcionando. Vamos para o restante.

Crio o UserController.js
```
import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
```

E uso na rota:

```
import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
```

Executo `yarn test` e pronto mesmo resultado, agora sim salvou o usuário no banco de dados =)

E podemos ainda ver a cobertura de códigos acessando o arquivo index.html na pasta /coverage/Icon-report/index.html e ter um visual bem legal.


Código: [https://github.com/tgmarinho/tests-node/tree/aula-05-teste-de-criacao-usuario](https://github.com/tgmarinho/tests-node/tree/aula-05-teste-de-criacao-usuario)


## Aula 06 - Email duplicado

Agora vamos testar se o usuário está cadastrando o mesmo email mais de uma vez.

Vamos escrever um teste que falha:

```
it('should not be able to register with duplicate email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Thiago Marinho',
        email: 'tgmarinho@gmail.com',
        password_hash: '123456',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'Thiago Marinho',
        email: 'tgmarinho@gmail.com',
        password_hash: '123456',
      });

    expect(response.status).toBe(400);
  });
```

Executo o test e vai falhar, pq vai dar certo o cadastro de email duplicado, agora vamos fazer dar certo, vamos implementar no controller de usuário.

```
...
async store(req, res) {
   const { email } = req.body;

    const checkEmail = await User.findOne({ where: { email } });

    if (checkEmail) {
      return res.status(400).json({ error: 'Duplicated email' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
...
```

Rodei o teste e ainda falhou, mas foi pq ainda tinha registros no banco de dados, eu tenho que zerar o banco a cada teste então preciso criar um truncate.

```
import database from '../../src/database';

export default function truncate() {
  return Promise.all(
    Object.keys(database.connection.models).map(key => {
      return database.connection.models[key].destroy({
        truncate: true,
        force: true,
      });
    })
  );
}
```

Estou importando o database e pegandos os nomes de cada model e percorrendo cada um para destruir os registros de cada model que eu tiver de forma forçada mesmo se tiver relacionamentos.

E por fim, no teste:

```
import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  // ... teste anterior
  
  it('should not be able to register with duplicate email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Thiago Marinho',
        email: 'tgmarinho@gmail.com',
        password_hash: '123456',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'Thiago Marinho',
        email: 'tgmarinho@gmail.com',
        password_hash: '123456',
      });

    expect(response.status).toBe(400);
  });
});
```

Agora uso uma função beforeEach que executa toda vez antes de cada teste executar. E agora assim os dados serão deletados da tabela.


Código: [https://github.com/tgmarinho/tests-node/tree/aula-06-email-duplicado](https://github.com/tgmarinho/tests-node/tree/aula-06-email-duplicado)



## Aula 07 - Criptografia de senha

Agora vamos testar se a senha que o usuário está informando bate com o hash que foi salvo no banco de dados.

Vamos usar a lib bcryptjs para fazer a criptografia de senha e usarmos outras funções relacionadas:

```
yarn add bcryptjs                   
```

Crio o teste que falha:

```
 it('should encrypt user password when neh user is created', async () => {
    const user = await User.create({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });
```
Não tenho o campo password e tbm e não estou gerando o hash das senhas.

Eu comparo se a senha informada é a mesma que temos no hash, como o 123456 não é um hash, e sim a senha do usuário isso não dá certo, eu tenho que gerar o hash de 123456  e comparar com o hash da senha.
Eu tenho que salvar a senha do usuário em formato de hash.

Vamos criar no Model User o hook que faz isso .

```
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
}

export default User;
```

Agora antes de salvar no banco, eu pego a senha que o usuário informou no password, e gero o hash usando bcrypt.hash e guardo no user.password_hash.

password_hash é armazenado no banco, o password não.

Se eu rodar o teste agora ele passa!

Depois para concluir eu alterei no teste tudo que estava com `password_hash:  '123456',` passei para `password:  '123456',`.


Código: [https://github.com/tgmarinho/tests-node/tree/aula-07-criptografia-senha](https://github.com/tgmarinho/tests-node/tree/aula-07-criptografia-senha)


## Aula 07 - Gerandos dados aleatórios

Todos os testes estamos usando o mesmo dados ficticios, é legal usarmos dados aleatórios e usar uma lib para isso..

Dentro da pasta útil eu crio um arquivo  factories.js na pasta __tests__.

E instalo duas libs para gerar os dados fake:

```
yarn add factory-girl faker -D
```

No arquivo `factories.js`:

```
import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../../src/app/models/User';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
```

Eu importo o factory-girl que 
import também o factory que contém vários dados fake para cada tipo de entrada (campo) que precisarmos, como email, nome completo, password, datas, etc.

Uso o factory com a função `define` passando o nome do Model e o Model que inclusive importei, e passo os dados dos atributos do model e os dados que eu quero gerar com a lib faker.

E agora import o o factories no teste e posso substituir o nosso create.

Agora posso trocar :
```
   const user = await User.create({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456',
    });

```
Por:
```
 const user = await factory.create('User', {
      password: '123456',
    });
```

Só passo o password para ele não gerar um aleatório no primeiro teste poir precisamos comparar com a mesma senha que foi criado o usuário, mas nos outros testes não precisa.


Agora só rodar o teste novamente: `yarn test` e tudo deve passar.

Como tudo deu certo, podemos usar o factory para os outros campos, e agora sim! Tudo pronto, refatorado, automatizado, nem precisamos de ter mais criatividade para criar tantos dados fakes para teste na mão, faker já faz isso pra gente e o factory cria o User com o model User para gente.

Nosso primeiro teste usando factories ficou assim:

```
it('should encrypt user password when neh user is created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });
```

Agora vamos para o segundo teste, não queremos criar um registro no banco usando o factory, apenas passar alguns dados e verificar se o body da resposta tem a propriedade id, quem vai salvar o usuário é a aplicação e não o factory dessa vez. O código ficou assim:

```
  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });
```

Criei um user fake pegando apenas os atributos e valor do faker e coloquei no const user e usei esses mesmos dados para enviar para requisição.

Por fim o teste ficou bem mais enchuto e menos verboso:

```
import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';
import truncate from '../util/truncate';
import factory from '../factories';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password when neh user is created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicate email', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(400);
  });
});

```

Código: [https://github.com/tgmarinho/tests-node/tree/aula-08-gerando-dados-aleatorios](https://github.com/tgmarinho/tests-node/tree/aula-08-gerando-dados-aleatorios)

Fim da introdução a tests com NodeJS.




Imagem de  [Mudassar Iqbal](https://pixabay.com/pt/users/kreatikar-8562930/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3418123)  por  [Pixabay](https://pixabay.com/pt/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3418123)
