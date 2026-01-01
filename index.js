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
// // Exercise #1
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
// Exercise #5
// Exercise #6
// Exercise #7
// Exercise #8
// Exercise #9
// Exercise #10
// Exercise #11
// Exercise #12
// Exercise #13
// Exercise #14
// Exercise #15