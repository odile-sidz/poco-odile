
let data = prompt(`enter the number between 0 and 20`);
if (data %2 == 0) {console.log(`is even`)}
else {console.log(`is odd`)}


for (let number = 0; number <= 20; number++) {
    if (number % 2 === 0) {
        document.write(number + ' is even ');
    } else {
        document.write(number + ' is odd');
    }
}
