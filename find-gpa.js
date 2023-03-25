// Find if anybody got A+ from your friends
// marks = [78, 82, 69];

function checkGpa(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element >= 80) {
            return true;
        }
    }
    return false;
}
const number = [78, 82, 69];
const result = checkGpa(number);
console.log(result);