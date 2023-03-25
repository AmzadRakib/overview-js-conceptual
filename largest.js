function findLargest(number) {
    let largest = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const result = findLargest([20, 24, 208, 39, 40]);
console.log(result);