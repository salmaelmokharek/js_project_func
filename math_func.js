//factorial
function factorial(n) {
    if (n < 0) return undefined; 
    if (n === 0) return 1; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(3));



// prime num
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}
console.log(isPrime(7)); 
console.log(isPrime(10)); 



// fibo
function fibo(n) {
    if (n <= 1) 
        return n;

    let a = 0;
    let b = 1;
    let tmp;

    for (let i = 0; i < n; i++) {
        tmp = a + b;
        a = b;
        b = tmp;
    }
    return b;
}
console.log(fibo(5));

