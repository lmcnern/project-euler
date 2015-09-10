// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?
//

function largestPF(number) {
var i = 2;
while (i <= number) {
    if (number % i === 0) {
        number /= i;
    } else {
        i++;
    }
  }
console.log(i);
}

console.log(largestPF(600851475143));
