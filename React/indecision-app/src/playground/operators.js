const user = {
  name: 'Felipe',
  age: 26,
  location: 'Brazil'
};

function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>;
  } 
}

// h1 using ternary operator
// then using some logical && operator
// then using a function with an if operator
const newTemplate = (
<div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
  {getLocation(user.location)}
</div>
);