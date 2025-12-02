// Person constructor
function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
}

// Methods on Person prototype
Person.prototype.exercise = function () {
  console.log("Running is fun! - said no one ever");
};

Person.prototype.fetchJob = function () {
  console.log(`${this.name} is a ${this.job}`);
};

// Programmer constructor (inherits from Person)
function Programmer(name, job, age, languages) {
  Person.call(this, name, job, age); // Inherit Person properties
  this.languages = languages; // Unique to Programmer
  this.busy = true; // Default value
}

// Set prototype chain
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

// Add Programmer methods
Programmer.prototype.completeTask = function () {
  this.busy = false;
};

Programmer.prototype.acceptNewTask = function () {
  this.busy = true;
};

Programmer.prototype.offerNewTask = function () {
  if (this.busy) {
    console.log(`${this.name} can't accept any new tasks right now.`);
  } else {
    console.log(`${this.name} would love to take on a new responsibility.`);
  }
};

Programmer.prototype.learnLanguage = function (newLang) {
  this.languages.push(newLang);
};

Programmer.prototype.listLanguages = function () {
  console.log(`${this.name} knows: ${this.languages.join(", ")}`);
};

const person1 = new Person("Jerry", "Backend Engineer", 20);

const c1 = new Programmer("Tina", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Fiona", "Frontend Developer", 28, ["JavaScript"]);
