const nums = [
    12, 47, 89, 34, 65, 23, 78, 90, 56, 32,
    71, 15, 44, 88, 39, 62, 11, 27, 53, 99,
    25, 36, 74, 81, 40, 92, 18, 67, 54, 33,
    77, 95, 12, 48, 84, 29, 60, 41, 73, 85,
    19, 21, 63, 38, 50, 93, 31, 66, 75, 82,
    18, 22, 67, 39, 51, 92, 37, 68, 72, 89
];

function globalLinearSearch(array, target){
    let resultArray = [];
    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            resultArray.push(i)
        }
    }
    if (resultArray === 0) return -1;
    return resultArray;
}

console.log(globalLinearSearch(nums, 92))