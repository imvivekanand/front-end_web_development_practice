// function fizzbuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzbuzz(55);

function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log("not prime");  
        return false;
      }
    }
    console.log("prime");  
    return true;
  }  
  isPrime(78);