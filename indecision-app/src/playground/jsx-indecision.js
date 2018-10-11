console.log('App.js is running')

// JSX - Javascript XML
// babel cmd, run on indecision-app
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// as tags não podem ficar 'soltas', por isso usaremos um wrapper <div></div>
const app = {
    title: 'Indecision App 2.0',
    subtitle: 'This is more info',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const onRemoveItems = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>{app.title ? app.title : undefined}</h1>
            <p>{true && app.subtitle}</p>
    
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveItems}> Remove all </button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do? </button>
            <ol>
                {
                    app.options.map((number) => {
                        return <li key={number}>{number}</li>
                    })
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button> Add Option </button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()