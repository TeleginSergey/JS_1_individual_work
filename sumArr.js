function sumValues(arr){
    let summ = 0
    for (let i = 0; i<arr.length; i++){
        summ += arr[i];
    }
    return summ
}

console.log(sumValues([1, 2, 3, 4]))