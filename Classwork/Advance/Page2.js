//Cloning of object(rest operator)

function function1() {
  const person1 = {
    name: "mahi",
    age: 25,
    Roll_No: 25,
  };

  const person2 = {
    ...person1,
    add: "Pandharewadi",
    mobile_no: +12345,
  };

  console.log(person1);
  console.log(person2);
}

function1();
