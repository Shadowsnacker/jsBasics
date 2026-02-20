// for (let i = 5; i >= 1; i--){
//     if (i % 2 !== 0){ // Shows odd numbers
//         console.log('Hello ', i);
//     }
// }
// Begin the while loop; needs the leading external variable.
// let i = 0;
// while (i <= 5) {
//     /* It's subtle, but no need to curly bracket after the if conditional 
//         because I want the single line code block to be neat and inline. 
//         i++ is next line for a reason and outside the if statement code block. */
//     if (i % 2 !== 0) console.log('World', i); 
//     i++;
// }
/* Begin a do-while loop, rarer use-case. Same need for an external
    variable but code block will always get read at lease once. */
// let j = 9;
// do {
//     if (j % 2 !== 0) console.log('Olympus.. would be that weh', j); 
//     j++;
// } while (j <= 5);

// **************************************************************************************
// /* SUMMARY: For-in loop: Iterates over the properties of an object.
//             For-of loop: Iterates over the elements/items of an array */
// // Begin a for-in loop. Can list items in objects.
// const person = {
//     name: 'Jeremy',
//     age: 36,
// }
// for (let key in person)
//     /* Dot notation 'person.name' would work here but not always if it hasn't rendered yet.
//         square bracket notation is more commonplace friendly */
//     console.log(key, person[key]);
// //                  ***************************************************
// // Begin for-of loop.
// // Line 35 is an old way using a for-in loop through an array.
// // const colors = ['red', 'green', 'blue'];
// // for (let index in colors) console.log(index, colors[index]);
// // for (let color of colors) console.log(color);
// // *****************************************************************************************

// // Exercise #1
// let number = max(3, 4);
// console.log(number);
// function max (a, b){
//     /* if (a < b) return a;
//     return b; */
//     // Alternatively instead of lines 43 & 44, use the Ternary/Conditional Operator
//     return (a > b) ? a : b;
// }
// // Exercise #2
// console.log(isLandscape(45, 30));
// function isLandscape(width, height){
//     return (width > height);
// }
// // Exercise #3: fizzbuzz!
// /* Divisable by 3: fizz
//     Divisable by 5: buzz
//     Divisable by both: fizzbuzz
//     Any other number simplys prints itself
//     If NaN: console.log("Not a number") */
// const output = fizzbuzz(30);
// console.log(output);
// function fizzbuzz(input) {
//     if (typeof input !== 'number'){
//         return NaN;
//     }
//     if (input <= 0){
//         alert('Bigger than zero please');
//         return 'Positive integers only';
//     }
//     if ((input % 3 === 0) && (input % 5 === 0)){
//         return 'FizzBuzz';
//     }
//     if (input % 3 === 0){
//         return 'Fizz';
//     }
//     if (input % 5 === 0){
//         return 'Buzz';
//     }
//     return input;
// }
// // Exercise #4
// // Speed limit is 70. console.log('ok') if driving under 1 point.
// // Every 5 over 70 adds 1 point.
// // Once 12 points is reached, suspend liscense  
// checkSpeed(130);
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if (speed < speedLimit + kmPerPoint){ // Changed the magic numer(70) to a dynamic reference point
//         console.log('ok');
//         return; // Added a return here so that I can delete the "else" code block format below to tighten things up further
//     }
// //  else {  // This would also allow to take out extra indentations below for easier code reading.
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//         console.log('License suspended');
//     else
//         console.log('Points: ', points);
// }
// // // Exercise #5 Odd or even
// // showNumbers(10);
// // function showNumbers(limit) {
// //     for (let i = 0; i <= limit; i++){
// //         // if (i % 2 === 0) console.log(i, "Even");
// //         // else console.log(i, "Odd");               
// //         // We could do lines 103 & 104 but a ternary operator below is cleaner
// //         const message = (i % 2 === 0) ? 'Even' : 'Odd';
// //         console.log(i, message);
// //     }
// // }
// // Exercise #6 Count number of 'truthy' values in an array
// const array = [0, null, undefined, '', 1, 2, 3];
// console.log(countTruthy(array));
// function countTruthy(array) {
//     let n = 0;
//     for (let value of array){  // The trick of this whole thing is a FOR-OF loop. Review ^
//         if (value) 
//             n++;
//     }
//     return n;
// }
// // Exercise #7
// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b',
// }
// showProperties(movie);
// function showProperties(objValue) {
//     // Note the single line useage trimming down extra brackets!
//     for (let key in objValue)
//         if (typeof objValue[key] === 'string')
//             console.log(key + ': ' + objValue[key]);
//             // console.log(`${key}: ${objValue[key]}`); // or to format the semicolon in the output for style
// }
// // Exercise #8 Summing together a limit's multiples
// // console.log(sum(10));
// function sum(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;
//     return sum;
// }
// // Exercise #9
// const marks = [80, 80, 50];
// // console.log(calculateGrade(marks));
// function calculateGrade(mark) {
//     const average = calculateAverage(mark); // This line is the trick that segregates functions 
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// } // These two function were once together, but it's best to split up jobs as simply as possible
// function calculateAverage(array) {
//     let grade = 0;
//     for (let x of array)
//         grade += x;
//     return grade / array.length;
// }
// // Exercise #10
// // stars(5);
// function stars(rows) {
//     for (let i = 0; i < rows; i++){
//         let line = '';
//         for (let j = 0; j <= i; j++)
//             line += '*';
//         console.log(line);
//     }
// }
// // Exercise #11
// // showPrimes(20);
// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }
// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++) // This line is brilliant
//         if (number % factor === 0)
//             return false;
//     return true;
// }

// // Exercise #12: Address Object
// const addy = {
//     street: '123 somewhere st',
//     city: 'b',
//     zipcode: 54321,
// };
// function showAddress(addy) {
//     for (let key in addy)
//         console.log(key, addy[key]);
// }
// // showAddress(address); // Call the function

// // Exercise #13 Factory vs Constructor
// // Factory functions return objects
// let address = createAddress('a', 'b', 'c');
// // console.log(address);
// function createAddress(street, city, zipcode) {
//     return {
//         street,
//         city,
//         zipcode,
//     };
// }
// // Constructor function (Watch that PascalCase convention)
// let address1 = new Address('a', 'b', 'c');
// console.log(address1);
// function Address(street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }
// // Exercise #14: Object Equality
// let address2 = new Address('a', 'b', 'c');
// let address3 = address1;
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));

// function areEqual(address1, address2) { // Are properties equal
//     return address1.street === address2.street &&
//         address1.city === address2.city &&
//         address1.zipcode === address2.zipcode
// }
// function areSame(address1, address2) { // Are the object locations equal
//     return address1 === address2;
// }

// Exercise #15: Blog Post Object
// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         {author: '1', body: '2'},
//         {author: '3', body: '4'},
//     ],
//     isLive: true
// };
// console.log(post);

// // Exercise #16: updating E#15 to a constructor function
// let post = new Post('a', 'b', 'c');
// console.log(post);
// function Post(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }
// // Exercise #17: Price Range Object like yelp
// let priceRanges = [
//     {label: '$', Tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
//     {label: '$$', Tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
//     {label: '$$$', Tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
// ];
/* End of Object Section ********************************
Begin Arrays****************************************   */
// const numbers = [3, 4];
// numbers.push(5, 6);
// numbers.unshift(1, 2);
// numbers.splice(2, 0, 'a', 'b', 2); // splice(starting-index, #-of-slots-to-delete, input, input, etc.)
// console.log(numbers);
// console.log(numbers.length);
// // Lines 275 - 278 are being called by their primitive types. Won't work for reference types(Arrays/objects)
// console.log(numbers.indexOf('b')); // searches array for (element, @index) not found, 0 if element found
// console.log(numbers.lastIndexOf(2)); // returns index of last repeated element
// console.log(numbers.indexOf(1) !== -1); // forces boolean or just do next line
// console.log(numbers.includes(1)); // easier than above line, returns boolean

// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];
// // // Finding values via a reference type like above needs (find()) of which would need a google search for proper understanding
// // const course = courses.find(function(courseElement) {    // findIndex() Returns the index spot of found element otherwise a -1
// //     return courseElement.name === 'a'; 
// // });
// // // Alternative Arrow function below to replace line285: **********
// const course = courses.find((courseElement) => courseElement.name === 'a');
// console.log(course);

// // Deleting an element from the beginning, middle, and the end of an array
// const lastN = numbers.pop(); // pops off and returns the last element
// console.log(numbers);
// console.log(lastN);
// const firstN = numbers.shift(); // pops off and returns the first element
// console.log(numbers);
// console.log(firstN);
// numbers.splice(0, 3);
// console.log(numbers);

// // Combing Arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// // const combined = first.concat(second);
// // line 308 uses the spread operator 
// const combined = [...first, 'a', ...second, 'b'];
// // const copy = combined.slice();
// const copy = [...combined]
// console.log(combined);

// // Iterating over an array
// const numbs = [1, 2, 3];
// for (let numb of numbs)
//     console.log(numb);

// // numbs.forEach(function(number){
// //     console.log(number);
// // });
// // or on line 322 one can use the arrow function.
// numbs.forEach((number, index) => console.log(index, number));

// // Joining Arrays
// const numbs = [1, 2, 3];
// const joined = numbs.join(',');
// console.log(joined);
// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);
// const juxtaposed = parts.join('-');
// console.log(juxtaposed);

// // Sorting primative Arrays
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// Reference type array sorting ascii sensitive
// const courses = [
//     {id: 1, name: 'Node.js'},
//     {id: 2, name: 'JavaScript'}
// ];
// courses.sort(function(a, b){
//     // a < b => -1
//     // a > b => 1
//     // a === b => 0
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });
// console.log(courses);

// // 2 new methods in javascript: every, some
// // // const numbers = [1, -1, 2, 3];
// // // const allPositive = numbers.every(function(value){
// // //     return value >= 0;
// // // });
// // // console.log(allPositive);
// // // // every() checks through all elements until untue
// // // // some() checks through the first element to see if true/untrue
// // // const numb = numbers;
// // // const atLeastOnePositive = numbers.some(function(value){
// // //     return value >= 0;
// // // });
// // // console.log(atLeastOnePositive);
// // // // Filtered Arrays
// // // const filtered = numbers.filter(function(value){
// // //     return value >= 0;
// // // });
// // const filtered = numbers.filter(n => n >= 0); // or I can learn this arrow operator instead of line 371.
// // console.log(filtered);
// // // // Can map elements of an array into something else
// // // const items = filtered.map(n => '<li>'+ n +'</li>');
// // // const html = '<ul>'+ items.join('') +'</ul>';
// // // console.log(html);
// // const items = filtered.map(n => ({value: n}));
// const items = numbers
//     .filter(n => n >= 0)
//     .map(n => ({value: n}))
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value);
// console.log(items);

// // // Reducing an Array. Line 389-391 old way to code? 392 new way.
// const numbers = [1, 2, -1, 3];
// // let sum = 0;
// // for(let n of numbers)
// //     sum += n;
// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// ); // }, 0); // Don't forget the second parameter for the reduce method that is the index starting point, 0 if not stated
// console.log(sum);

// // Exercise #1
// const numbers = arrayFromRange(1, 4);
// console.log(numbers);
// function arrayFromRange(min, max) {
//     const output = [];
//     for(let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// }

// // Exercise #2
// const numbers = [1, 2, 3, 4, 5];
// console.log(includes(numbers, 1)); /* 'includes' by itself is a built in method and is easy way
//                                     to see if element is in array. Make your own below */
// function includes(array, searchedElements) {
//     for (let element of array){
//         if (element === searchedElements)
//             return true;
//     return false;
//     }
// }

// // Exercise #3
// // Opposite of filtering out, Exceptions. Read carefully, easy but subtle.
// const numbers = [1, 2, 3, 1, 4, 5, 2, 6];
// const output = except(numbers, [1, 2, 3, 4]);
// console.log(output);
// function except(numbs, arrayOfExluded) {
//     const output = [];
//     for(let element of numbs)
//         if(!arrayOfExluded.includes(element))
//             output.push(element);
//     return output;
// }

// // Exercise #4 : Moving an element in an array
// const numbers = [1, 2, 3, 4, 5];
// const output = move(numbers, 2, -1);
// console.log(output);
// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0){
//         console.error('Invalid Offset.');
//         return;
//     }
//     const output = [...array]; // clone of numbers array line 435 using a spread
//     const element = output.splice(index, 1)[0]; // [0] is the first element of the returned array of the spliced array
//     output.splice(position, 0, element);
//     return output;
// }

// // ************************************
// // // Arrow Function Review:
// // const array = [1, 2, 3, 4];
// // // 0 + 1 + 2 + 3 + 4
// // const initialValue = 0;
// // const sumWithInitial = array.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   initialValue,
// // );
// // console.log(sumWithInitial);
// // // Expected output: 10
// // ************************************

// // Exercise #5: Counting Occurences
// const numbers = [1, 2, 3, 4, 1, 3, 1, 5, 6];
// const count = countOccurences(numbers, 1);
// console.log(count);
// function countOccurences(array, searchElement){
//     // let count = 0;
//     // for (let numb of array)
//     //     if (numb === searchElement)
//     //         count++;
//     // return count; // old way of coding, Reduced method below with arrow function as modern way
//     return array.reduce((accumulator, current) => {
//         const occurence = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement);
//         return accumulator + occurence;
//     }, 0);
// }

// // Exercise #6: Learning REDUCE method by getting a max value
// // When needing a single value via iterating over an array, think of the reduce method.
// const numbers = [1, 2, 3, 4, 1, 3, 1, 5, 6];
// const max = getMax([1, 2, 2, 1, 3, 4, 5]);
// console.log(max);
// function getMax(array) {
//     if (array.length === 0) return undefined;
//     // Old Way next 5 lines.
//     // let max = array[0];
//     // for (let i = 0; i < array.length; i++)
//     //     if (array[i] > max)
//     //         max = array[i];
//     // return max;
//     return array.reduce((a, b) => (a > b) ? a : b);  // ***REDUCE METHOD HERE***
// }

// // Exercise #7
// /* Write code that shows all movies in 2018 with rating > 4
//     Sort them by rating, Descending order
//     console.log(title). 'a' & 'b' should be shown only */
// const movies = [
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating: 4.5},
// ];
// const titles = movies
//     /* filter returns a new array, now we can chain methods
//     Careful, sort only works for #'s and strings. Yet building a conditional to return -1, 0, and 1 is bulky.
//     So for objects, create a comparison function, hence the arrow function within sort() */
//     .filter(m => m.year === 2018 && m.rating > 4)
//     .sort((a, b) => a.rating - b.rating) // returns either a +#, 0, or -# that can be order via asc or desc
//     .reverse() // Here we desc
//     .map(m => m.title) // maps a new array with the filtered and ordered titles
// console.log(titles);
/** End of Arrays**********************************************

Begin functions detailed Dive ********************************* */
/*  Function Declaration [(THE FUNCTION CAN BE CALLED BEFORE THE DECLARATION IS DEFINED)] 
    Possible via "Hoisting": INTERVIEW QUESTION. 
    The process of moving function declarations to the top of the file automatically.
                    function walk(){
                        console.log('walk');
                    } // No semicolon for declarations
    Function Expression: is a NAMEd function[function NAME(){}], {(CANNOT BE CALLED BEFORE BEING DEFINED)}
    Its called an anonymous function without a name */
// let run = function() {
//     console.log('run')
// }; // Expressions DO need a semicolon at the end
// run();
// let move = run;
// move();

// // // Every function has a special object called 'arguments' built in 
// // function sum(a, b) {
// //     console.log(arguments);
// //     reuturn a + b; // 1 + undefined = NaN
// // }
// // console.log(sum(1, 2, 3, 4, 5));
// function sum(){ // no parameters needed, 'arguments' is already providing them
//     let total = 0;
//     for (let value of arguments) // Has its own iterator(check line 535 console.log) so a for-of loop will work here
//         total += value;
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 10));

/* The REST operator. 
    Must be used as final parameter and not to be confused with the SPREAD operator even though same syntax.
    Spread operator becomes a REST operator when used as a parameter to read an unknown number of arguments to be called.
        Returns an array that methods can iterate over */
// // function sum(...args) {
// //     return args.reduce((a, b) => a + b);
// // }
// // console.log(sum(1, 2, 3, 4, 5, 10));
// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }
// console.log(sum(0.1, 20, 30));

// // Default parameters: 
// function interest(principal, rate = 3.5, years = 5) {
//     // rate = rate || 3.5;
//     // years = years || 5;
//     // Instead of the above two line, in the function parameters you can *SEE CURRENT PARAMETER FORMAT FOR THIS FUNCTION
//     // But make sure the last parameter has the assignment or give assignments from the one assigned to the last parameter.
//     return principal * rate / 100 * years;
// }
// // Don't need all arguments listed, but 'undefined' can be used as placeholder if the last parameter hasn't been assigned a value
// console.log(interest(10000)); // Example: console.log(interest(10000, undefined, 5));

// // Getters and Setters:
// /* Getters => Access properties 
//     Setters => Change(Mutate) properties */
// const person = {
//     firstName: 'Jeremy',
//     lastName: 'Boyd',
//     // fullName: 'Jeremy Boyd'
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value){  // Keep in mind this only works for strings currently. Below, split works with strings only, etc.
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };
// person.fullName = 'John Smith';
// console.log(person);

// // Try and Catch Error handling introduction using above example:
// const person = {
//     firstName: 'Jeremy',
//     lastName: 'Boyd',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value){
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string');

//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error('Enter a first and last name');

//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };
// try {
//     person.fullName = '';
// }
// catch (e){
//     alert(e);
// }
// console.log(person);

/* Global vs local scopes: 
    local scope will override a globally scoped variable name
Let vs Var:
    let, const => block-scoped
    var    => function-scoped, also adds itself to the window object  */

/* THIS: 
    "This" references the object that is executing the current function
    1. method -> current obj
    2. non-method function -> global(window(browsers), global(node)) obj */
// const video = {
//     title: 'a',
//     play(){
//         console.log(this);
//     }};
// // video.play();
// video.stop = function() {
//     console.log(this);
// };
// video.stop(); // Example of #1.

// function Video(title){
//     this.title = title; // Normally 'this' references the global object, but 'new' on line 640 takes that reference
//     console.log(this);
// }
// const v = new Video('b'); // 'new' in contructor functions, creates a new object and points line 637's 'this' to the new object => {}

    /* Example: // A constructor function (conventionally starts with a capital letter)
    function Car(make, model) {
    this.make = make;
    this.model = model;
    }
    // Creating a new object instance using the 'new' keyword
    const myCar = new Car('Toyota', 'Corolla'); 
    // The 'new' keyword ensures that 'myCar' is a new object with the specified properties
    console.log(myCar.make); // Output: Toyota */

// const video = {
//     title: 'c',
//     tags: ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(function(tag){ // !*Careful! The callback function is a non-method function
//             console.log(this, tag); // !*Careful! Any 'this' placed here would reference the global object
//         })
//     }
// };
// video.showTags(); 
// // But what if I want to list the title next to the tag? 'this' on line 657 won't help so simply.
// // Fix #1 but don't use this method!!!!!!!!!!!!!!**************
// const video = {
//     title: 'c',
//     tags: ['a', 'b', 'c'],
//     showTags(){
//         const that = this;
//         this.tags.forEach(function(tag){
//             console.log(that.title, tag);
//         })
//     }
// };
// video.showTags();

/* With "Call, apply, and bind" we can set the 'this' argument for a given function. 
    The differences between 'apply' and 'call' below is the format when using multiple parameters. */
// function playVideo(a, b) {
//     console.log(this);
// }
// playVideo();
// playVideo.call({name: 'Jeremy'}, 1, 2);
// playVideo.apply({name: 'jeremy'}, [1, 2]);
// // const fn = playVideo.bind({ name: 'Jeremy'}); // Bind returns a new object that permanently references it going forward
// // fn();
// playVideo.bind({ name: 'Jeremy'})(); // The above 2 lines can be shortened into this line.
/* FIX #2 for a proper older way */
// const video = {
//     title: 'c',
//     tags: ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title, tag);
//         }.bind(this)); // Using 'bind' here replaces the global object reference for line 693 to the (new) video object
//     }
// };
// video.showTags();
/* FIX #3 AND FINAL WAY for a proper UPDATED way when dealing with callback functions, ARROW FUNCTIONS 
    ARROW functions inherit the 'this' from the containing function,
    no need to call bind like above, and as such there is no new object! */
// const video = {
//     title: 'c',
//     tags: ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(tag => {
//             console.log(this.title, tag);
//         });
//     }
// };
// video.showTags();

// Final Exercise #1: create a sum function that adds any number of arguments together whether its an array or not.
/* spread operator before the parameter name(must be last parameter)
    uses an unknown number of arguments and converts them into an array */
// console.log(sum([1, 2, 3, 4]));
// function sum(...items) { // Now that you have an array, remember the reduce method to get the sum of items in an array
//     if (items.length === 1 && Array.isArray(items[0]))
//         items = [...items[0]]; // Array-ception: Makes a new 'flattened' array from the array that held an array as the argument.
//     return items.reduce((a, b) => a + b);
// }

// Final Exercise #2: Use the object literal syntax to be able to assign a radius, then read the area back but as a read only, can't rewrite.
// const circle = {
//     radius: 1,
//     get area(){ // 'getter' is needed, area() is the name of the property but is implemented as a method
//         return Math.PI * this.radius * this.radius; // pi*r^2 ... oh yeah lol
//     }
// }

// Final Exercise #3: Counting Occurences + error handling. Throw new Error("") needs a try & catch block
// try {
//     const numbers = [1, 2, 3, 4, 1, 3, 1, 5, 6];
//     const count = countOccurences(null, 1);
//     console.log(count);
// }
// catch (e){
//     console.log(e.message);
// }
// function countOccurences(array, searchElement){
//     // let count = 0;
//     // for (let numb of array)
//     //     if (numb === searchElement)
//     //         count++;
//     // return count; // old way of coding, Reduced method below with arrow function as modern way
//     if (!Array.isArray(array))
//         throw new Error("Invalid Array");
//     return array.reduce((accumulator, current) => {
//         const occurence = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement);
//         return accumulator + occurence;
//     }, 0);
// }
// ********************* END PART 1 JavaScript FUNDAMENTAL TUTORIAL *********************************
// ******************* BEGIN PART 2 JavaScript ADVANCED TOPICS   ************************************
// const circle = {}; an object literal
/* const circle = {
    radius: 1,         // property
    location: {        // property
        x: 1,
        y: 1,
    },
    draw: function() {  // Method
        console.log('draw');
    }
}; 
circle.draw(); */
/* If an object has one or more methods, object is said to have behavior
    Creating objects with the object literal syntax is only an issue if the object has 'behavior'
    Solution? Factory or Constructor functions. */

// // FACTORY FUNCTION
// function createCircle(radius) {
//     return {
//         radius, // would normally be: 'radius: radius,' but if key and value are same then just once is fine
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);
// // circle.draw();
// // CONSTRUCTOR FUNCTION
// // Pascal Case & and uses 'this' to set the properties
// // BEWARE: WITHOUT 'new' ON LINE 794 'this' references *See LINE 621-624*
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function(){
//         console.log('Draw');
//     }
// }
// /* 'new' operator below first creates an empty object({}),
//     then 'this' will point to that object,
//     finally it will return that object from line 787 function(notice there is no return statement therein)  */
// const another = new Circle(1); 

// /* THERE IS ALSO A CONSTRUCTOR PROPERTY for every object.(Use in the browswer console[another.constructor])
//     it references the function that was used to create that object
//     Example alternative constructor properties, but the literals are simpler
//         new String(); // '', "", ``
//         new Boolean(); // true, false
//         new Number(); // 1, 2, 3, 4, ... */

// Objects: Functions are objects: 
// Every object has a constructor PROPERTY, that references the function that was used to create that object
/* First use of DOM. E.G.: in the browswer dev tools console, write: Circle.name(method), Circle.length(method return the # of arguments) 
                                        Circle.constructor(shows the constructed function made by JavaScript, See (const Circle1) below) */
// function Circle(radius) { 
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// const another = new Circle(1);
// // this constructor function represents what happens internally when you make the above constructor function
// const Circle1 = new Function('radius', ` 
//     this.radiur = radius;
//     this.draw = function(){
//     console.log('draw');
//     }
//     `);
// const circle = new Circle1(1);

// Primitive(or Value) types are copied by their value; objects are copied by their reference

// // Adding or removing properites
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);
// circle.location = { x: 1 };
// /* const propertyName = 'location'; // This combo is useful when property names are either unknown or are not valid identifiers
// circle[propertyName] = [ x: 1 ]; */ // (IE: center-location[special characters or a space are is not valid in property names])
// delete circle['location']; // or can use the easier to read dot-notation 'delete circle.location;' just keep in mind the above mentioned rule

// // Enumerating properties 
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);
// /* for-in loops enumerate members of an object, Object.keys gets the keys in an object,
//      and the 'in' operator on line 856 can be used to check for the existance a property or method in an object.*/
// for (let key in circle){
//     if (typeof circle[key] !== 'function') // This line can seperate propeties from methods
//     console.log(key, circle[key]);
// }
// const keys = Object.keys(circle); // These two lines CANNOT seperate properties from methods
// console.log(keys);
// if ('radius' in circle)
//     console.log('Circle has a radius');

// // Private properties and methods *See: Scope vs Closures
// function Circle(radius){
//     this.radius = radius;
//     // this.defaultLocation = { x: 0, y: 0};
//     let defaultLocation = { x: 0, y: 0}; // This change from the above line makes it a private property or local variable only
//     let computeOptimumLocation = function(factor){
//         // ...
//     }
//     this.draw = function(){
//         /* let x, y; *Example of scope, scopes being temporary while closures, like the above private variables, 
//         continue in memory preserving their state because they are a part of the closure of the draw function */
//         computeOptimumLocation(0.1); // Inside this method's scope, this is how to access the private members before this.draw
//         // defaultLocation... Same as line 870
//         // But if you want to access members of the "new Circle Object", then you must you 'this'(below);
//         // this.radius...
//         console.log('draw');
//     };
// }
// const circle = new Circle(10);
// circle.draw();

// /* Getting vs Setters Part 2. What if we want to READ'ONLY, or display somewhere, in our app
//     the defaultLocation private member from the outside */
// function Circle(radius){
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0};
//     this.getDefaultLocation = function() { /* Dealing with this inner function, the closure of this function includes 
//             line 887 as well as all the variables defined in the parent function, like line 884. */
//         return defaultLocation;
//     }
//     this.draw = function(){
//         console.log('draw');
//     };
//     /* line 896 is JavaScript specific call, there is also Object.defineProperties if you want to define multiple
//             First argument in that method is the object you want to add a new property to(the new circle object referenced by 'this')
//             Second argument is the name of the property.
//             Third argument is an object, in that object add a key/value pair 'get' with the value of a function */
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation; // This variable is part of the closure of the inner function to be able to access it.
//         } // in the dev tools console in live server. type circle to see the object's new property(defaultLocation) to be shown.
//     });
// }
// const circle = new Circle(10);
// circle.draw();



// Exercise 1: Stopwatch 