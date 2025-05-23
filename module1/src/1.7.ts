// spread operator to distructure
const friends1 = ['hasibul', 'julfikar', 'shimanto', 'alamin']
const friends2 = ['tamim', 'anas', 'seyam', 'Hasib']

const friends3 = [...friends1, ...friends2]


const lover1 = {
    hasibul: 'Ridika',
    Julfikar: 'Shorna',
    alamin: 'Hira',
    shimanto: 'Maliha'
}

const lovers2 = {
    tamim: 'anika',
    anas: 'mehveen',
    seyam: 'tuba',
    Hasib: 'marjia'
}

const lovers = {
    ...lover1,
    ...lovers2
}




// rest operator to take unknown no of parameters 
function greet(...people :string[]){
people.forEach(ind => console.log(`hi ${ind}`))
}

greet('hasibul', 'hasib', 'shohag')