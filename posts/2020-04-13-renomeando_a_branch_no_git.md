---
title: Renomeando a Branch no Git
description: Comandos para poder renomear uma branch local no repositório git
date: '2020-04-13 05:50:50'
image: /assets/img/github-social-code.jpeg
category: git
background: '#7D669E'
---
If you have named a branch incorrectly AND pushed this to the remote repository follow these steps before any other developers get a chance to jump on you and give you shit for not correctly following naming conventions.



1. Rename your local branch.

If you are on the branch you want to rename:



1

git branch -m new-name

If you are on a different branch:



1

git branch -m old-name new-name

2. Delete the old-name remote branch and push the new-name local branch.



1

git push origin :old-name new-name

3. Reset the upstream branch for the new-name local branch.

Switch to the branch and then:



1

git push origin -u new-name
