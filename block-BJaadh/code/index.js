// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
console.log(numbers.indexOf(101),"Q.1");
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9),"Q.2");
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "),"Q.3");
// - Add two new words in the strings array "called" and "sentance"
let updatedString=[...strings].push("called","sentance")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(updatedString);
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.filter(x=>x.includes("is"));
// - Find all the words that contain 'is' use string method 'indexOf'
strings.filter(x=>x.indexOf("is")!=-1);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(x=>x%3==0);
// -  Sort Array from smallest to largest
let newArrayAsending=[...numbers].sort(function(a,b){
return a-b;
});
console.log(newArrayAsending,"line 32");
// - Remove the last word in strings
numbers.pop();
// - Find largest number in numbers
numbers.reduce((a,b)=>a>b ? a : b);
// - Find longest string in strings
strings.reduce((a,b)=>a.length>b.length ? a : b);
// - Find all the even numbers
let evenArray=numbers.filter(x=>x%2==0);
console.log(evenArray,"line 43");
// - Find all the odd numbers
let oddArray=numbers.filter(x=>x%2!=0);
console.log(oddArray,"line 46");
// - Place a new word at the start of the array use (unshift)
// Array.unshift("element");
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,8);
// - Make a subset of strings array ['a','collection']
numbers.splice(3,4);
// - Replace 12 & 18 with 1221 and 1881
console.log(numbers.map(num=>{
  if(num==12){
    return 1221;
  }else if(num==18){
    return 1881;
  }else{
    return num;
  }
}),"line 55");

// - Replace words in strings array with the length of the word
let lengthOnly=strings.map(x=>x.length);
console.log(lengthOnly,"line 57");
// - Find the sum of the length of words using above question
let sumOfStrings=strings.reduce((x,y)=>x.length+y.length);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let startsWWithJ=customers.filter((customer)=>customer.firstname.startsWith("J"));
console.log(startsWWithJ);
// - Create new array with only first name
let fnameCust=customers.map(fName=>fName.firstname);
console.log(fnameCust);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullnameCust=customers.map(customer=>`${customer.firstname} ${customer.lastname}`);
console.log(fullnameCust);
// - Sort the array created above alphabetically
console.log(fullnameCust.sort(),"line 88");
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelsName=customers.filter(function(a){
if(a.firstname.toLowerCase().includes("a")||
a.firstname.toLowerCase().includes("e")||
a.firstname.toLowerCase().includes("i")||
a.firstname.toLowerCase().includes("o")||
a.firstname.toLowerCase().includes("u"))
{
  return true;
}else{
  return false;
}
});