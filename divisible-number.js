
// Count numbers divisible by 3 from 1 - 20;

let count = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        count = count + 1;
    }
}
console.log(count);
