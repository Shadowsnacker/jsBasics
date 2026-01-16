for (let i = 5; i >= 1; i--){
    if (i % 2 !== 0){ // Shows odd numbers
        console.log('Hello ', i);
    }
}
// Begin the while loop; needs the leading external variable.
let i = 0;
while (i <= 5) {
    /* It's subtle, but no need to curly bracket after the if conditional 
        because I want the single line code block to be neat and inline. 
        i++ is next line for a reason and outside the if statement code block. */
    if (i % 2 !== 0) console.log('World', i); 
    i++;
}
/* Begin a do-while loop, rarer use-case. Same need for an external
    variable but code block will always get read at lease once. */
let j = 9;
do {
    if (j % 2 !== 0) console.log('Olympus.. would be that weh', j); 
    j++;
} while (j <= 5);
// **************************************************************************************
// Begin a for-in loop. Can list items in objects.
const person = {
    name: 'Jeremy',
    age: 36,
}
for (let key in person)
    /* Dot notation 'person.name' would work here but not always if it hasn't rendered yet.
        square bracket notation is more commonplace friendly */
    console.log(key, person[key]);
// Begin for-of loop.
// Line 35 is an old way using a for-in loop through an array.
const colors = ['red', 'green', 'blue'];
for (let index in colors) console.log(index, colors[index]);
for (let color of colors) console.log(color);
/* SUMMARY: For-in loop: Iterates over the properties of an object.
            For-of loop: Iterates over the elements/items of an array */
// *****************************************************************************************
// Exercise #1
let number = max(3, 4);
console.log(number);
function max (a, b){
    /* if (a < b) return a;
    return b; */
    // Alternatively instead of lines 43 & 44, use the Ternary/Conditional Operator
    return (a > b) ? a : b;
}
// Exercise #2
console.log(isLandscape(45, 30));
function isLandscape(width, height){
    return (width > height);
}
// Exercise #3: fizzbuzz!
/* Divisable by 3: fizz
    Divisable by 5: buzz
    Divisable by both: fizzbuzz
    Any other number simplys prints itself
    If NaN: console.log("Not a number") */
const output = fizzbuzz(30);
console.log(output);
function fizzbuzz(input) {
    if (typeof input !== 'number'){
        return NaN;
    }
    if (input <= 0){
        alert('Bigger than zero please');
        return 'Positive integers only';
    }
    if ((input % 3 === 0) && (input % 5 === 0)){
        return 'FizzBuzz';
    }
    if (input % 3 === 0){
        return 'Fizz';
    }
    if (input % 5 === 0){
        return 'Buzz';
    }
    return input;
}
// Exercise #4
// Speed limit is 70. console.log('ok') if driving under 1 point.
// Every 5 over 70 adds 1 point.
// Once 12 points is reached, suspend liscense  
checkSpeed(130);
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint){ // Changed the magic numer(70) to a dynamic reference point
        console.log('ok');
        return; // Added a return here so that I can delete the "else" code block format below to tighten things up further
    }
//  else {  // This would also allow to take out extra indentations below for easier code reading.
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points: ', points);
}
// // Exercise #5 Odd or even
// showNumbers(10);
// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++){
//         // if (i % 2 === 0) console.log(i, "Even");
//         // else console.log(i, "Odd");               
//         // We could do lines 103 & 104 but a ternary operator below is cleaner
//         const message = (i % 2 === 0) ? 'Even' : 'Odd';
//         console.log(i, message);
//     }
// }
// Exercise #6 Count number of 'truthy' values in an array
const array = [0, null, undefined, '', 1, 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
    let n = 0;
    for (let value of array){  // The trick of this whole thing is a FOR-OF loop. Review ^
        if (value) 
            n++;
    }
    return n;
}
// Exercise #7
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b',
}
showProperties(movie);
function showProperties(objValue) {
    // Note the single line useage trimming down extra brackets!
    for (let key in objValue)
        if (typeof objValue[key] === 'string')
            console.log(key + ': ' + objValue[key]);
            // console.log(`${key}: ${objValue[key]}`); // or to format the semicolon in the output for style
}
// Exercise #8 Summing together a limit's multiples
// console.log(sum(10));
function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    return sum;
}
// Exercise #9
const marks = [80, 80, 50];
// console.log(calculateGrade(marks));
function calculateGrade(mark) {
    const average = calculateAverage(mark); // This line is the trick that segregates functions 
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
} // These two function were once together, but it's best to split up jobs as simply as possible
function calculateAverage(array) {
    let grade = 0;
    for (let x of array)
        grade += x;
    return grade / array.length;
}
// Exercise #10
// stars(5);
function stars(rows) {
    for (let i = 0; i < rows; i++){
        let line = '';
        for (let j = 0; j <= i; j++)
            line += '*';
        console.log(line);
    }
}
// Exercise #11
// showPrimes(20);
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}
function isPrime(number) {
    for (let factor = 2; factor < number; factor++) // This line is brilliant
        if (number % factor === 0)
            return false;
    return true;
}
// ~~~~~~~~~~~~~~~Lessons continue~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Exercise #12: Address Object
const address = {
    street: '123 somewhere st',
    city: 'b',
    zipcode: 54321,
};
function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}
// showAddress(address); // Call the function

// Exercise #13 Factory vs Constructor
// Factory functions return objects
let addy1 = createAddress('a', 'b', 'c'); // this completes the factory function
console.log(addy1);
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode,
    };
}
// Constructor function (Watch that PascalCase convention)
let addy2 = new Address('a', 'b', 'c'); // this completes the constructor function
console.log(addy2);
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// Exercise #14
// Exercise #15