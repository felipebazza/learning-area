const square = function(x){
  return x * x;
};

function square2(x){
  return x * x;
}

/*const squareArrow = (x) => {
  return x * x;
};*/

const squareArrow = (x) => x * x;

//console.log(squareArrow(4));

const getFirstName = (name) => {
  return name.split(' ')[0];
};

const getFirstName2 = (name) => firstName = name.split(' ')[0];

console.log(getFirstName('Lala Alexandre'));
console.log(getFirstName2('felipe Alexandre'));