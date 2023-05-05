//Nested Functions

function OuterFunction() {
  console.log("Outer Outer Function");

  function InnerFunction() {
    console.log("Inner Outer Function");
  }
  InnerFunction();
}

OuterFunction();
