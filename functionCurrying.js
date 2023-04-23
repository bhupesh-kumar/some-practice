/*
What is Function Currying?
->Currying is a process in functional programming in which we transform a function with
multiple arguments into a sequence of nesting functions that take one argument at a time
-> function f(a,b,c) transformed into f(a) (b) (c)
 */

function square(a) { 
    return a * a;
}


function sumofSquareThreeNumbers(a, b, c) { 
    return square(a) + square(b) + square(c);
}

function curry(callback) { 
    return function (a) { 
        return function (b) {
            return function (c) { 
                return sumofSquareThreeNumbers(a, b, c);
            }
         }
    }
}

let sstn = curry(sumofSquareThreeNumbers);
console.log(sstn(10)(20)(30));


//to fix the first two argument to 20 and 40

let sstn1fix = sstn(20);
let sstn2fix = sstn1fix(40);

console.log(sstn2fix(30));