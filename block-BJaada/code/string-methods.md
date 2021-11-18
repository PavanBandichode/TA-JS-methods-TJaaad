Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Return:method returns the value of the string converted to uppercase.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); //'ARYA STARK'
      "pavan".toUpperCase();//'PAVAN'
     ```
   - `toUpperCase` accepts a string data type and return the string dtat type but in uppercase.
3. `toLowerCase`
 - Return:method returns the value of the string converted to uppercase.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toLowerCase(); //'arya stark'
      "pavan".toLowerCase();//'pavan'
     ```
   - `toUpperCase` accepts a string data type and return the string dtat type but in Lowercase.
4. `trim`
   - Return:A new string representing str stripped of whitespace from both its beginning and end.
   - Example:
     ```js
    const greeting = '   Hello world!   ';
    console.log(greeting.trimStart());
    // expected output: "Hello world!     ";
     ```
   -  The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters
5. `trimEnd`
   -Return:A new string representing str stripped of whitespace from  end.
   - Example:
     ```js
    const greeting = '   Hello world!   ';
    console.log(greeting.trimEnd());
    // expected output: "     Hello world!";
     ```
6. `trimStart`
 Return:A new string representing str stripped of whitespace from both its beginning .
   - Example:
     ```js
    const greeting = '   Hello world!   ';
    console.log(greeting.trim());
    // expected output: "Hello world!";
     ```
7. `concat`
   - Return:new string containing the combined text of the strings provided.
   - Example:
     ```js
  const str1 = 'Hello';
  const str2 = 'World';

  console.log(str1.concat(' ', str2));
  // expected output: "Hello World"

  console.log(str2.concat(', ', str1));
  // expected output: "World, Hello"

     ```
   - `concat` function concatenates the string arguments to the calling string and returns a new string.        Changes to the original string or the returned string don't affect the other.
8. `endsWith`
 - Parameter:1.The characters to be searched for at the end of str.
             2.length :If provided, it is used as the length of str. Defaults to str.length.(optional)
 - Return:true if the given characters are found at the end of the string; otherwise, false.
   - Example:
     ```js
  let str = 'To be, or not to be, that is the question.'

  console.log(str.endsWith('question.'))  // true
  console.log(str.endsWith('to be'))      // false
  console.log(str.endsWith('to be', 19))  // true

     ```
   - `endsWith` This method lets you determine whether or not a string ends with another string. This method is   case-sensitive.
9. `includes`
  - Parameter:1.A string to be searched for within str.
             2.The position within the string at which to begin searching for searchString. (Defaults to 0.)
  - Return:true if the search string is found anywhere within the given string; otherwise, false if not.
   - Example:
     ```js
  let str = 'To be, or not to be, that is the question.'

  console.log(str.includes('that'))  // true
  'Blue Whale'.includes('blue')  // returns false
  console.log(str.includes('To be', 1))     // false

     ```
   - `includes` This method lets you determine whether or not a string includes the given aurgumented string. This method is   case-sensitive.
10. `indexOf`
   - Parameter:1.The string value to search for.
             2.An integer representing the index at which to start the search. Defaults to 0.
  - Return:The index of the first occurrence of searchValue, or -1 if not found.
   - Example:
     ```js
  'hello world'.indexOf('') // returns 0
  'hello world'.indexOf('', 11) // returns 11
  'Blue Whale'.indexOf('Blue')      // returns  0
  'Blue Whale'.indexOf('Blute')     // returns -1
  'Blue Whale'.indexOf('Whale', 0)  // returns  5
  'Blue Whale'.indexOf('Whale', 5)  // returns  5
  'Blue Whale'.indexOf('Whale', 7)  // returns -1
     ```
   - `indexOf` Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character of a string called stringName is stringName.length - 1.
11. `lastIndexOf`
  - Parameter:1.A string representing the value to search for. If searchValue is an empty string, then  fromIndexis returned.
             2.The index of the last character in the string to be considered as the beginning of a match. The default value is +Infinity. If fromIndex >= str.length, the whole string is searched. If fromIndex < 0, the behavior will be the same as if it would be 0.
  - Return:The index of the last occurrence of searchValue; -1 if not found.
   - Example:
     ```js
  'canal'.lastIndexOf('a');     // returns 3
  'canal'.lastIndexOf('c', 0);  // returns 0
  'canal'.lastIndexOf('c', -5); // returns 0
     ```
   - `lastIndexOf()`The lastIndexOf() method is case sensitive. For example, the following expression returns -1 index of the last character of a string called stringName is stringName.length - 1.
12. `padEnd`
    - Parameter:1.The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
             2.The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).
  - Return:A String of the specified targetLength with the padString applied at the end of the current str.
   - Example:
     ```js
  'abc'.padEnd(10);          // "abc       "
  'abc'.padEnd(10, "foo");   // "abcfoofoof"
  'abc'.padEnd(6, "123456"); // "abc123"
  'abc'.padEnd(1);           // "abc"
     ```
   - `padEnd`The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
13. `padStart`
  - Parameter:1.The length of the resulting string once the current str has been padded. If the value is lower   than str.length, the current string will be returned as-is.
             2.The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).
  - Return:A String of the specified targetLength with padString applied from the start..
   - Example:
     ```js
  'abc'.padStart(10);         // "       abc"
  'abc'.padStart(10, "foo");  // "foofoofabc"
  'abc'.padStart(6,"123465"); // "123abc"
  'abc'.padStart(8, "0");     // "00000abc"
  'abc'.padStart(1);          // "abc"
     ```
   - `padStart`The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
14. `repeat`
  - Parameter:An integer between 0 and +Infinity, indicating the number of times to repeat the string.
  - Return: new string containing the specified number of copies of the given string.
   - Example:
     ```js
  'abc'.repeat(-1)    // RangeError
  'abc'.repeat(0)     // ''
  'abc'.repeat(1)     // 'abc'
  'abc'.repeat(2)     // 'abcabc'
  'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
  'abc'.repeat(1/0)   // RangeError
     ```
   - `repeat`The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
15. `replace`
    - Parameter:An integer between 0 and +Infinity, indicating the number of times to repeat the string.
  - Return: new string containing the specified number of copies of the given string.
   - Example:
     ```js
  'abc'.repeat(-1)    // RangeError
  'abc'.repeat(0)     // ''
  'abc'.repeat(1)     // 'abc'
  'abc'.repeat(2)     // 'abcabc'
  'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
  'abc'.repeat(1/0)   // RangeError
     ```
   - `repeat`The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
16. `slice`
   - Parameter:The zero-based index at which to begin extraction.
               The zero-based index before which to end extraction. The character at this index will not be included.
      
  - Return: A new string containing the extracted section of the string.
   - Example:
     ```js
      let str = 'The morning is upon us.'
      str.slice(-3)      // returns 'us.'
     ```
   - The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
17. `split`
 - Parameter:The zero-based index at which to begin extraction.
               The zero-based index before which to end extraction. The character at this index will not be included.
      
  - Return: An Array of strings, split at each point where the separator occurs in the given string.
   - Example:
     ```js
    const myString = 'Hello World. How are you doing?'
      myString.split(' ', 3)
     ```
   - The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
18. `substring`
- Parameter:The index of the first character to include in the returned substring.
            The index of the first character to exclude from the returned substring.
      
  - Return: A new string containing the specified part of the given string.
   - Example:
     ```js
   let anyString = 'Mozilla'

// Displays 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))

// Displays 'Mozill'
console.log(anyString.substring(0, 6))

// Displays 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))
     ```
   - The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
