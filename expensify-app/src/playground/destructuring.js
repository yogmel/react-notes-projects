// Object destructuring
const person = {
  name: 'Mellina',
  age: 26,
  location: {
    city: 'Sao Paulo',
    temp: 25
  }
}

const {name, age} = person
console.log(`${name} is ${age}`)

const {city, temp: temperature} = person.location
console.log(`It's ${temperature} in ${city}`)


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Peguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)


// Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, , state, zip] = address;
console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [product, , medium] = item
console.log(`A medium ${product} costs ${medium}`)