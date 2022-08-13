function randNum() {
	return Math.floor(Math.random() * 255) + 1;
}
function rando() {
	return `rgb(${randNum()},${randNum()},${randNum()})`;
}

let body = document.querySelector("body");
setInterval(() => {
	body.style.backgroundColor = `${rando()}`;
}, 1000);

let h1 = document.querySelector("h1");
setInterval(() => {
	h1.classList.toggle("small-big");
}, 3000);
setInterval(() => {
	h1.classList.toggle("dot-border");
}, 3000);
let img = document.querySelector("img");
setInterval(() => {
	img.classList.toggle("rocket-go");
}, 3000);

let moon = document.querySelector("#moon");
setInterval(() => {
	moon.classList.toggle("moon-go");
}, 3000);

let sun = document.querySelector("#sun");

setInterval(() => {
	sun.classList.toggle("sun-go");
}, 6000);
