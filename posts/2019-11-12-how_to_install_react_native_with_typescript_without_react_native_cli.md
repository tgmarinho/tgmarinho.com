---
title: How to install React Native with Typescript without React Native CLI
description: I'll show how to install React Native with Typescript without React Native CLI
date: '2019-11-12 08:36:34'
image: /assets/img/react-native-header.png
category: mobile
background: '#03A9F4'
---
When you need to install some dependence in your project you can use:

```
npx --ignore-existing ....
```

It allows you to get the new version from npm package without look for your node_modules/bin that was installed in your operational system.

I had issues with that when I attempt to install React Native with Typescript! 

I tried:

```
npm uninstall -g react-native-cli
```

and this:

```
yarn global add @react-native-community/cli
```

And nothing worked for me, then I saw this answer:
<https://github.com/react-native-community/react-native-template-typescript/issues/80#issuecomment-536419979>

So, I googled about `npx --ignore-existing`

and I got this:

> \--ignore-existing - If this flag is set, npx will not look in $PATH , or in the current package's node_modules/.bin for an existing version before deciding whether to install. Binaries in those paths will still be available for execution, but will be shadowed by any packages requested by this install.
>
> from: https://www.npmjs.com/package/npx

Then, I tried:

```
npx --ignore-existing react-native init MyApp --template react-native-template-typescript
```

And it works \o/! But it spends more time because it grabs all content on the Internet, doesn't look for your cache files.

Now your project React Native will be installed without a problem, you can run:

```
cd MyApp && yarn ios 
```

or

```
cd MyApp && yarn android 
```

For install in the ios simulator or android emulator.

credit: [Image](https://medium.com/reactbrasil/quais-desafios-vou-enfrentar-ao-come%C3%A7ar-um-app-com-react-native-a456db89c081)
