//min max func for arr
function minMax(arr) {
    if (arr.length === 0) {
        return [null, null];
    }
    
    var min = arr[0];
    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return [min, max]; 
}
console.log(minMax([12, 2, 10, 5, 27]));



//sum of arr
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArr([1, 2, 3, 4, 5]));



//filter arr
function filterArray(arr, con) {
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (con(arr[i])) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}
console.log(filterArray([1, 2, 3, 4, 5], function(num) { return num > 2; }));