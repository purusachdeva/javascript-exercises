const fibonacci = function(n) {
  n = parseInt(n)
  if (n == 0 || n == 1) return n
  if (n < 0) return "OOPS"

  return fibonacci(n - 1) + fibonacci(n - 2)
};

// Do not edit below this line
module.exports = fibonacci;
