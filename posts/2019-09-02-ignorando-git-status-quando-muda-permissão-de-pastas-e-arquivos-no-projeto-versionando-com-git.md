---
title: >-
  Ignorando git status quando muda permissão de pastas e arquivos no projeto
  versionando com git
description: >-
  [LINUX] [GIT] se alguém fizer um chmod 777 -Rf * em um projeto num diretório
  ou mudar para outro tipo de permissão e quiser ignorar isso no git, basta
  rodar esse comando...
date: '2019-09-02 04:16:34'
thumbnail: /assets/img/github-social-code.jpeg
category: dev
background: '#637a91'
---
\[LINUX] \[GIT] se alguém fizer um `chmod 777 -Rf * `em um projeto num diretório ou mudar para outro tipo de permissão e quiser ignorar isso no git, basta rodar esse comando:

```
git config core.filemode false
```

Assim quando você fizer um “git status” não listará essa mudança e não precisa commitar, se foi algo sem querer.

<https://stackoverflow.com/questions/1257592/how-do-i-remove-files-saying-old-mode-100755-new-mode-100644-from-unstaged-cha>
