var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];		
}

let storyText = 'It was 94 fahrenheit outside,'+
 'so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, '+
 'then :insertZ:. :name: saw the whole thing, but was not surprised — :insertX: weighs 300 pounds,'+
 ' and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk',
'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
	let newStory = storyText;
	let xItem = randomValueFromArray(insertX);
	let yItem = randomValueFromArray(insertY);
	let zItem = randomValueFromArray(insertZ);
	if(customName.value !== '') {
		var name = customName.value;
		newStory = newStory.replace(':name:',name);
	}

	if(document.getElementById("uk").checked) {
		//Pounds to stones = mass / 14
		var weight = Math.round(300/14);
		newStory = newStory.replace('300 pounds',weight+' stones');
		//Fahrenheit to celsius: (F - 32) x (5 / 9)
		var temperature =  Math.round((94-32)*(5/9));
		newStory = newStory.replace('94 fahrenheit',temperature+' centigrade');
	}

	newStory = newStory.replace(/:insertX:/g,xItem);
	newStory = newStory.replace(':insertY:',yItem);
	newStory = newStory.replace(':insertZ:',zItem);

	story.textContent = newStory;
	story.style.visibility = 'visible';
}