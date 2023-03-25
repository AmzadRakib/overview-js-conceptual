function countAvarage(n) {
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            count = count + 1;
            sum = sum + i;
        }
    }
    const avarage = sum / count;
    return avarage;
}

const n = 10;
const result = countAvarage(n);
console.log(result);