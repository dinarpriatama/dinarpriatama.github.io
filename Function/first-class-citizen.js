// Contoh 1
function multiply(a, b) {
    return a * b;
}
  
function calculate(operation, numA, numB) {
  return operation(numA, numB);
}
  
const result = calculate(multiply, 2, 4);
console.log(result);


// Contoh 2
function multiplier(x) {
    return function (num) {
      return x * num;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));