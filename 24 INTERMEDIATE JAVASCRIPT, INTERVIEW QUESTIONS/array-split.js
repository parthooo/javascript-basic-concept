const num = [10, 20, 30, 40, 50, 60, 70, 80]
const part = num.slice(3, 6);
console.log("slice output");
console.log(part);
console.log(num);

const removed = num.splice(3, 6);
console.log("splice output remove index from original array");
console.log(removed);
console.log(num);

const num1 = [10, 20, 30, 40, 50, 60, 70, 80]
const removed1 = num1.splice(3, 6, 90, 100);
console.log("splice output remove index from original array + can add new indexes");
console.log(removed1);
console.log(num);


const num3 = [10, 20, 30, 40, 50, 60, 70, 80]
const together = num3.join(" join hou ");
console.log("join output");
console.log(together);
