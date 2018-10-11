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