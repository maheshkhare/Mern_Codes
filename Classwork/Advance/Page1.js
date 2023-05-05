// object
// - object literal (JSON)
// - using Object root function
// - using constructor function
// - [using class]

// object literal (JSON)
function function1() {
  const fun = {
    name: "mahi",
    Roll_No: 25,
    Marks: 99,
  };

  console.log(fun);
  console.log("typeof fun : " + typeof fun);
}

// function1();

// using Object root function

function function2() {
  const person = new Object();
  person.name = "mahi";
  person.age = 25;
  person.mobile = +9112373;
  person.Roll_No = 25;

  console.log(person);
}

// function2();

// using constructor function
function function3(name, age, Roll_No) {
  this.name = name;
  this.age = age;
  this.Roll_No = Roll_No;
}

const constr = new function3("mahi", 25, 25);
console.log(constr);
