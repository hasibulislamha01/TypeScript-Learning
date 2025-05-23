function add(num1: number, num2: number) {
    return num1 + num2
}

add(2, 2)

// for arrow function
const addTwoNumbers = (num1: number, num2: number = 1) => num1 + num2


// what is a method ?
// if a function inside an object then it is called a method

const balancingMachine = {
    name: "hasibul",
    age: 25,
    balance: 1000,
    addMoney(income: number) {
        return this.balance + income
    }
}