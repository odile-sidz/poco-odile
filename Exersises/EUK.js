let numberOne;
let numberTwo;
let remainder;
numberOne = Number (prompt(`Please enter a number`));
numberTwo = Number (prompt(`Please enter a number`));
if(numberOne > 0) {
    console.log(`numberOne is ok`)
} else {
    console.log(`numberOne should be greater than 0`);
}
let allnumberOK = !Number.isNaN(numberOne) && numberOne > 0 && !Number.Is
// let allnumberOK = numberOne : 0 && numberTwo :0;

if(allnumberOK) {
    console.log(`everything OK`);
while(true) {
remainder = numberOne % numberTwo;

if(remainder === 0) {
    console.log(`GCD is:` + numberTwo);
    break;
} else {

numberOne = numberTwo;
numberTwo = remainder;
        }
    }
} else {
    console.log(`something went wrong`)
}
