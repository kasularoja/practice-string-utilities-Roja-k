function capitalize(str) {
    if (str === undefined) {
        throw new Error("capitalize: Input is undefined.");
    }
    if (str === null) {
        throw new Error("capitalize: Input is null.");
    }
    if (typeof str !=='string') {
        throw new Error("capitalize: Input must be a string.");
    }
    if (str.length === 0) {
        return '';
    }
    return str[0].toUpperCase() + str.slice(1);
}
function reverse(str) {
    if (str === undefined) {
        throw new Error("reverse: Input is undefined.");
    }
    if (str === null) {
       throw new Error("reverse: Input is null.");
    }
    if (typeof str !== 'string') {
        throw new Error("reverse: Input must be a string.");
    }
    return str.spilt('').reverse().join('');
    }
    function contains(str, substr) {
        if (str === undefined) {
            throw new Error("contains: First input is undefined.");
            }
            if (substr === undefined) {
            throw new Error("contains: Second input is undefined.");
        }
        if (str === null) {
            throw new Error("contains: First input is null.");
        }
            if (substr === null) {
                 throw new Error("contains: Second input is null.");
            }
            if (typeof str !== 'string') {
                throw new Error("contains: First input must be a strng.");  
            }
            if (typeof substr !== 'string') {
                throw new Error("contains: Second input must be a strng.");  
            }
             return str.indexof(substr) !== -1;  
            }
            module.exports = {
                capitalize: capitalize,
                reverse: reverse,
                contains: contains
            };
         


        
    
