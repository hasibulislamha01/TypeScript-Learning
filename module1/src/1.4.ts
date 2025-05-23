// learning about basic data type

let firstName = 'Hasibul'  //hovering over the firstName variable shows that it is a string type. But we have not given a type to the variable. TypeScript is smart enough to understand the data type inside the varibale in this kind of declaration. This is called type inference or implicit type


let lastName: string = 'Islam' // explicit type

let number = 35

let isBrilliant = true

let partner: undefined = undefined

let firstChild: null = null


// non primitive
let girls: string[] = ['Peary', 'Hridika', 'Kanta', 'Samsida']

let rolls = [35, 151, 1, 4, 3, 1, 43, 44, 60, 59, 5, 19]


// touples (special kind of array where the order of elements of array is important.)
let info = ['hasibul', 25]  //this array has a type of string or number. this means we can assign any string or number inside it. but the order may not be maintained just like the below example
info[0] = 23  //first element should have been string but we are allowed to store a number here. very bad. 

let girlFriend: [string, number] = ['Ridika', 21]
//this is called touple