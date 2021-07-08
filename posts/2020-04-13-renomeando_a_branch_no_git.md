---
title: Renomeando a Branch no Git
description: >-
  Comandos para poder renomear uma branch local e remota no repositório
  git/github
date: '2020-04-13 05:50:50'
image: /assets/img/github-social-code.jpeg
category: git
background: '#7D669E'
---
Se você criou uma branch com nome errada ou simplesmente quiser alterar o nome da branch, é possível.

## Renomeando sua branch local:

Se você já estiver na branch local:

`git branch -m novo-nome-da-branch`

Se você estiver em outra branch e quiser alterar uma outra:

`git branch -m branch-que-quero-alterar novo-nome-da-branch-que-quero-alterar`

Deletando a branch remota  antiga e enviando com o novo nome.

`git push origin :nome-antigo novo-nome`

Mudando a branch para remota para com o nome da branch local

`git push origin -u novo-nome`

**\#git #github**
