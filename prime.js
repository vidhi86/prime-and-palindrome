
let num = 13;
let count = 0;
for (i = 13; i <= num; i--) {
  if (num % i === 0) {
    count++;
  }
}
if (count < 2) {
  console.log("No");
} else {
  console.log("Yes");
}

