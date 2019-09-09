---
title: Meu Ambiente de desenvolvimento
description: >-
  Apresento meu hardware, IDE, Extensões, Terminal, Plugins, Fontes, Tema e
  Ferramentas para Desenvolvimento de Sofware
date: '2019-09-09 02:45:46'
image: /assets/img/wallpaper_2.jpeg
category: dev
background: '#EB7728'
---
# Ambiente de desenvolvimento

## Hardware:

* Macbook Pro 2015, core i5, 8 GB, 120 SSD
* Monitor LG 25' widescreen

## Tema e fonte

### IDE

[VSCode](https://code.visualstudio.com/)

### Extensões do VSCode:

* [Dracula Oficial](https://draculatheme.com/visual-studio-code/)\
  		 - Aparência do meu editor de código.
* Fonte: [FiraCode](https://github.com/tonsky/FiraCode) - [Download](https://github.com/tonsky/FiraCode/releases/download/1.207/FiraCode_1.207.zip)
  		 - Fonte estilosa para dar mais vontade de programar.

Para funcionar tem que configurar o settings.json (cmd/ctrl+,) 
Habilitar fontLigatures e declarar a FireCode no fontFamily.

settings.json:

```
{
"editor.fontFamily":  "Fira Code",
"editor.fontLigatures":  true,
"editor.fontSize":  18,
"editor.lineHeight":  24,
"editor.formatOnSave":  true,
}
```

* [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
  		- Serve para mostrar um ícone com o tipo de arquivo.
* [color-highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
  		- Serve para mostrar um preview que está sendo definida no CSS.
* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  		- Configurar a IDE para todos os dev do time, seguindo as regras que vc passar no arquivo .editorconfig
* [vscode-eslint](https://github.com/microsoft/vscode-eslint)
  		- Manter um padrão de escrita de código, defino as regras e todos e se algum código fugir da regra o eslint exibe um erro ou alerta, ótimo para padrão de escrita de código.
* [prettier-vscode](https://github.com/prettier/prettier-vscode)
  		- Eslint define a regra e o prettier faz com que o código se adapta a regra, corrigindo algumas coisas como identação, tipo declaração de variável, muda de aspas simples para aspas duplas se o eslint tiver com essa regra.
  		- Garante que as regras do ESLint sejam aplicadas automaticamente, quando salva o arquivo, e se tiver o `editor.formatOnSave: "true"` e `prettier.eslintIntegration: "true"`definido no settings.json do VSCode
  		- Sempre é bom ter o ESlint + Prettier configurados.
* [rocketseat-vscode-react-native-snippets](https://github.com/Rocketseat/rocketseat-vscode-react-native-snippets)
* [rocketseat-vscode-reactjs-snippets](https://github.com/Rocketseat/rocketseat-vscode-reactjs-snippets)
  		- Como estou programando em React Native e React + Redux estou usando esses snippets.

[meu settings do VSCode - completo](https://gist.github.com/tgmarinho/99785237d9d00c2a0f0e4d10fa293e6b)
[meu settings do VSCode com comentários - completo](https://gist.github.com/tgmarinho/8bbca48841602ed0a53662296f91beb6)

## Terminal

### Fonte

* Terminal -> Preferences -> Fonts ou Cmnd + ,
  Fonte: [FiraCode](https://github.com/tonsky/FiraCode) - [Download](https://github.com/tonsky/FiraCode/releases/download/1.207/FiraCode_1.207.zip)

### Tema

* <https://draculatheme.com/terminal/>
  Instalar, só seguir o tutorial do site e depois importar para dentro do terminal
  	 - Terminal -> Preferences -> Profile -> Import ou Cmd + 

### Oh My Zsh

* <https://ohmyz.sh/>
  		- Terminal.
* <https://github.com/denysdovhan/spaceship-prompt>
* Como os items são exibidos na tela.
* Abrir o [.zshrc](https://gist.github.com/tgmarinho/9256be40ec1344d0e20fd6d685ebb0eb) com: `❯  code  ~/.zshrc` Editar: `ZSH_THEME="spaceship"`, salvar e fechar
* Mais configurações:


```
SPACESHIP_PROMPT_ORDER=(
	user # Username section
	dir # Current directory section
	host # Hostname section
	git # Git section (git_branch + git_status)
	hg # Mercurial section (hg_branch + hg_status)
	exec_time # Execution time
	line_sep # Line break
	vi_mode # Vi-mode indicator
	jobs # Background jobs indicator
	exit_code # Exit code section
	char # Prompt character
)
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "
```

### ZPlugin

Ajuda a usar o terminal, com sugestões de comandos e reportando se o comando que está sendo digitado está certo ou não exibindo um highlighting verde se estiver certo e vermelho se estiver errado.

* [zplugin](https://github.com/zdharma/zplugin)
  Configurar, abra o arquivo, .zshrc, no final do arquivo coloque, fecha e salva o arquivo:


```
zplugin light zsh-users/zsh-autosuggestions
zplugin light zsh-users/zsh-completions
zplugin light zdharma/fast-syntax-highlighting
```

## Extensões do Chrome

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Dracula Devtools Theme](https://chrome.google.com/webstore/detail/dracula-devtools-theme/gdhgkfojgddhijhlnnnbopleoabkeife)

![](/assets/img/screen-shot-2019-09-09-at-14.22.24.png)

## Ferramentas

* [Insomnia](https://insomnia.rest/download/)
  		- Cliente de serviço http, parece com Postman, serve para  testar e fazer  chamadas à API Rest que estiver construindo.
* <https://devdocs.io/> para consultar Doc Web
* <https://devdocs.egoist.moe/> para instalar Desktop Offline

Pronto, agora é só codar!
