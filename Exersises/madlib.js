var noun = prompt('Enter a noun');
var verb = prompt('Enter a verb');
var adjective = prompt('Enter an adjective');
var adverb = prompt('Enter an adverb');

function myStory(myNoun, myAdjective, myVerb, myAdverb)  { 
    var result = " ";
    result = myAdjective + ` and very nice ` + myNoun + ` was ` + myVerb + ` to eat ` + myAdverb;
    return result
}  
myStory("cat", "white", "going", "quickly");


