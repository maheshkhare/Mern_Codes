//adding element in last position in array
function loops() {
  const nums = [10, 20, 30, 40, 50, 60];
  console.log(nums);

  nums.push(70);
  console.log(nums);
}

// loops();

//Deleting last element in array
function loops1() {
  const nums = [10, 20, 30, 40, 50, 60];
  console.log(nums);

  nums.pop();
  console.log(nums);
}

// loops1();

//Deleting element at specific pos in array
function loops2() {
  const nums = [10, 20, 30, 40, 50, 60];
  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num == 40) {
      nums.splice(i, 1);
    }
  }
  console.log(nums);
}

loops2();
