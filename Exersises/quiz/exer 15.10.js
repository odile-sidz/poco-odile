const animals = [`dog`, `cat`];
for(let i =0; i <animals.length; i++) {
    console.log(`I am an ${animals[i]}`);
})

animals.for Each(function(animal) {
    console.log(`I'm an ${animal}`);
})

animals.for Each(animal ==> {
    console.log(`I;m an ${animal}`);
})