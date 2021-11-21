let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let findLongestWord=words.reduce((a,b)=>a.length>b.length ? a : b);
console.log(findLongestWord,"Q.1");
// - Convert the above array "words" into an array of length of word instead of word.
let lengthArray=words.map(word=>word.length);
console.log(lengthArray,"Q.1");
// - Create a new array that only contains word with atleast one vowel.
console.log(words.filter(function(word){
  if(word.toLowerCase().includes("a"||"e"||"i"||"o"||"u")){
    return true;
  }else{
    return false;
  }
}),"Q.3");
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
let noVowel=words.filter(function(word){
  if(word.startsWith()!= "a"||"e"||"i"||"o"||"u"){
    return false;
  }else{
    return true;
  }
});
console.log(noVowel,"Q.5");
// - Create a new array that contianse words not ending with vowel
let noVowelAtEnd=words.filter(function(word){
if(word.endsWith()!= "a"||"e"||"i"||"o"||"u"){
  return false;
}else{
  return true;
}
});
console.log(noVowelAtEnd,"Q.6");


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray=numbers.reduce((a,b)=>a+b);
console.log(sumArray,"Q.7");
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let mulByThree=numbers.filter(num=>num%3==0);
console.log(mulByThree,"Q.8");
// - Create a new array that contains only even numbers
let evenArray=numbers.filter(num=>num%2==0);
console.log(evenArray,"Q.9");
// - Create  a new array that contains only odd numbers.
let oddArray=numbers.filter(num=>num%2!=0);
console.log(oddArray,"Q.10");
// - Create a new array that should have true for even number and false for odd numbers.
let evenTrue=numbers.map(function(num){
  if(num%2==0){
    return true;
  }else{
    return false;
  }
});
console.log(evenTrue,"Q.11");
// - Sort the above number in assending order.
let assendingArray=[...numbers].sort((a,b)=>a-b);
console.log(assendingArray,"Q.12");
// - Does sort mutate the original array?
//yes it does mutate the array
// - Find the sum of the numbers in the array.
let finalSum=numbers.reduce((accum,inValue)=>accum+inValue);
console.log(finalSum,"Q.14");
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
