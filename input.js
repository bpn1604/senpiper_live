const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  let data1 = data.toString();
  const lines = data1.split(/\r?\n/).map(Number);
  const windowSize = 3;

  let count = 0;
  let previousSum = 0;
  let currentSum = 0;

  for (let i = 0; i < windowSize; i++) {
    previousSum += lines[i];
  }

  for (let i = windowSize; i < lines.length; i++) {
    currentSum = previousSum + lines[i] - lines[i - windowSize]
    if (currentSum > previousSum) {
      count++;
    }

    previousSum = currentSum;
  }
  console.log(count);
});


//ans = 1797
// mihir.joshi@senpiper.com

