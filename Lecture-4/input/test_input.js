var inp = require('prompt-sync')();

function factorial(n){
    if(n<=1){
        return 1;
     }
    return n*factorial(n-1);
}

var n = inp('Enter a Number : ');
console.log(factorial(n));

