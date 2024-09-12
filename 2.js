function findMinMax(arr){
    const MinMax = {};
    MinMax['max'] = Math.max(...arr);
    MinMax['min'] = Math.min(...arr);
    return MinMax
}

console.log(findMinMax([-5, 2, 3, 41, 5, 6]))