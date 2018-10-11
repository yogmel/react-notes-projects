class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name
    this.age = age
  }
  getGreeting(){
    //return 'Hi. I am ' + this.name + '!'
    return `Hi. I am ${this.name}!`
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
} 

class Student extends Person {
  constructor(name, age, major){
    super(name, age)
    this.major = major
  }
  hasMajor(){
    return !!this.major
  }
  getDescription(){
    let description = super.getDescription()

    if(this.hasMajor()){
      description += ` Their major is ${this.major}. `
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting(){
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      return greeting += ` I'm visiting from ${this.homeLocation} `
    }
    return greeting
  }
}


const traveler = new Traveler('Mellina', 26, 'São Paulo')
console.log(traveler.getGreeting())


const person = new Person()
const other = new Student()
const me = new Student('Mellina Yonashiro', 26, 'Computer Science')
console.log(me.hasMajor())
console.log(other.hasMajor())
