function a() {
    let b = 0;
    return function () {
        b++;
        return b;
    }
}
const x = a();
console.log(x());
console.log(x());
console.log(x());
console.log(x());

const y = a();
console.log(y());
console.log(y());

console.log(x());
console.log(x());

console.log(y());
console.log(y());
console.log(y());

