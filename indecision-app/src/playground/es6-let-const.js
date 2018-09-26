let nameLet = 'Jen'
// let nameLet = 'Julie' // isso não é permitido com o let
nameLet = 'Julia' // isso, por sua vez, isso é permitido

const nameConst = 'Frank'
// const nameConst = 'Jen'
// nameConst = 'Jen' // nenhum dos dois é permitido quando se usa const


// Block Scoping
var fullName = 'Jen Mead'

if (fullName) {
    var firstName = fullName.split(' ')[0]
    // const firstName = fullName.split(' ')[0]
    // let firstName = fullName.split(' ')[0] // const e let não deixam que a variável seja acessada fora do escopo da função
    console.log(firstName)
}

console.log(firstName)