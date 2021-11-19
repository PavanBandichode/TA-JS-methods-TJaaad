let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("Papaya");
console.log(fruits);
// Remove the last element from fruits array
fruits.pop();
console.log(fruits);
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(fruits);
// Log the element on index 0 and 1
console.log(fruits[0]);
console.log(fruits[1]);
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();
console.log(fruits);
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift('Guava');
console.log(fruits,"line 20");
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift('Dragon Fruit');
console.log(fruits,"line 23");
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
let check=fruits.some(elem=> {return elem=="Dragon Fruit";});
console.log(check);
// let check=fruits.some(elem=> {return elem=="Guava";});
// console.log(check);
// Update the value of index 1 to `Pears`
fruits[1]="pears";
console.log(fruits);
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0,'Kiwi','Lemon');
console.log(fruits,"line 34");
// Remove (slice) all the element from index 5
fruits.slice(5);//[] gives empty array
console.log(fruits);
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits=['Berries', 'Melons'];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits=fruits.concat(moreFruits);
console.log(fruits,"line 42");
// Log the name of all fruit in console
fruits.forEach(fruit=>console.log(fruit,"line 45"));
// Convert each fruit name to lowercase and log it
let lowerCaseArray=fruits.map(fruit=>fruit.toLowerCase());
console.log(lowerCaseArray,"Q.47")
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
// let lowerCaseArray=fruits.map(fruit=>fruit.toLowerCase());
// console.log(lowerCaseArray,"Q.47")
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let upperCaseArray=fruits.map(fruit=>fruit.toUpperCase());
console.log(upperCaseArray,"Q.53")
let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
numbers.flat(Infinity);
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
numbersTwo.flat(Infinity);
console.log(numbersTwo.flat(Infinity),"Q.63");
// Convert the numbersThree array to one level element.
let newArray=numbersThree.flat(Infinity);
console.log(numbersTwo.flat(Infinity),"Q.67");
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
let newFlatArray=numbersThree.flat(Infinity);

// Use forEach to log all the elements of numberThree array
newFlatArray.forEach(num=>console.log(num,"Q.73"));
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers=newFlatArray.map(num=>num*2);
console.log(doubleNumbers);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers=newFlatArray.map(num=>num*3);
console.log(tripleNumbers,"Q.77");
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers=newFlatArray.map(num=>num/2);
console.log(halfNumbers,"Q.80");
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers=newFlatArray.filter(num=>num%2!=0);
console.log(oddNumbers,"Q.83");
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers=newFlatArray.filter(num=>num%2==0);
console.log(evenNumbers,"Q.83");

// Find the index of 10 in numbersThree array
console.log(newFlatArray.indexOf(10),"Q.90");
// Reverse the values of numbersThree array
console.log(newFlatArray.reverse(),"Q.92");
// Reverse the values of numbersTwo array
console.log(numbersTwo.reverse(),"Q.94");
// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.join("-").toUpperCase(),"Q.96");
// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.join("&").toLowerCase(),"Q.96");