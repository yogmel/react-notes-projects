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
### Conteúdo
- [JSX expressions](#JSX)
  - Template
  - {}
  - Conditions

- [React](#React)
  - [Components](#Componentes-em-React)
  - [props](#Props)
  - Method binding
  - [State](#State)
  - [Stateless Functional Component](#Stateless-Functional-Components)
  - [Life cycle methods](#Lifecycle-Methods) (componentDidMount, componentDidUpdate, render)
  - Third-party:
    - [React-Modal](#React-Modal)
    
- [React Avançado](#React-Avançado)
  - [React children](#React-Children)
  - [Retorno implícito de JSX](#Retorno-implícito-de-JSX)

- [Webpack](#Webpack)
  - [Import and Export](#Import-e-Export)
  - [Loaders](#Loaders)
  - [Source maps](#source-maps)
  - [Dev server](#webpack-dev-server)
  - [Style Loaders](#Style-Loaders)
    
- [React Router](#React-Router)

- Redux
    - Action
      - dispatch()
      - subscribe()
    - Reducers
    - Store
      - createStore()
      - combineReducers()
    - Selectors
    - Third-party:
      - React-Redux
      - Redux Dev Tools


- Testing: Jest
  - test()
  - expect()
  - comparing methods: toEqual(), toBe()
  - React testing:
    - react-test-renderer/shallow
    - Snapshot testing
  - Enzyme


- Third-party libraries
  - moment.js
  - Airbnb Date Picker


- Production setup:
  - Webpack to production
  - Separating CSS from .js file
  - Production web server with Express
  - Deploying with Heroku


  -------

**Servidor**: React somente funciona em um servidor, então se deve simular um por meio de live-server ou webpack devServer.Setup inicial

* Instalar React e React Dom

```
yarn install react react-dom
```

* Instalar Babel
```
yarn install --save-dev @babel/preset-react
```

## JSX
Ou javascript expressions. Foi criado pelos desenvolvedores do React e são usados antes de ser compilado para um ECMAScript oficial. Ele permite que markups em HTML sejam compilados a partir de códigos em Javascript.Para que seja compilado, deve haver apenas um elemento direto, se não não funciona.

Exemplo:
```javascript
// funciona, apenas a <div> será renderizada
var template = (
  <div>
    <h1> Sou um app </h1>
    <p> Subtítulo do app </p>
  </div>
  )
```

```javascript
// não funciona, são dois elementos sendo renderizados
var templateErrado = (
  <h1> Sou um app </h1>
  <p> Subtítulo do app </p>
)
```

**Expressões**: é possível também fazer uma lógica mais complexa. como inserir objetos e variáveis dentro do JSX.

```javascript
const user = {
  name: 'Mellina',
  age: 26,
  location: 'Sao Paulo'
}

var template = (
  <div>
    <h1> Oi, {user.name} </h1>
    <p> Como vão os seus {user.age} na cidade {user.location}? </p>
  </div>
)
```

**Funções e undefined**
```javascript
function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (   
  {getLocation(user.location)}
) // se retornar undefined, não printa nada na tela, nem erro.)
```

**Ternary operator e && operator**
```javascript
  var templateThree = (
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}</p> // se true, ele mostra o último valor)
  )
```

>**Arrow Functions**: Arguments object is no longer bound with arrow functions; and this keyword is no longer bound (it is referenced to its parent instead).


**Events and Attributes**: alguns atributos ou eventos do HTML foram modificados, pois elas são palavras reservadas. Exemplo: className, onClick, onSubmit. Para inserir um evento onClick, basta inserir o nome da função de callback.
```javascript
const addOne = () => {
  count++;
}

const templateFour = (
  <div>
    <h1> Count: {count} </h1>
    <button onClick={addOne}> +1 </button>
  </div>
)
```
**Array**: arrays em JSX devem ter um key attribute pra identificar no React.
```javascript
const numbers = [55, 101, 1000];

const templateFive = (
  {numbers.map((number) => {
    return <p key={number}> Number: {number}</p>
  })}
)
```

## React

React separa aplicações web em componentes, de acordo com o UI. Cada Componente é escrito como:
```javascript
<IndecisionApp>
  <Header />
  <AddOption />
  <Options />
    <Option />
</IndecisionApp>
```
### Classes
São usadas quando queremos criar vários objetos modulares, mas com características diferentes.Cada módulo se chama Instances.
```javascript
class Person {    
  // constructor é um objeto do ES6 que permite o acesso de parâmetros de Person    
  constructor(name = 'Anonymous', age = 0){
    this.name = name; // this se refere à instância da classe
  }

  getGreeting(){
    return `Hi. I am ${this.name}`;
  }
  
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// criar uma nova instância de Person
const me = new Person('Mellina', 26)

console.log(me.getGreeting()); // Hi. I am Mellina.
```

**Sub-classes**: são classes que são baseadas em uma classe existente.
```javascript
class Student extends Person {    
  constructor(name, age, major) {        
    super(name, age); // chama o constructor da classe original   
      this.major = major;
  }    
  
  hasMajor() {        
    return !!this.major;    
  }    
  
  getDescription(){ // esse método sobrescreve o método da mãe   
    let description = super.getDescription(); // acessa o método da mãe        
    if(hasMajor()){            
      description += ` Their major is ${this.major}`;            
    }        
    
    return description;    
  }
}

const student = new Student('Mell', 26, 'Computer Science');
```

### Componentes em React
Para criar um componente em React, se deve começar um elemento HTML com letra maiúscula e criar sua classe de mesmo nome.
```javascript
class Header extends React.Component {    
  render() {        
    return <p> This is from Header </p>;        
  }
}

const jsx = {    
  <div>        
    <h1>Title></h1>        
    <Header />        
    <Header />    
    </div>    
}

ReactDOM.render(jsx, document.getElementById('app'));
```

É possível também inserir outros componentes dentro de outros.

```javascript
class IndecisionApp extends React.Component {    
  render() {        
    <div>            
      <Header />            
      <Options />            
      <AddOption />        
    </div>    
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
```

### Props
São propriedades que são passadas para o componente.
```javascript
class IndecisionApp extends React.Component {    
  render() {        
    const title = 'Indecision';        
    const subtitle = 'Subtitle';        
    const option = ['Thing 1', 'Thing 2'];     
    
    return (        
      <div>            
        <Header title={title} subtitle={subtitle} /> 
        // propriedade é passada para o compenente acessar         <Options options={options} />            
        <AddOption />        
      </div>        
    )    
  }
}

class Header extends React.Component {    
  render() {        
    return (            
      <div>                
        <h1>{this.props.title}</h1> // a propriedade é chamada 
        <h2>{this.props.title}</h2>            
      </div>        
    )        
  }
}

class Option extends React.Component {    
  render() {
    return ()       
    <div>
      {this.props.options.map((option) => <p key={option}> {option} </p>)} // é possível inclusive manipular os props        
    </div>    
  }
}
```

**Eventos e métodos**: Eventos são chamados diretamente no componente que será o alvo. Os métodos dentro deles são referenciados, porém não chamados (serão chamados somente quando houver o clique).
```javascript
handleRemoveAll() {    
  alert('handleRemoveAll');
}

render() {
  return (
    <button onClick={this.handleRemoveAll}> Remove All </button>
  )
}
```

> Importante: Method binding. O retorno do _this_ depende do contexto em que ele é chamado. Em alguns casos, o this é chamado no contexto errado. Para resolver esse problema, usamos o bind() pra manualmente definir um contexto pra ele.
```javascript
obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
}

const getNameWrong = obj.getName //this do método não terá o mesmo contexto que o declarado. Isso retorna um erro
const getNameRight = obj.getName.bind(obj) // o bind() redefine o contexto em que a função é chamada. Neste caso, esse bind(obj) define o contexto como sendo o obj
```

No caso de inserir um método de callback em um evento, devemos fazer o binding desse método, pra que ele se mantenha no contexto correto.
```javascript
class Options extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    )
  }
}
```

### State

State são usados para administrar dados dentro do componente. Toda vez que um state é modificado, o componente é renderizado para refletir essas alterações.

Primeiro, deve-se definir um valor padrão pro state. Depois, inserir o método _setState()_ para modificar o state. Assim que modificado, o componente é renderizado novamente.

```javascript

class Counter extends React.Component {
  constructor(props) {
    this.state = {
      count: 0,
      options: []
    }
  }

  handleOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

// ...

}

```

_setState()_ além de modificar o estado, força uma renderização do componente.
O primeiro argumento do setState() recebe o state anterior e pode ter qualquer nome.

Para modificar o state, não é necessário chamar todos os states cada vez que chamar o setState().

setState() é assíncrono.

> Shorthand para state e valor com nomes iguais. Se tanto o valor/variável passado para o setState() quanto o state forem iguais, não é necessário passar um valor. Veja:
```javascript
this.setState(() => {
  return { error }; // é o mesmo que return { error: error }
})
```

**Passando props**: é possível passar métodos entre componentes, através de props.

```javascript
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions() = this.handleDeleteOptions.bind(this);
  }

  // ...
  handleDeleteOptions () {
    // ...
  }

  render() {
    return (
      <div>
        <Options handleDeleteOptions={this.handleDeleteOptions} />
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    )
  }
}

```

> Quando chamar os métodos da mãe e quando declarar métodos dentro do próprio componente? Se houver a necessidade de tratar dados dentro do próprio componente, a melhor opção é declarar o método dentro dele mesmo.

-----------------

### Stateless Functional Components

Alguns componentes são mais "simples", não possuem state, métodos etc. Pra esses componentes, podemos declará-los de forma única:

```javascript
const Action = (props) => (
  <div>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
)
```

### React Dev Tools

As ferramentas de desenvolvedor do React oferece maneiras de visualizar states, props e componentes.

- [Chrome React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox React Dev Tools](https://addons.mozilla.org/pt-BR/firefox/addon/react-devtools/)


### Lifecycle Methods
React possui alguns métodos prontos que são ativados antes ou depois de algum evento. Eles só existe em componentes baseados em Classes, então não existem em Stateless Functional Components.
- _componentDidMount()_: é ativado quando o componente é criado no DOM.
- _componentDidUpdate(prevProps, prevState)_: é ativado depois que um state ou props é alterado. Os argumentos passados podem ser os states e props anteriores.
- _componentWillUnmount()_: ativado logo antes do componente desaparecer, quando uma página alterar etc.

-----------

## Webpack
Webpack nos permite organizar nossos arquivos e otimiza nossa aplicação. Ele recebe todos os arquivos e retorna um pacote (bundle).

Webpack nos permite usar o Babel e outros loaders, antes de compilar e criar o bundle.

### Instalar Webpack

Instalar:
```
yarn add webpack
```

Run:
```javascript
webpack
// ou 
webpack --watch
```

### Webpack.config.js
Criar um arquivo chamado webpack.config.js no root, para determinar configurações.

```javascript
// entry -> output. Entry são os arquivos de entrada e output é o caminho do bundle que vai ser criado

const path = require('path'); // necessário para pegar o caminho do arquivo, independente se estiver local ou no servidor

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};

```

#### Import e Export
É possível exportar e importar scripts específicos em javascript.

**Named export**
```javascript
// utils.js

const square = (x) => x * x;
// ou export const square = (x) => x * x;

const add = (a, b) => a + b;
// ou export const add = (a, b) => a + b;

export { square, add };

// add.js
import { square, add } from './utils.js'; // os nomes tem que ser iguais ao export
```

**Default Export**: somente 1 default export por script e na hora de importar, não é necessário usar o mesmo nome do export.
```javascript
// utils.js
const subtract = (a,b) => a - b;
// ou export default (a,b) => a - b;

export { subtract as default };

// add.js
import subtractFunction from './utils.js';
```

#### Loaders
Para configurar um ambiente para React, devemos instalar os loaders Babel.
```
yarn add babel-core babel-loader
```

No arquivo webpack.config.js:
```javascript
module.exports = {
  //...
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // em quais arquivos esse loader vai rodar?
      exclude: /node_modules/ // quais arquivos esse loader vai ignorar?
    }]
  }
};
```
Com a configuração feita no Webpack, precisamos iniciar os scripts do Babel em outro lugar. Deve-se criar um arquivo chamado _.babelrc_ que vai guardar todas as configurações.
```javascript
{
  "presets": [
    "env",
    "react"
  ]
}
```

#### Source Maps
Source maps são usados para debug, como uma tradução do código compilado para o código fonte.
Ver a documentação do Webpack para saber quais Source maps estão disponíveis. Alguns são bons para produção e outros para desenvolvimento (nível de detalhe vs. tempo de build)

```javascript
module.exports = {
  //...
  },
  devtool: 'cheap-module-eval-source-map'
};
```

#### Webpack Dev Server
Para instalar:
```
yarn add webpack-dev-server
```
Configuração (mais na documentação):
```javascript
module.exports = {
  //...
  },
  devServer: {
    contentBase:  path.join(__dirname, 'public') // local de onde o servidor vai pegar os arquivos
  }
};
```

Run:
```
webpack-web-server
```

Webpack Web Server não cria um bundle enquanto roda, apenas usa a memória do computador.


#### Style Loaders
Para que se possa importar folhas de estilo dentro dos componentes em React, precisamos de pacotes para interpretar CSS dentro de arquivos Javascript.

Para isso, devemos instalar o `css-loader`. Adicionalmente, podemos instalar outro pacote que insere esses estilos dentro da tag `<head>` do HTML, que é o pacote `style-loader`.

Para instalar:
```
npm install --save-dev css-loader style-loader
```
Esses serão os _loaders_ que usaremos no Webpack. Caso queira utilizar o SASS, também há a necessidade de instalar o `sass-loader`.
```
npm install --save-dev sass-loader
```

Agora, temos que chamar esses _loaders_ na hora de compilar a nossa aplicação, dentro do `webpack.config.js`, dentro da propriedade `rules` do objeto `module`. Temos que ter a propriedade `test` para especificar que tipo de arquivo passará por esse _loader_ e que qual loader será ativado estará especificado no `use`.

Para mais informações sobre Webpack modules, ver a [documentação oficial](https://webpack.js.org/configuration/module/).
```javascript
module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  }
```
> Ao final da configuração de todo o ambiente, é recomendado que se salve um arquivo com esse esqueleto. Na programação, isso se chama **boilderplate**, uma estrutura que é usada extensivamente, mas é pouco modificada entre aplicações.

--------

## React Avançado
### React Children
É possível passar _children_ dentro de componentes. Ao invés de chamar um Componente autofechante, se abrir e fechar uma tag desse componente, tudo que está dentro dele vira `props.children`.

[Artigo referência - React avançado — Utilizando “props.children” como função de primeira classe](https://medium.com/@oieduardorabelo/react-avan%C3%A7ado-utilizando-props-children-como-fun%C3%A7%C3%A3o-de-primeira-classe-f6be8acdfaf1)

```jsx
const Layout = (props) => (
  <div>
    <h1>Header</h1>
    {props.children} 
  </div>
)

ReactDOM.render(
  (<Layout>
    <p>Isso é uma descrição que é passado como props.children</p>
  </Layout>),
  document.getElementById('app')
)
```

### Instalando Third-Party libs
#### React-Modal
[Documentação Oficial](https://github.com/reactjs/react-modal)

Para instalar, é só seguir a documentação oficial:
```
$ npm install react-modal
$ yarn add react-modal
```

Dentro do componente que for utilizar, chamar como importação e chamar seu componente com `props`:
```JSX
import Modal from 'react-modal';

const ModalBox = () => {
  <Modal
    isOpen={}
    contentLabel="Algum conteúdo"
  >
    <h3>Um conteúdo</h3>
  </Modal>
}

```

### Retorno implícito de JSX
Se o _stateless component_ não possui uma lógica, variáveis ou outros elemnentos, a não ser o retorno de um JSX, então há uma maneira mais simples de escrever:

```JSX
const Template = () => {
  return (
    <div>Retorno explícito</div>
  )
}

const TemplateDois = () => (
  <div>Retorno implícito. Também posso receber props.</div>
)

```
-----------
## React Router
### Client side vs. Server side rendering
A maneira como carregamos os nossos sites e aplicações podem ser feitas, a grosso modo, de duas formas. Primeiro, a mais antiga forma o  _Server-Side Rendering_ ou SSR, o site é renderizado, ou criado, dentro do servidor e envia para o cliente (ou navegador) o site já pronto, com o HTML, CSS e Javascript finais para aquela página. Na segunda forma, o _Client-Side Rendering_ ou CSR, todo o conteúdo do site é carregado na primeira vez que o usuário entra e as outras páginas são montadas seguindo uma lógica montada no Javascript, usando as informações armazenadas no cliente.

Em resumo, algumas características, vantagens e desvantagens:

**Server-side rendering**
- A renderização do site acontece dentro do servidor e ele envia o produto final, ou o HTML pronto para o cliente;
- Sua renderização inicial é mais rápida, porque não carrega todo conteúdo na primeira vez que é chamado;
- Quando há mudança de rota, ele tem que repetir o processo de novo;
- O SSR também é mais SEO-friendly do que o CSR. Por esse motivo, é ótimo para sites estáticos.

**Client-side rendering**
- Frameworks usam, ótimo para web applications, pois possibilita a interação com o usuário através de Javascript;
- É SEO-friendly, se for implementado de forma correta, já que o Google consegue "ler" Javascript;
- Carrega todos os recursos de Javascript no momento em que inicia;
- É rápido depois da primeira chamada, pois não necessita da requisição contínua com o servidor;
- Usa apenas um index.html.

O _React Router_ é uma biblioteca suporte ao React que auxilia na criação de rotas usando o _Client-side Rendering_, já que o React é uma biblioteca para _Single page applications_ e não possui múltiplas páginas .html para renderizar seu conteúdo.

### Instalação
```
npm add react-router-dom
```

### Uso
#### BrowserRouter e Route
Para fazer uso básico do React Router, precisamos especificar que parte do código deve ser lida como um Router ([`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter)) e definir as rotas propriamente ditas ([`Route`](https://reacttraining.com/react-router/web/api/Route)).
```JSX
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';

const router = (
  <BrowserRouter>
    <Route path="/" exact component={Dashboard} />
    <Route path="/profile" component={Profile} />
  </BrowserRouter>
)
```

O `<BrowserRoute>` não renderiza nada visível. Ao invés disso, ele cria as rotas que especificamos dentro dele.

As propriedades do `<Route>` são `path`, qual URL e `component`, qual componente será renderizado, assim que o usuário entrar nessa URL.

No primeiro `<Route>`, há a necessidade de usarmos o `exact`, para que ele renderize somente se a rota for exatamente como especificado na propriedade `path`. Isso porque o segundo `path` também contém o `/`.

**Configurando o Webpack Dev Server**

Caso esteja usando o Webpack Dev Server, também há a necessidade de dizer para o servidor que estamos usando o CSR, não SSR. Para isso, devemos inserir no `webpack.config.js` a seguinte especificação:
``` javascript
// ...
devServer: {
  contentBase: path.join(__dirname, 'public'),
  historyApiFallback: true
}
```

O [historyApiFallback](https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback) faz com que todas as rotas apontem para o `index.html`, ao invés da rota especificada pelo navegador.

#### Switch
Caso desejarmos inserir uma página 404, podemos inserir uma nova rota, sem especificação do `path`. O problema disso é que esse componente é renderizado em todas as ocasiões. Para resolver esse problema, usamos o componente `<Switch>`. Ele lê as `<Route>` de cima para baixo e renderiza apenas **um** componente, aquele que primeiro combinar com `path`.

A diferença entre o `<Route>` e o `<Switch>` é que o primeiro renderiza componentes inclusivamente e o segundo de forma exclusiva.


```JSX
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import NotFound from './NotFound';

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} /> 
    </Switch>
  </BrowserRouter>
)
```

#### Link e NavLink
Configuramos as rotas, porém não existe maneira de navegar para elas, a não ser manualmente inserindo na barra de navegação. Conseguimos criar conexões, ou links com o React Router.

```JSX
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';

const NotFound = () => (
  <div>
    404 - <Link to="/">Ir para a Home</Link>
  </div>
)

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} /> 
    </Switch>
  </BrowserRouter>
)
```

O [`<Link>`](https://reacttraining.com/react-router/web/api/Link) é um componente que precisa de uma propriedade, que é o `to`. Ele determina a rota para a qual o usuário vai entrar, ao clicar nessa âncora.

Alternativamente, o [`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink) é um componente que possui a mesma funcionalidade do `<Link>`, porém com uma diferença: é possível mudar o estilo do link, se o caminho é o mesmo da rota para o qual ele aponta. Para isso, usamos a propriedade `activeClassName`. Quando isso acontecer, o link terá a classe especificada.

```JSX
const Header = () => (
  <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
  <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
  <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
)
```

#### Organizando rotas
É comum separar rotas, assim como fazemos com componentes. Uma sugestão de estrutura é `/src/routers/AppRouter.js` e inserir todos as rotas lá. Lembrar de importar as devidas bibliotecas e componentes para que o aplicativo funcione.

```JSX
// AppRouter.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import NotFound from './NotFound';

const AppRouter = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} /> 
    </Switch>
  </BrowserRouter>
)

export default AppRouter;
```

```JSX
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
```

#### Query e URL Params
Quando usamos React Router para renderizar um componente, ele passa `props` várias informações sobre localização, histórico, _queries_ etc, além de métodos úteis como `goForward()` e `replace()`.

Para ver quais URL Params estão disponíveis, ver a documentação oficial:
- [history](https://reacttraining.com/react-router/web/api/history);
- [match](https://reacttraining.com/react-router/web/api/match).

Se, por exemplo, queremos renderizar a página de acordo com um `id`, a sintaxe é `:id`.

```JSX
// AppRouter.js

// ...

const AppRouter = (
  <BrowserRouter>
    <Switch>
      {
        // ...
      }
      <Route path="/edit/:id" component={EditExpense} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;
```

Nesse caso, estamos passando uma nova propriedade para o componente `<EditExpense>`, o `id`. Para acessar essa propriedade dentro do componente, usamos `props.match.params.id`.
