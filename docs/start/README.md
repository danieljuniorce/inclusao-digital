# Requisitos

1. NodeJs - [Faça o download aqui](https://nodejs.org/en/)
2. NPM ou Yarn
   > Node Package Manage, já vem pre-instalado junto com o nodejs, caso queira usar o yarn ( minha preferência ), você pode baixa-ló [aqui](https://yarnpkg.com/lang/en/).
3. IDE da sua preferência
   > Visual Studio tem melhor integração com Visual Studio Code, isso facilitára em vários aspecto durante quando estiver programando, caso queira fazer o download do VSCode [clique aqui](https://code.visualstudio.com/)

## Clonando Repositório

> Clone o repositório para ter acesso todos arquivos do projeto, seguindo o passo a passo abaixo.

1. Abra o terminal e digite os seguintes comando um de cada vez.

   ```shell
   $ git clone https://github.com/danieljuniorce/inclusao-digital.git

   $ cd inclusao-digital
   ```

2. Após ter feito o clone do respositório para sua maquina, faça isso logo em seguida.
   ```js
   // Para baixar todas as depencia do projeto.
   $ yarn install ou npm install
   ```

## Visual Studio Code

> Vamos configurar o VSCode para adptar ao code styled usando o prettier. As dependências instaladas, siga o passo a passo abaixo.

1. Clicando na engrenagem do lado esquerdo inferior, em Settings ( CTRL + , ). Na parte superior direita tem uma folha com uma seta com nome Open Settings(JSON), terá o ambiente de configuração do VSCode usando JSON.

```json
{
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  "editor.rulers": [80, 120],
  "prettier.eslintIntegration": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "tslint.autoSavaOnFix": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

2. Pronto, você já pode começar a CODA!
