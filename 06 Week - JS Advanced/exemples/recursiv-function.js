//  Recursive functions
// O functie care se apeleaza pe ea insasi
// Important sa avem conditie de oprire

// Exemplu: Sirul lui fibonaci

// fib(0) = 0
// fib(1) = 1
// fib(2) = fib(1) + fib(0)
// fib(3) = fib(2) + fib(1) = fib(1) + fib(0) + fib(1)
// ...
// fib(n) = fib(n - 1) + fib(n - 2)

function fib(n) {
  // orice functie recursiva are o conditie de oprire
  if(n === 1 || n === 0){
    return n;
  }

  const s = fib(n - 1) + fib(n - 2)
  return s;
}

console.log(fib(0)) // n = 0, returneaza 0
console.log(fib(1)) // n = 1, returneaza 1
console.log(fib(2)) // n = 2, returneaza fib(1) + fib(0)