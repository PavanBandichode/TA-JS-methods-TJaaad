let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName=persons.map(w=>w.name);
console.log(peopleName,"Q.1");
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.map(w=>w.grade);
console.log(peopleGrade,"Q.2");
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.map(w=>w.sex);
console.log(peopleSex,"Q.3");
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
function startsWith(w){
  return (w.name.toLowerCase().includes("j")||
          w.name.toLowerCase().includes("p"));
};
let startsWithJP=persons.filter(x=>startsWith(x));
console.log(startsWithJP,"Q.4");

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
// function startsWithJP(w){
//   return (w.name.toLowerCase().includes("a")||
//           w.name.toLowerCase().includes("c"));
// };
// let startsAC=persons.filter(x=> startsWithJP(x));
// console.log(startsAC,"Q.4");
// Log all the filtered male ('M') in persons array
let allMale=persons.filter(male=>male.sex=="M");
console.log(allMale);
// Log all the filtered female ('F') in persons array
let allfMale=persons.filter(fmale=>fmale.sex=="M");
console.log(allfMale);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

// Log all the even numbers from peopleGrade array

// Find the first name that starts with 'J' in persons array and log the object

// Find the first name that starts with 'P' in persons array and log the object

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array

// Filter all the male from persons array and store in malePersons array

// Find the sum of all grades and store in gradeTotal

// Find the average grade

// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
