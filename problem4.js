// A palindromic number reads the same both ways. The largest
// palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function palindromic() {
  var product;
  var y;
  var x = 999;
  var largest = 0;
  while (x > 99) {
    y = x;
    while (y > 99) {
      product = x * y;
      if (product.toString() === product.toString().split('').reverse().join('')) {
        if (product > largest) {
        largest = product;
      } else if (product < largest) {
        break;
      }
      }
      y--;
    }
    x--;
  }
  return largest;
};


console.log(palindromic());
