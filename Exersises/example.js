function Color(colorName) {
this.name = colorName;
this.printName = function() {
    console.log(`my color name is:` + this.name);
    }
}

const red = new Color(`red`); 
red.printName()

const blue = new Color(`blue`);
blue.printName();

const myFavouriteOS = { name: `Linux`}
red.printName.apply(myFavouriteOS);


// const colors = {
//     color1: `red`;
//     color2: `blue`;
// }

// Object.values(colors)
