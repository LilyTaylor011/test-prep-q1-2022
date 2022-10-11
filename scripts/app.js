//@ts-check
let Name = "Lily";
console.log(Name);

// change the following code so that "watermelon" is written to the console
let fruit = "watermelon";
console.log("The fruit variable equals:", fruit);

let fruits = [
	"grapefruit",
	"orange",
	"grape",
	"apple",
	"blackberry",
	"strawberry",
];
fruits = fruits.filter((grape) => "apple");
console.log("The array of fruits now equals: apple", fruits);

class Player {
	constructor(color, y, x) {
		this.x = 100;
		this.y = 50;
		this.color = color;
		color = "pink";
		this.width = 30;
	}
	update() {
		this.x = this.y + 1;
		console.log;
	}
	display() {
		console.log(this.x, this.y, this.color);
	}
}
