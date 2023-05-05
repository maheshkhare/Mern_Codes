//Square of Each Array element's
function Square() {
  const num = [1, 2, 3, 4, 5, 6, 7];

  const ans = [];
  for (const nums of num) {
    ans.push(nums ** 2);
  }

  console.log(num);
  console.log(ans);
}

// Square();

//Square of aven Array element's using filter and map
function Square1() {
  const num = [1, 2, 3, 4, 5, 6, 7];

  const ans = num.filter((n) => n % 2 == 0).map((n) => n ** 2);

  console.log(num);
  console.log(ans);
}

Square1();
