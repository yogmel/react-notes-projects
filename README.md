# React + Redux
Anotações e projeto do curso de React + Redux

## Setup
### Instalar [Yarn](https://yarnpkg.com/en/)


### Packages
- Live-server: yarn global add live-server
- Babel: yarn global add babel-cli@6.24.1 ou npm install -g babel-cli@6.24.1


### Compilar React
1. Ir para o diretório da aplicação (indecision-app) com cmd
2. Iniciar package.json: yarn init
3. Adicionar pacote de React e de ES6/7: yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
4. A estrutura de pasta é separada em produção e público. Input: src/app.js, compiled: public/scripts/app.js
5. Realizar a compilação do Babel, com atualização em tempo real: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
6. Caso pacotes sejam deletados, pode ser usado cmd: yarn install para instalar dependências gravadas no package.json


### Carregar biblioteca no HTML

Adicionar os scripts do React: o pacote geral e o específico para manipulação do navegador
```html
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
```


--------


### Conteúdo React
- JSX expressions
    - Template
    - {}
    - Conditions


- React
    - Components
    - props
    - Method binding
    - Component State
    - Stateless Functional Component
    - Life cycle methods
    
    