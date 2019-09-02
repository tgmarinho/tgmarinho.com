---
title: How to install Node.js via binary archive on Linux?
description: How to install Node.js via binary archive on Linux?
date: '2018-08-04 01:59:00'
thumbnail: /assets/img/linux.jpg
category: dev
background: '#637a91'
---
Download the NodeJS : <https://nodejs.org/en/download/>

Unzip the binary archive to any directory you wanna install Node, I use `/usr/local/lib/nodejs`

```
sudo mkdir /usr/local/lib/node
```

```
sudo tar -xJvf node-v8.9.4-linux-x64.tar.xz
```

```
sudo mv /usr/local/lib/node/node-v8.9.4-linux-x64 /usr/local/lib/node/nodejs
```

Set the environment variable `~/.profile`, add below to the end.

```
# Nodejs
export NODEJS_HOME=/usr/local/lib/node/nodejs
export PATH=$NODEJS_HOME/bin:$PATH
```

Refresh profile

`. ~/.profile`

Test installation using

```
$ node -v
```

```
$ npm version
```

`
➜  node -v
v8.9.4
➜  npm version
{ npm: '5.6.0',
 ares: '1.10.1-DEV',
 cldr: '31.0.1',
 http_parser: '2.7.0',
 icu: '59.1',
 modules: '57',
 nghttp2: '1.25.0',
 node: '8.9.4',
 openssl: '1.0.2n',
 tz: '2017b',
 unicode: '9.0',
 uv: '1.15.0',
 v8: '6.1.534.50',
 zlib: '1.2.11' }
`




Done
