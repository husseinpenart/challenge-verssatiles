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