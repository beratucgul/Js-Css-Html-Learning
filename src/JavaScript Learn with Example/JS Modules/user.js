export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

export function printName(user) {
    console.log(`User's name is ${user.name}`) // if we add String variable inside string, we have to use `` . Its called template Literal
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`)
}