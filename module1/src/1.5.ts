// implicit type declaration
const user1 = {
    firstName: 'Hasibul',
    middleName: '',
    lastName: 'Islam'
}

// explicit type declaration
let user2: {
    firstName: string;
    middleName?: string;   //middle nanme is optional now
    lastName: string;
    age: number;
    isMarried: boolean,
    companyName: 'NexusHand' //----------> Literal type (a value acts like a type)
} = {
    firstName: 'Hasibul',
    lastName: 'islam',
    isMarried: false,
    age: 25,
    companyName: "NexusHand"
}