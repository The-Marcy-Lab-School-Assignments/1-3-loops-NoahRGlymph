const loop0UpTo10 = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};

// Call the function
loop0UpTo10();

const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
};

// Call the function
loop5to10();

const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i += 2) {
    console.log(i);
  }
};

// Call the function
loopEvenNumbersUpTo10();

const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
};

// Call the function
countdown5to0();

const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
};

// Example usage:
loopUpToNum(5); // Logs numbers from 0 to 4

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

// Call the function
fizzbuzz();

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
