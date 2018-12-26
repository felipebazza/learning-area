var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++){
  var newImage = document.createElement('img');
  var imageName = 'images/pic' + i  + '.jpg';
  newImage.setAttribute('src', imageName);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click',setDisplayImg);
}

function setDisplayImg(src){
	displayedImage.setAttribute('src', this.src);
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',darkOrLight);

function darkOrLight() {
	if (btn.getAttribute('class') === 'dark'){
		btn.setAttribute('class','light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	} else {
		btn.setAttribute('class','dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
	}
}