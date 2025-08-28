const reverString = (str) => {
    return str.split("").reverse().join("")
}
console.log(reverString("Hello World"));

const isPalindrome = (str) => {
    const reverse = str.split("").reverse().join("")
    return str === reverse
}
console.log(isPalindrome("HUH"));
// largest number loop form
const LargestNumber = (arr) => {
    let largearg = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largearg) {
            largearg = arr[i]
        }
    }
    return largearg
}

console.log(LargestNumber([99, 300, 3, 100]));
// largest number spread and max form and simple way
const LargeNumber = (arr) => {
    return Math.max(...arr)
}
console.log(LargeNumber([332, 42, 423, 23423, 432, 3453434]));
// remove first item from array
const items = [1, 2, 3, 4, 5, 6]
const removeItem = items.splice(1)
console.log(removeItem);
//callback function

const callMyName = (name, callback) => {
    callback(`Hello: ${name}`)
}
callMyName('Hussein', message => console.log(message))
const obj = { name: "Hussein" }
obj.age = 29
console.log(obj);
delete obj.age
console.log(obj);
console.log('options\n'.repeat(3));
// sum of array number 
const sumArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(sumArray
    ([15, 34, 234, 342, 342, 342])
);
