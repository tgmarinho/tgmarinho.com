---
title: >-
  Ignorando git status quando muda permissão de pastas e arquivos no projeto
  versionando com git
description: Se alguém fizer um chmod 777 -Rf * em um projeto num diretório ou ...
date: '2019-09-02 04:16:34'
image: /assets/img/linux.jpg
category: dev
background: '#EB7728'
---
\[LINUX] \[GIT] se alguém fizer um `chmod 777 -Rf * `em um projeto num diretório ou mudar para outro tipo de permissão e quiser ignorar isso no git, basta rodar esse comando:

```
git config core.filemode false
```

Assim quando você fizer um “git status” não listará essa mudança e não precisa commitar, se foi algo sem querer.

<https://stackoverflow.com/questions/1257592/how-do-i-remove-files-saying-old-mode-100755-new-mode-100644-from-unstaged-cha>
