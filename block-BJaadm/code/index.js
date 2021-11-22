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
  return (w.startsWith("J")||
          w.startsWith("P"));
};
let startsWithJP=peopleName.filter(x=>startsWith(x));
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
let allfMale=persons.filter(fmale=>fmale.sex=="F");
console.log(allfMale);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
allfMale.filter(x=>x.name.startsWith("C") || x.name.startsWith("J"));
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter(x=>x%2==0),"Q.9")
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find(person=>person.name.startsWith("J")),"Q.10");
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find(person=>person.name.startsWith("P")),"Q.10");
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find(person=>person.name.startsWith("J") && (person.grade>10) && (person.sex=="F")),"Q.11");
// Filter all the female from persons array and store in femalePersons array
let femalePerson=persons.filter(x=>x.sex=="F");
console.log(femalePerson,"Q.12");
// Filter all the male from persons array and store in malePersons array
let malePerson=persons.filter(x=>x.sex=="M");
console.log(malePerson,"Q.13");
// Find the sum of all grades and store in gradeTotal
let gradeTotal=peopleGrade.reduce((a,b)=>a+b);
console.log(gradeTotal,"Q.14")
// Find the average grade
let averageGrade=gradeTotal/persons.length;
console.log(averageGrade,"Q.15");
// Find the average grade of male
let gradeMale=malePerson.map(x=>x.grade);
console.log(gradeMale,"Q.16.1");
let maleTotalGrade=gradeMale.reduce((a,b)=>a+b);
console.log(maleTotalGrade,"Q.16.2")
console.log(maleTotalGrade/gradeMale.length,"Q.16.3");
// Find the average grade of female
let gradeFemale=femalePerson.map(x=>x.grade);
console.log(gradeFemale,"Q.16.1");
let femaleTotalGrade=gradeFemale.reduce((a,b)=>a+b);
console.log(femaleTotalGrade,"Q.16.2")
console.log(femaleTotalGrade/gradeFemale.length,"Q.16.3");
// Find the highest grade
let sortedGrade=[...peopleGrade].sort((a,b) => a - b);
console.log(sortedGrade.pop(),"Q.18");
// Find the highest grade in male
let sortedGradeMale=[...gradeMale].sort((a,b) => a - b);
console.log(sortedGradeMale.pop(),"Q.19");
// Find the highest grade in female
let sortedGradeFemale=[...gradeFemale].sort((a,b) => a - b);
console.log(sortedGradeFemale.pop(),"Q.19");
// Find the highest grade for people whose name starts with 'J' or 'P'
let peopleJP=persons.filter(word=>word.name.startsWith("J") || word.name.startsWith("P") );
let sortedGradeJP=[...peopleJP].sort((a,b) => a.grade - b.grade);
console.log(sortedGradeJP.pop(),"Q.19");
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b)=>a-b);
console.log(peopleGrade,"Q.20")
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b)=>b-a);
console.log(peopleGrade,"Q.21")
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let decendingGrades=[...peopleGrade].sort((a,b)=>a-b);
console.log(decendingGrades,"Q.21")
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let asendingName=[...peopleName].sort();