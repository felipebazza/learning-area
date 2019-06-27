var nameVar = 'Felipe';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'John';
nameLet = 'Jen';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst',nameConst);

function getPetName(){
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);


const fullName = 'Jen Alexandre';
let firstName;

// block scoping
// const and let are
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);