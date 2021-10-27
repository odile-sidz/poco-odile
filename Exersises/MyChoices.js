var choices = [`blue`, `green`, `black`, `white`];
for(i=0; i<= choices.length-1; i++) {
    if( i == 0) {
        console.log(`My ` + (i+1) +`st` + ` choice is ` + choices[i]);
    }
    else if (i == 1) {
        console.log(`My ` + (i+1) +`nd` + ` choice is ` + choices[i]);
    }
    else if (i == 2) {
        console.log(`My ` + (i+1) +`rd` + ` choice is ` + choices[i]);
    }
    else {
        console.log(`My ` + (i+1) +`th` + ` choice is ` + choices[i]);
    }
}