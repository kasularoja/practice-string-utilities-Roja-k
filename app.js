const stringUtils = require('./stringUtils');
function testStringUtils () {
    try {
        console.log("Capitalize 'hello' :", stringUtils.capitalize('hello'));
        console.log("Capitalize with number :", stringUtils.capitalize(123));
    } catch (error) {
        console.log("Error:", error.message);
    }
    try {
        console.log("Reverse 'world' :", stringUtils.reverse('world'));
        console.log("Reverse with null :", stringUtils.reverse(null));
     } catch (error) {
            console.log("Error:", error.message);
        }
        try {
            console.log("Contains 'JavaScript' , 'Script' :", stringUtils.contains('JavaScript', 'Script'));
            console.log("Capitalize with missing input:", stringUtils.contains('hello'));
         } catch (error) {
            console.log("Error;", error.message);
         }
     }

    testStringUtils();

    