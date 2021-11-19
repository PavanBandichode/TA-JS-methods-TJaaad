Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
    - Parameter:Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
   - Return:A string with all array elements joined. If arr.length is 0, the empty string is returned.
   - Example:
     ```js
     const elements = ['Fire', 'Air', 'Water'];

      console.log(elements.join());
      // expected output: "Fire,Air,Water"

      console.log(elements.join(''));
      // expected output: "FireAirWater"

      console.log(elements.join('-'));
      // expected output: "Fire-Air-Water"
     ```
   - The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
   - No it does not mutate the original array
3. `flat`
     - Parameter:The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return:A new array with the sub-array elements concatenated into it.


   - Example:
     ```js
    const arr1 = [0, 1, 2, [3, 4]];

    console.log(arr1.flat());
    // expected output: [0, 1, 2, 3, 4]

    const arr2 = [0, 1, 2, [[[3, 4]]]];

    console.log(arr2.flat(2));
    // expected output: [0, 1, 2, [3, 4]]
     ```
   - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - No it does not mutate the original array
4. `push`
       - Parameter:The element(s) to add to the end of the array.
   - Return:The new length property of the object upon which the method was called.


   - Example:
     ```js
   const animals = ['pigs', 'goats', 'sheep'];

    const count = animals.push('cows');
    console.log(count);
    // expected output: 4
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]

    animals.push('chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
     ```
   - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - Yes it does mutate the original array
5. `indexOf`
   - Parameter:1.Element to locate in the array.
              2.The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched
   - Return:The first index of the element in the array; -1 if not found.


   - Example:
     ```js
   const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

      console.log(beasts.indexOf('bison'));
      // expected output: 1

      // start from index 2
      console.log(beasts.indexOf('bison', 2));
      // expected output: 4

      console.log(beasts.indexOf('giraffe'));
      // expected output: -1
       var numbers = [2, 5, 9, 2];
          numbers.lastIndexOf(2);     // 3
          numbers.lastIndexOf(7);     // -1
          numbers.lastIndexOf(2, 3);  // 3
          numbers.lastIndexOf(2, 2);  // 0
          numbers.lastIndexOf(2, -2); // 0
          numbers.lastIndexOf(2, -1); // 3
     ```
   - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array
6. `lastIndexOf`
     - Parameter:1.Element to locate in the array.
              2.The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched
   - Return:The first index of the element in the array; -1 if not found.


   - Example:
     ```js
   const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

      console.log(animals.lastIndexOf('Dodo'));
      // expected output: 3

      console.log(animals.lastIndexOf('Tiger'));
      // expected output: 1
     ```
   - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
   - No it does not mutate the original array
7. `includes`
  - Parameter:1.The value to search for.
              2.The position in this array at which to begin searching for searchElement.
   - Return:A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).


   - Example:
     ```js
   const array1 = [1, 2, 3];

    console.log(array1.includes(2));
    // expected output: true

    const pets = ['cat', 'dog', 'bat'];

    console.log(pets.includes('cat'));
    // expected output: true

    console.log(pets.includes('at'));
    // expected output: false
     ```
   - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
   - No it does not mutate the original array
8. `reverse`
   - Return:The reversed array.


   - Example:
     ```js
   const array1 = ['one', 'two', 'three'];
    console.log('array1:', array1);
    // expected output: "array1:" Array ["one", "two", "three"]

    const reversed = array1.reverse();
    console.log('reversed:', reversed);
    // expected output: "reversed:" Array ["three", "two", "one"]

    // Careful: reverse is destructive -- it changes the original array.
    console.log('array1:', array1);
    // expected output: "array1:" Array ["three", "two", "one"]
     ```
   - The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
   - yes it does  mutate the original array
9. `every`
      - Parameter:1.A function to test for each element, taking three arguments:
              1.1.  element
                    The current element being processed in the array.

                    index Optional
                    The index of the current element being processed in the array.

                    array Optional
                    The array every was called upon.
   - Return:true if the callbackFn function returns a truthy value for every array element. Otherwise, false.


   - Example:
     ```js
  function isBigEnough(element, index, array) {
  return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true
    // expected output: false
     ```
   - The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
   - No it does not mutate the original array
10. `shift`
  
   - Return:The removed element from the array; undefined if the array is empty.


   - Example:
     ```js
   const array1 = [1, 2, 3];

    const firstElement = array1.shift();

    console.log(array1);
    // expected output: Array [2, 3]

    console.log(firstElement);
    // expected output: 1
     ```
   - The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
   - Yes it does  mutate the original array
11. `splice`
        - Parameter:start
        : The index at which to start changing the array. If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items [n*] provided. If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If start is negative infinity, it will begin from index 0.
        deleteCount Optional
        : An integer indicating the number of elements in the array to remove from start. If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted. If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
        item1, item2, ... Optional
        : The elements to add to the array, beginning from start.
        If you do not specify any elements, splice() will only remove elements from the array.
   - Return:An array containing the deleted elements.

            If only one element is removed, an array of one element is returned.

            If no elements are removed, an empty array is returned.


   - Example:
     ```js
   const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // inserts at index 1
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]
     ```
   - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
   - Yes it does mutate the original array
12. `find`
      - Parameter:callbackFn
                  Function to execute on each value in the array, taking 3 arguments:

                  element
                  The current element in the array.

                  index Optional
                  The index (position) of the current element in the array.

                  array Optional
                  The array that find was called on.
   - Return:The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.


   - Example:
     ```js
    const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
    ];

    function isCherries(fruit) {
      return fruit.name === 'cherries';
    }

    console.log(inventory.find(isCherries));
    // { name: 'cherries', quantity: 5 }
     ```
   - The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
   - No it does not mutate the original array
13. `unshift`
     - Parameter:The elements to add to the front of the arr.
   - Return:The new length property of the object upon which the method was called.


   - Example:
     ```js
    const array1 = [1, 2, 3];

    console.log(array1.unshift(4, 5));
    // expected output: 5

    console.log(array1);
    // expected output: Array [4, 5, 1, 2, 3]

     ```
   - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
   - yes it does mutate the original array
14. `findIndex`
     - Parameter:callbackFn
                  A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.

                  It takes three arguments:

                  element
                  The current element being processed in the array.

                  index Optional
                  The index of the current element being processed in the array.

                  array Optional
The array findIndex() was called upon.
   - Return:The index of the first element in the array that passes the test. Otherwise, -1.


   - Example:
     ```js
   const array1 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 13;

    console.log(array1.findIndex(isLargeNumber));
      // expected output: 3

     ```
   -The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.


   - No it does not mutate the original array
15. `filter`
     - Parameter:callbackFn
                  Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

                  It accepts three arguments:

                  element
                  The current element being processed in the array.

                  indexOptional
                  The index of the current element being processed in the array.

                  arrayOptional
                  The array on which filter() was called.

                  thisArgOptional
                  Value to use as this when executing callbackFn.
   - Return:A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.


   - Example:
     ```js
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]
     ```
   - TThe filter() method creates a new array with all elements that pass the test implemented by the provided function.
   - No it does not mutate the original array
16. `flat`
       - Parameter:The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return:A new array with the sub-array elements concatenated into it.


   - Example:
     ```js
    const arr1 = [0, 1, 2, [3, 4]];

    console.log(arr1.flat());
    // expected output: [0, 1, 2, 3, 4]

    const arr2 = [0, 1, 2, [[[3, 4]]]];

    console.log(arr2.flat(2));
    // expected output: [0, 1, 2, [3, 4]]
     ```
   - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - No it does not mutate the original array
17. `forEach`
     - Parameter:callbackFn
                Function to execute on each element. It accepts between one and three arguments:

                element
                The current element being processed in the array.

                index Optional
                The index of element in the array.

                array Optional
                The array forEach() was called upon.

                thisArg Optional
                Value to use as this when executing callbackFn.
   - Return:undefined.


   - Example:
     ```js
   const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
     ```
   - The forEach() method executes a provided function once for each array element.
   - No it does not mutate the original array
18. `map`
     - Parameter:callbackFn
                Function to execute on each element. It accepts between one and three arguments:

                element
                The current element being processed in the array.

                index Optional
                The index of element in the array.

                array Optional
                The array forEach() was called upon.

                thisArg Optional
                Value to use as this when executing callbackFn.
   - Return:The first index of the element in the array; -1 if not found.


   - Example:
     ```js
  const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
     ```
   - A new array with each element being the result of the callback function.
   - No it does not mutate the original array
19. `pop`
    
   - Return:The removed element from the array; undefined if the array is empty.


   - Example:
     ```js
   const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    console.log(plants.pop());
    // expected output: "tomato"

    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

    plants.pop();

    console.log(plants);
    // expected output: Array ["broccoli", "cauliflower", "cabbage"]
     ```
   - The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
   - Yes it does  mutate the original array
20. `reduce`
     - Parameter:it accepts inital value and call back fn as parameter
   - Return:The value that results from running the “reducer” callback function to completion over the entire array.


   - Example:
     ```js
  const array1 = [1, 2, 3, 4];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    // expected output: 15
     ```
   - The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
   - No it does not mutate the original array
21. `slice`
     - Parameter:1.Element to locate in the array.
              2.The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched
   - Return:The first index of the element in the array; -1 if not found.


   - Example:
     ```js
   const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // expected output: Array ["camel", "duck"]
     ```
   - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
   - No it does not mutate the original array
22. `some`
     - Parameter:callbackFn
                Function to execute on each element. It accepts between one and three arguments:

                element
                The current element being processed in the array.

                index Optional
                The index of element in the array.

                array Optional
                The array forEach() was called upon.

                thisArg Optional
                Value to use as this when executing callbackFn.
   - Return:true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.


   - Example:
     ```js
   const array = [1, 2, 3, 4, 5];

    // checks whether an element is even
    const even = (element) => element % 2 === 0;

    console.log(array.some(even));
    // expected output: true
     ```
   - The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
   - No it does not mutate the original array
