// Count the number of vowels in a string


function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const givenStr = 'Hello World ';
const result = countVowels(givenStr);
console.log(result);

