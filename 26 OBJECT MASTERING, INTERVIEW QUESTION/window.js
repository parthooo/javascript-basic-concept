var name = "kuddus";

function add(num1, num2) {
    result = num1 + num2;
    console.log('no global var, result inside', result);
    console.log('global var, name inside', name);

    function double(num) {
        return num * 2;
    }

    var total = double(result);
    return total;
    
}
// console.log('result outside', result); 
// the console log given above will not work because its trying to get data outside of variables scope.
console.log('name outside', name);
var sum = add(12, 13);
console.log(sum);
console.log("outside result: its working now from outside becuse var is removed before result inside function", result);