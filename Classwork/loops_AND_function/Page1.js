//Traditional loop
function loops() {
  const nums = [10, 20, 30, 40, 50, 60];

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }
}

// loops();

//for..of loop
function loops1() {
  const nums = [10, 20, 30, 40, 50, 60];

  for (const num of nums) {
    console.log(num);
  }
}

// loops1();

//For..in loop
function loops2() {
  const nums = [10, 20, 30, 40, 50, 60];

  for (const num in nums) {
    console.log(num); //print the indexes
    console.log(nums[num]); //print the number's
  }
}

// loops2();

//For each loop
function forEach() {
  const Arr = [1, 2, 3, 4, 5, 6];

  Arr.forEach((num) => {
    console.log(num);
  });
}

forEach();
