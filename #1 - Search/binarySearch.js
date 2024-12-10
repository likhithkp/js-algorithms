const nums = [
    12, 47, 89, 34, 65, 23, 78, 90, 56, 32,
    71, 15, 44, 88, 39, 62, 11, 27, 53, 99,
    25, 36, 74, 81, 40, 92, 18, 67, 54, 33,
    77, 95, 15, 48, 84, 29, 60, 41, 73, 85,
];

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.ceil((start + end) / 2);
        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1
}