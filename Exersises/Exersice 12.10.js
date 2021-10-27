//function declaration

function sum(a,b) { //function sum(a=0,b=0) --giving default value
    return a + b;
}
sum(5,10);
sum(15,20);         //calling function
sum(15,-20);
sum(3);     //NaN

//function expression

function sum(a=0,b=0) { 
    return a + b;
}
let dogBreed = [`Collie`, `Labrador`, `Huskie`];
dogBreeds.forEach(function(){

});
var sumUp = function(a,b){

}
sum(5,10);