// Constructor function w/ class formality
class person {
    constructor(firstName, middleName, lastName, DOB) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.DOB = new Date(DOB);
    }

    getBirthYear() {
        return this.DOB.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}



// Instantiated object(s)
const person1 = new person('John', 'Anon', 'Doe', '4-24-2022');
const person2 = new person('Jane', 'Anun', 'Doe', '4-23-2022');

console.log(person1.getFullName());