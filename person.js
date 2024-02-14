class Person{
    // default values and create an object OOP
    static count = 0
    constructor(){
        this.firstName = 'Please provide your name'
        this.lastName = 'Please provide tour surname'
        this.age = 0 
        Person.count += 1 
    }
    set First(value) {
        this.firstName = value
    }
    get First() {
        return this.firstName
    }
    set Last(value) {
        this.lastName = value
    }
    get Last() {
        return this.lastName
    }
    set Age(value) {
        this.age = value
    }
    get Age() {
        return this.age
    }
    // DISPLAY METHOD
    display(){
        console.log(`
        ID: ${Person.count} 
        Name: ${this.firstName} 
        Surname: ${this.lastName} 
        Age: ${this.age}
        `);
    }
}
// Exporting Class
export {
    Person
}