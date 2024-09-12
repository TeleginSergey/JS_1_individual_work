function isPrime(number) {
    if (number < 2) {
        return [number, false];
    }
    if (number === 2) {
        return [number, true]; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return [number, false]; 
        }
    }
    return [number, true]; 
}

for (let i = 2; i <= 20; i++) {
    console.log(isPrime(i));
}
