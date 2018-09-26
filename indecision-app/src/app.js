console.log('App.js is running')

// JSX - Javascript XML
// babel cmd, run on indecision-app
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// as tags não podem ficar 'soltas', por isso usaremos um wrapper <div></div>
const app = {
    title: 'Indecision App 2.0',
    subtitle: 'This is more info',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title ? app.title : undefined}</h1>
        <p>{true && app.subtitle}</p>

        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>{app.options[0]}</li>
            <li>{app.options[1]}</li>
        </ol>
    </div>
)

const user = {
    name: 'Andrew',
    age: 18
}

// Conditional. Conseguimos inserir funções dentro das expressões JSX
// Quando undefined, a aplicação simplesmente não aparece (não retorna um erro)
function getLocation(location) {
    return location ? <p>Location: {location}</p> : undefined
}

// junto com o JSX, pode-se concatenar variáveis/strings, e usar métodos
const templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <h2>{user.familyName ? user.familyName : 'Anonymous'}</h2>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)