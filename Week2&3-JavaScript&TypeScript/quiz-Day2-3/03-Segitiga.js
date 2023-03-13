/** buat segitiga  */

for (let i = 0; i < 6; i++) {}
// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 0; i < 6; i++) {}

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4 - i; j++) {
    row += j + 1 + " ";
  }
  console.log(row);
}

console.log("-------");

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = i; j >= 1; j--) {
    row += j + " ";
  }
  console.log(row);
}
