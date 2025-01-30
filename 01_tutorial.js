const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObj{
    constructor(){
        console.log('hey the object is created');
    }
}
 /* METHOD 1:
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObj = SomeMathObj;
*/

// METHOD 2:
module.exports = {
    sum : sum,
    PI : PI,
    SomeMathObj : SomeMathObj
}