// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  // if you need the arguments, use es5 functions instead
  return a+b;
}
console.log(add(55,1,1001));


// this keyword - no longer bound too

const user = {
  name: 'Felipe',
  cities: ['Cacador','Navegantes','Dublin'],
  printPlacesLived() {
    //es6 for defining methods

    // you can't use arrow functions here because it doesn't bind to the object user
    // it'll bind to the parent, which is the global scope, and then it can't access
    // the cities array

    return this.cities.map((city) => this.name + ' has lived in ' + city);

    /*this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });*/
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2,12,125],
  multiplyBy: 4,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());