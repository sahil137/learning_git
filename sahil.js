function NthPrime(n){
    var count = 0;
    var num = 2;

    while(count != n){
        num = getNextPrime(num);
        count ++;
    }
    return num;
}

function getNextPrime(n){
    for(var i = ++n; i < n*n; i++){
        if(isPrime(i)){
            return i;
        }
    }
    return 0;
}

function isPrime(n){
    for(var i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}