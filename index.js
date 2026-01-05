// for (let i = 5; i >= 1; i--){
//     if (i % 2 !== 0){ // Shows odd numbers
//         console.log('Hello ', i);
//     }
// }
// // Begin the while loop; needs the leading external variable.
// let i = 0;
// while (i <= 5) {
//     /* It's subtle, but no need to curly bracket after the if conditional 
//         because I want the single line code block to be neat and inline. 
//         i++ is next line for a reason and outside the if statement code block. */
//     if (i % 2 !== 0) console.log('World', i); 
//     i++;
// }
// /* Begin a do-while loop, rarer use-case. Same need for an external
//     variable but code block will always get read at lease once. */
// let j = 9;
// do {
//     if (j % 2 !== 0) console.log('Olympus.. would be that weh', j); 
//     j++;
// } while (j <= 5);
// **************************************************************************************
// // Begin a for-in loop. Can list items in objects.
// const person = {
//     name: 'Jeremy',
//     age: 36,
// }
// for (let key in person)
//     /* Dot notation 'person.name' would work here but not always if it hasn't rendered yet.
//         square bracket notation is more commonplace friendly */
//     console.log(key, person[key]);
// // Begin for-of loop.
// // Line 35 is an old way using a for-in loop through an array.
// const colors = ['red', 'green', 'blue'];
// for (let index in colors) console.log(index, colors[index]);
// for (let color of colors) console.log(color);
// /* SUMMARY: For-in loop: Iterates over the properties of an object.
//             For-of loop: Iterates over the elements/items of an array */
// *****************************************************************************************
// Exercise #1
// let number = max(3, 3);
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
function showProperties(obj) {
    // Note the single line useage trimming down extra brackets!
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key + ': ' + obj[key]);
            // console.log(`${key}: ${obj[key]}`); // or to format the semicolon in the output for style
}
// Exercise #8
// Exercise #9
// Exercise #10
// Exercise #11
// Exercise #12
// Exercise #13
// Exercise #14
// Exercise #15