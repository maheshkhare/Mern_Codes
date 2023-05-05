function function1() {
  console.log("inside function1");
}

// function1()

function function2() {
  console.log("inside function2");
}

function execute(param) {
  console.log("inside execute");
  console.log("param = ", param);
  console.log("type of param = ", typeof param);

  // make a call to the function
  param(); //it will call function2 because value of param is function1-->function2()
}
execute(function2);
