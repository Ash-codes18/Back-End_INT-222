sum=(a,b)=>{
    return a+b;
}


console.log(sum(24,4));


factorial=(n)=>{
    if(n==1){
        return 1;
    }
    
    return factorial(n-1)*n;
}


console.log(factorial(5));