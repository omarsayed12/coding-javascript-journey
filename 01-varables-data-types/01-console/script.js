// 1- print numbers
console.log(100);

/* 
  ** 2- console.error() => 
  - Java script function used to log error message to the console.

  ** The Following Example ....
  - Creating a function to divide a number by zero.
  - if a user passes the number zero to the divideByZero() function, 
    the console will display the error message "Cannot divide. 
    by zero" in red or with distinctive formatting to indicate an error.

*/

function divideByZero(num) {
  if (num === 0) {
    console.error('Cannot divide by zero');
    return null;
  } else {
    return 10 / num;
  }
}

const getFirstValue = divideByZero(0);
const getSecondValue = divideByZero(2);
const getThirdValue = divideByZero(3);

console.log(` 
  First Value is: ${getFirstValue}.
  Second Value is: ${getSecondValue}.
  Third Value is: ${getThirdValue}.
`);

// 3- Logging a warning message to the console
console.warn('Warning');

// 4- Logging an object as a table to the console
console.table({ name: 'dev', email: 'info@dev.com' });

// 5- Starting a console group
console.group('Start console group');

// Logging messages within the console group
console.log('first step'); // Log the first step
console.warn('second step'); // Log a warning for the second step
console.error('third step'); // Log an error for the third step

// Ending the console group
console.groupEnd();

// Defining a style for the console log message
const styleText =
  'padding: 5px; background-color: #fff; color: green; font-size: 17px';

// Logging a styled message to the console
console.log(
  // Explanation of the styled log message
  '%cAbove statement For allowing developers to log information, debug code, and monitor the execution of their JavaScript programs',
  styleText,
);
