---
title: Adicionando CA-Certificades no Linux Deepin
description: Adicionando CA-Certificades no Linux Deepin
date: '2018-02-09 12:03:00'
thumbnail: /assets/img/deepin_15.4_with_wikimedia_wallpaper.png
category: misc
background: '#7AAB13'
---
Basta fazer o download do certificado, e com o usuário root, colocar na pasta:

```
/usr/local/share/ca-certificates
```

Depois executar o comando:

```
sudo update-ca-certificates --fresh
```

Pronto!

Já pode através do terminal baixar e instalar programas que utilizam o protocolo https:

```
curl https://install.meteor.com/ | sh
```

_Easy peasy lemon squeeze =)_
