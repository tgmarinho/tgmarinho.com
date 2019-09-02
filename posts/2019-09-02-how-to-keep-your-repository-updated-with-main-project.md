---
title: How to keep your repository updated with main project
description: How to keep your repository updated with main project
date: '2019-09-02 01:49:01'
thumbnail: /assets/img/github-social-code.jpeg
category: dev
background: '#637a91'
---
![github social coding](/assets/img/github-social-code.jpeg)



Hello, follow this **step-by-step**:

Add a new remote, you can call it ‘upstream’:

```
git remote add upstream https://github.com/user/project.git
```

Receive all the branches of this new remote like the ‘upstream/master’ for example:

```
git fetch upstream
```

Make sure if you are in the branch master:

```
git checkout master
```

Rewrite your branch master, the way which yours commit which aren’t in the main project appear and your commits stay top of the list.

```
git rebase upstream/master
```

If you don’t want rewrite the historic of your branch master (maybe because someone already did cloned), so you should replace the last command for this:

```
git merge upstream/master
```

However, for making which news pull requests stay cleaner, the good idea to do the rebase. If you did rebase of you branch from the upstream/master, maybe you need to force a push for yourself repository of Github. You can do it:

```
git push -f origin master
```

You will need to do it, with ‘-f’ only one time you do a rebase.

I hope to help you!

Font in portuguese: https://gist.github.com/tgmarinho/f3123ff0166da3ec46e84ccbd5b43a02
