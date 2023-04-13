/*
Memoization :-
"Memoization is an optimization technique used primarily to speed up computer
programs by storing the results of expensive function calls and returning the
cached result when the same inputs occur again"

Problem statement:-
Implement a function called memoizedSquare which will calculate
the square of a number for the first time and for the subsequent
times, will return from cache the already computed result

*/

function findSquare(value) {
    return value * value;
}
 
function memoizedSquare(num) { 
    let storageObj = {};
    
    function performSquare(num) { 
        if (Object.keys(storageObj).find(data => data == num)) {
            console.log('existing->',storageObj[num]);
        } else { 
            storageObj[num] = findSquare(num);
            console.log('added->',storageObj[num]);
        }
    }
    return performSquare;
}

const session1 = memoizedSquare();

session1(10);
session1(20);
session1(10)