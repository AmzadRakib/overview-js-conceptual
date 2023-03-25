// Mular dam
// For first 2 kg - 30 tk per kg
// For more than 2 kg - 25 tk per kg
// write a function to calculate total price based on given quantity. + handle errors

const first2kg = 30;
const second2kgMore = 25;
function mularDam(weight) {
    if (weight <= 2) {
        return first2kg * weight;
    }
    else {
        return second2kgMore * weight;
    }
}

const mularWeight = 2;
const result = mularDam(mularWeight);
console.log(result);