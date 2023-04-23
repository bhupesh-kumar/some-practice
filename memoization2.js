/*
Memoization in Generic Way
*/

function add(v1, v2) {
    return v1+v2;
}

function genericMemoize(callback) { 
    let storageObj = {};
    return function actionFunction(...args) { 
        const argkey = args.toString();
        if (argkey in storageObj) {
            console.log('existing->',storageObj[argkey]);
        } else { 
            storageObj[argkey] = callback(...args);
            console.log('added->',storageObj[argkey]);
        }
    };
}
 
const sessionAdd = genericMemoize(add);

sessionAdd(2, 4);
sessionAdd(10,5);
sessionAdd(2, 4);

