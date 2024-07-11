// 1. Basic Variables and String Concatenation
console.log("hello world");

var firstName = "Lario";
let lastName = "Spence";
const fullName = firstName + " " + lastName;

let greetings = "AWE! my naam is: " + fullName;

// 2. Data Types and Values
let nil; // Declaring a variable without assigning a value
let nill = null; // Assigning null explicitly
let bigInt = 2 ** 53; // Calculating 2 to the power of 53

console.log("typeof 'hello world'", typeof "helloworld"); // Checking the type of a string
console.log("typeof 31,", typeof 31); // Checking the type of a number

// 3. Template Literal
let groete = `hello my name is ${fullName}`; // Using template literals

// 4. Objects
const person = {
    firstName: "Lario",
    lastName: "Spence",
    age: 22,
    address: {
        number: 5,
        street: "Rippen Avenue",
        Province: "Gautend",
        country: "South Africa"
    },
    getFormattedAddress: function () {
        return `${this.address.number} ${this.address.street}, ${this.address.Province}, ${this.address.country}`;
    }
};

// 5. Arrays
let fruits = ["Orange", "pear", "apple"];
fruits.push("banana"); // Adding an item to the end of the array
const firstFruit = fruits.shift(); // Removing the first item from the array

// 6. Higher-Order Array Methods
const filteredFruits = fruits.filter((fruit) => {
    return fruit.length > 5 && !fruits.includes("Orange");
});

const mappedFruits = fruits.map((fruit, index) => {
    return {
        productId: index,
        name: fruit,
        qty: 0,
        price: "R 10",
    };
});

const sortedFruits = fruits.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

// 7. Conditional Statements
const number = 15;
if (number == 20) {
    console.log("number is 20");
} else if (number == 10) {
    console.log("number is 10");
} else {
    console.log("number is neither 10 nor 20");
}

// 8. Loops
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("For of Loop:");
for (const fruit of fruits) {
    console.log(fruit);
}

console.log("For each loop:");
fruits.forEach((fruit) => {
    console.log(fruit);
});

// 9. While Loop
let index = 0;
let isConditionSatisfied = false;
while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
};



//Functions
let todos = [
    {
        id:1,
        title:"learn html, css and js ",
        completed: true,
    }
    {
        id:2,
        title:"Write code",
        completed: false,
    },
];

function uncompletedTask (todos) {
    return todos.filter((todo) => !todo.completed)
}

function isTaskDone (todos) {
    return todos.completed
}

const getAllCompletedTask = (todos) => {
    return todos.filter((todos))
};



//constructor fucntions 

function user (firstName, lastName, bio, email) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.bio = bio;
    this.email = email;
}

user.prototype.getFulName = function () {
    return `${this.firstName} ${this.lastName}`
};

const user = new user (
    "Lario",
    "Spence",
    "I am a web developer",
    "lario@spence.com"

)
console.log(user);
console.log(user.getFulName());

//Classes
const Person = class{
    constructor (firstName, lastName, bio, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.email = email;
}
}
const personClas