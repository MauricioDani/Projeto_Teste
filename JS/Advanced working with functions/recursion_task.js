let sum = function(number) {
    if(number == 1){
        return 1;
    }
    return number + sum(number-1)
}

console.log(sum(10));

/*The task is to write a function factorial(n) that calculates n! using recursive calls.*/

let factorial = function(number) {
    if(number == 1){ 
        return 1;
    }
    return number * factorial(number-1);
}

console.log(factorial(5));

/*Write a function fib(n) that returns the n-th Fibonacci number.*/

let fibonacci = function(number) {
    if(number <= 1){ 
        return number;
    } 
    return fibonacci(number -1) + fibonacci(number - 2);

}

console.log(fibonacci(7));
