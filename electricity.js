// Calculate Electricity bill
// For first 100 unit - 5 tk per unit
// For more than 100 unit 6 tk for every unit more than 100
// For more than 200 unit 7 tk for every unit more than 200
const first100Rate = 5;
const second100Rate = 6;
const third100Rate = 7;
function electricityBill(unitQuantity) {
    if (unitQuantity <= 100) {
        const price = unitQuantity * first100Rate;
        return price;
    }
    else if (unitQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const remaining = unitQuantity - 100;
        const remainingBill = remaining * second100Rate;
        const price = first100Price + remainingBill;
        return price;
    }
    else if (unitQuantity > 200) {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const remaining = unitQuantity - 200;
        const remainingBill = remaining * third100Rate;
        const price = first100Price + second100Price + remainingBill;
        return price;
    }
}

const unit = 270;
const totalBill = electricityBill(unit);
console.log(totalBill);
