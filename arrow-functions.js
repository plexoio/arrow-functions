/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // Code Block
    return a + b;
}

let result = addTwoNumbers(1, 2);
console.log(result);

// Arrow Function With Parameters (if complex code block)

const addTwoNumbers2 = (a, b) => {
    return a + b;
}

let result2 = addTwoNumbers2(1, 2);
console.log(result2);

// Single Line Arrow Function With Parameters (simple function)

const addTwoNumbers3 = (a, b) => a + b; // (a+b) also accepted

let result3 = addTwoNumbers3(1, 2);
console.log(result3);

// Implicit Returns

const logMessage = message => console.log(message); // single parameter can be without ()

logMessage('Hey there!');

//OR

const noParameter = () => console.log('Life');

noParameter();

// Returning Multiple Lines (implicit return, parameters or no parameters)

const returnMultiLines = (name) => (
    `<p>I am ${name} in HTML<p>`
);

let elementName = 'Paragraph';

console.log(returnMultiLines(elementName));
