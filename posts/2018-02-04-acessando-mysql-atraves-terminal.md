---
title: Acessando MySql através do terminal do Ubuntu
description: Acessando MySql através do terminal do Ubuntu
date: '2018-02-04 01:54:00'
image: /assets/img/desert.jpg
category: misc
background: '#D6BA32'
---

Basta digitar o comando: 

```tgmarinho@tgmarinho:~$ mysql -h localhost -u root -p ``` 

Comando **mysql**: **\-h** é o  host, sua máquina localhost
por exemplo. **\-u** é o usuário que está cadastrado para acessar o banco de dados no meu caso é o root **\-p** informando que vc vai passar o password, ou seja, a senha para se conectar no banco de dados (Só preencha a senha quando solicitado).

``` mysql -h localhost -u root -p ```

Na prática: console:

```
tgmarinho@tgmarinho:~$ mysql -h localhost -u root -p 
Enter password: 
 Welcome to the MySQL monitor. Commands end with ; or \\g. Your MySQL connection id is 39 Server version: 5.1.61-0ubuntu0.11.10.1 (Ubuntu) Copyright (c) 2000, 2011, Oracle and/or its affiliates. All rights reserved. Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners. Type 'help;' or '\\h' for help. Type '\\c' to clear the current input statement. 
mysql> AQUI EU FAÇO AS CONSULTAS OU INSTRUÇÕES SQL 

```

_Easyin Easyin, fácin, fácin!!_