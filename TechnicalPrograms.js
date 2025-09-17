let num = 29
if (num % 2 === 0) {
    console.log("It is prime by outer")
} else {
    for (let index = 3; index <= num / 2; index + 2) {
        if (num % index === 0) {
            console.log("It is not prime");
            break;
        }
        else {
            console.log("prime");
            break
        }
    }
}

// Palindrome

let a = 0
let b = 1
let c = 0
let n = 10
console.log(a);
console.log(b);
for (let index = 0; index < n; index++) {
    c = a + b
    a = b
    b = c
    console.log(c);
}


// Word Break
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}

// Example Usage
console.log(wordBreak("leetcode", ["leet", "code", ""])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false


// Convert Binary String to Decimal

function binaryToDecimal(binaryString) {
    const [integerPart, fractionalPart = ""] = binaryString.split(".");

    // Convert integer part
    const intDecimal = parseInt(integerPart, 2);

    // Convert fractional part
    let fracDecimal = 0;
    for (let i = 0; i < fractionalPart.length; i++) {
        fracDecimal += parseInt(fractionalPart[i]) * Math.pow(2, -(i + 1));
    }

    return intDecimal + fracDecimal;
}

// Example Usage
console.log(binaryToDecimal("101.110")); // Output: 5.75


//  Find Hamming Distance Between Two Numbers

function hammingDistance(num1, num2) {
    const binary1 = num1.toString(2);
    const binary2 = num2.toString(2);

    // Make both binaries the same length by padding with zeros
    const maxLength = Math.max(binary1.length, binary2.length);
    const padded1 = binary1.padStart(maxLength, '0');
    const padded2 = binary2.padStart(maxLength, '0');

    // Calculate Hamming Distance
    let distance = 0;
    for (let i = 0; i < maxLength; i++) {
        if (padded1[i] !== padded2[i]) distance++;
    }

    return distance;
}

// Example Usage
console.log(hammingDistance(10, 18)); // Output: 2


// Add Two Numbers Represented as Linked Lists

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry > 0) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return dummy.next;
}

// Example Usage
const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // 465
const result = addTwoNumbers(l1, l2); // Output: 807

// Print Result
let res = [];
let node = result;
while (node) {
    res.push(node.val);
    node = node.next;
}
console.log(res); // Output: [7, 0, 8]


//  Implement myAtoi Function

function myAtoi(s) {
    // Step 1: Trim whitespace
    s = s.trim();
    // Step 2: Determine sign
    let sign = 1;
    let index = 0;
    if (s[0] === '-' || s[0] === '+') {
        sign = s[0] === '-' ? -1 : 1;
        index++;
    }
    // Step 3: Read digits
    let result = 0;
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        result = result * 10 + (s[index] - '0');
        index++;
    }
    // Apply sign
    result *= sign;
    // Step 4: Clamp to 32-bit signed integer range
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
}

// Example Usage
console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
console.log(myAtoi("words and 987")); // Output: 0


//Find Minimum in Rotated Sorted Array

function findMin(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // If mid element is greater than the rightmost element, the minimum is on the right
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Otherwise, the minimum is on the left or at mid
            right = mid;
        }
    }

    return nums[left];
}

// Example Usage
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0


// Jump Game

function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // If current index is unreachable
        maxReach = Math.max(maxReach, i + nums[i]); // Update max reachable index
    }

    return true;
}

// Example Usage
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false


// Divide integer
function divide(dividend, divisor) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (dividend === INT_MIN && divisor === -1) return INT_MAX; // Overflow case
    if (dividend === INT_MIN && divisor === 1) return INT_MIN;

    const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    // Work with absolute values
    let absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);
    let quotient = 0;

    while (absDividend >= absDivisor) {
        let tempDivisor = absDivisor, count = 1;
        while (absDividend >= (tempDivisor << 1)) {
            tempDivisor <<= 1;
            count <<= 1;
        }
        absDividend -= tempDivisor;
        quotient += count;
    }

    return sign * quotient;
}

// Example Usage
console.log(divide(10, 3)); // Output: 3
console.log(divide(7, -3)); // Output: -2
console.log(divide(-2147483648, -1)); // Output: 2147483647


//Chocolate problem

function cho(x, y, z) {
    let chocolate = Math.floor(x / y)
    wrapper = chocolate

    while (wrapper >= z) {
        let extra = Math.floor(wrapper / z)
        chocolate += extra
        wrapper = wrapper % z + extra
    }
    return chocolate
}


// String trim

function str(s) {
    console.log(s.trim().split(/\s+/).reverse().join(" "));
}
st1 = "   Hello    blue  sky I am   New"
str(st1)


//Unique check
function uniquestr(s) {
    const charset = new Set();
    let uni = true;
    for (const element of s) {
        if (charset.has(element)) {
            uni = false
            break;
        }
        charset.add(element)
    }
    if (uni) {
        console.log("all unique");
    }
    else {
        console.log("not unique");
    }
}

uniquestr("Hello Jsliroi")


//Mobile Key

const getCombinations = (digits) => {
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    return [...digits]
        .filter(d => map[d])
        .reduce((acc, d) => acc.flatMap(prefix => map[d].map(l => prefix + l)), ['']);
};


const input = [2, 9, 7];
console.log(getCombinations(input).join(' '));


// Permutation 
function getPermutations(nums) {
    if (nums.length === 1) return [nums];

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        const perms = getPermutations(remaining);

        for (let perm of perms) {
            result.push([current, ...perm]);
        }
    }

    return result;
}

function generateDigitPermutations(n) {
    let digits = [];
    for (let i = 1; i <= n; i++) {
        digits.push(i);
    }

    const perms = getPermutations(digits);

    // Convert each array to a number string
    return perms.map(arr => arr.join('')).join(',');
}

// Test
console.log(generateDigitPermutations(1));  // Output: 1


// 
let str = "3e4r2aa"

function chrrpt(value) {
    let arr = value.split("")
    let s = ""
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(parseInt(arr[i]))) {
            let count = arr[i]
            let char = arr[i + 1]
            if (char) {
                s += char.repeat(parseInt(count))
                i++;
            }
        }
        else {
            s += arr[i]
        }
    }
    console.log(`Number: ${s}`);
}

chrrpt("3e4r2aa")

//
arr = [9, 2, 7, 1, 7, 3, 8]
win = 3
sum = 0
maxSum = 0
startIndex = 0
for (let index = 0; index < win; index++) {
    const element = arr[index];
    sum += element
}

maxSum = sum;
for (let i = win; i < arr.length; i++) {
    sum = sum - arr[i - win] + arr[i];
    if (sum > maxSum) {
        maxSum = sum;
        startIndex = i - win + 1;
    }
}
const maxElements = arr.slice(startIndex, startIndex + win);

console.log("Maximum sum:", maxSum);
console.log("Elements:", maxElements);

//  Kaprekar 
function Kaprekar(num) {
    if (num < 1) {
        return console.log("Not Carper")
    }

    let sqr = num * num
    let numstr = String(sqr)

    for (let index = 0; index < numstr.length; index++) {
        let l1 = parseInt(numstr.substring(0, index))
        let l2 = parseInt(numstr.substring(index))

        if (l1 !== 0 && l2 !== 0 && l1 + l2 == num) {
            console.log("Kaprekar")
        }
    }
    // console.log("Over")
}

// console.log(Kaprekar(10) + " 10")
Kaprekar(9)

// UGLY 
const m = 274;
const isUgly = m => {
    if (m <= 0) return false;
    for (let f of [2, 3, 5]) {
        while (m % f === 0) m /= f;
    }
    return m === 1;
};

console.log(isUgly(7));
console.log(isUgly(14));

// automorphic

function automorphic(n) {
    let sqr = n * n
    console.log(n, " num " + sqr, " Square ")
    if (sqr.toString().endsWith(n)) {
        return console.log("Automorphic")
    }
    return console.log("Not Automorphic");
}

automorphic(25);
automorphic(9);
automorphic(6);
automorphic(3);

//Pronic 

function Pronic(num) {
    for (let i = 0; i * (i + 1) <= num; i++) {
        if (i * (i + 1) === num) {
            return console.log("Pronic Number");
        }
    }
    return console.log("Not Pronic Number");
}
Pronic(6);
Pronic(20);
Pronic(13);
Pronic(15);

//Happy

function isHappy(n) {
    let set = new Set()

    while (n !== 1 && !set.has(n)) {
        set.add(n)

        n = n.toString().split('').map((d) => Number(d) ** 2).reduce((a, b) => a + b)

        /*
        
                   let sum = 0;
            while (num > 0) {
              let digit = num % 10;
              sum += digit * digit;
              num = Math.floor(num / 10);
            }
            num = sum;
          }
        
        */



    }
    return n === 1;
}
console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));

//Given two integer arrays nums1 and nums2, return an array of their intersection.  
// Each element in the result must appear as many times as it shows in both arrays and you may return the 
// result in sorted order. 


let arr1 = [1, 3, 4, 6, 2, 8, 9, 2]
let arr2 = [2, 4, 7, 6, 9, 2]
let temp = arr1.filter((d) => arr2.includes(d)).sort((a, b) => a - b);
console.log(temp);


// Given an array, rotate the array to the right by k steps, where k is non-negative. 
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

nums = nums.slice(-k).concat(nums.slice(0, nums.length - k));

console.log(nums);

//Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements 
// such that the first element becomes the last, the second element becomes second last and so on. (Do 
// not use any additional Array) 

let arrf1 = [1, 2, 3, 4, 5, 6]
let len = arrf1.length;

for (let index = 0; index < Math.floor(len / 2); index++) {
    let element = arrf1[index];
    arrf1[index] = arrf1[len - index - 1];
    arrf1[len - index - 1] = element;
}
console.log(arrf1);

/* Find the difference between the second largest element and the second smallest element of an array.*/

function diff(arr) {
    let set = new Set(arr)
    let sortarr = [...set].sort((a, b) => a - b)
    console.log(sortarr)
    let small = sortarr[1]
    let larg = sortarr[sortarr.length - 2]

    return console.log("Difference is -", (larg - small))
}

let arr = [1, 4, 6, 4, 5, 76, 3, 3, 2, 33, 56, 2]

diff(arr)

//Write a program that should decode the given pattern and print the resulting expanded string.

let str = "2a3bc4dE5F2G7H"

let strarr = str.split('')
let f = ""
for (let i = 0; i < strarr.length; i++) {
    if (!isNaN(parseInt(strarr[i]))) {
        let num = parseInt(strarr[i])
        let char = strarr[i + 1]
        if (char) {
            f += char.repeat(num)
            i++;
        }
    }
    else {
        f += strarr[i]
    }

}
console.log(f)

function perfrctsquare(num) {
    let ar1 = new Array(num + 1).fill(Infinity)
    ar1[0] = 0

    for (let i = 0; i <= num; i++) {
        for (let j = 1; j * j <= i; j++) {
            ar1[i] = Math.min(ar1[i], ar1[i - j * j] + 1)
        }
    }

    console.log(ar1[num])
}
perfrctsquare(12)


// 30 , 31 remain
// Anagram

let s1 = "geeks"
let s2 = "ekseg"

s2 = s2.split('').sort().join('')
s1 = s1.split('').sort().join('')

console.log(s1 === s2)

// compare array 

let cmparr1 = [1, 4, 6, 9]
let cmparr2 = [9, 1, 6, 4]

let r = cmparr1 = [...cmparr1].sort()
let t = cmparr2 = [...cmparr2].sort()

console.log(r.every((val, idx) => val === t[idx]))


// Binary to  Integer
let num1 = 1001
let ans = 0
let tempstr = num1.toString().split('').reverse()

for (let i = tempstr.length - 1; i >= 0; i--) {
    const element = tempstr[i];
    if (parseInt(element) == 1) {
        ans += 2 ** i
    }
}
console.log(ans)

//  Find second largest 

let largarr = [10, 10, 10, 4, 7]
let newset = new Set(largarr)
largarr = [...newset].sort((a, b) => a - b).reverse()[1]
console.log(largarr.length)

if (largarr == undefined) {
    console.log("No second largest found");
} else {
    console.log(largarr);
}
// 

let pair = 0 //output
let totalarr = [1, 5, 7, 1, 3, 3, 4, 2] // arr
let sumtofind = 6 // k

for (let index = 0; index < totalarr.length; index++) {
    const element = totalarr[index];
    for (let j = index + 1; j < totalarr.length; j++) {
        const element1 = totalarr[j];
        if (element + element1 == sumtofind) {
            pair++
        }
    }
}

console.log(pair)

// WAP to multiply two matrices with error for dimention checking

//
let occarr = [1, 1, 1, 3, 3, 3].sort((a, b) => a - b)
let occnum = 1
let occcount = 0
for (let index = 0; index < occarr.length; index++) {
    const element = occarr[index];
    if (element == occnum) {
        occcount++
    } else {
        occnum = element
        occcount = 1
    }
}
if (occcount > 3) {
    console.log(1);
}
else {
    console.log(0);
}

// Formula of median of odd and even number for odd = middle of element and even = (n/2 + n/2-1)/2 where n = length of array

let medianarr = [1, 12, 15, 26, 38].sort((a, b) => a - b)
let median = 0
let medianarr1 = [2, 13, 17, 30, 45].sort((a, b) => a - b)
let median1 = 0

if (medianarr.length == medianarr1.length) {
    if (medianarr.length % 2 != 0 && medianarr1.length % 2 != 0) {
        median = medianarr[Math.floor(medianarr.length / 2)]
        median1 = medianarr1[Math.floor(medianarr1.length / 2)]
    } else {
        median = (medianarr[medianarr.length / 2] + medianarr[(medianarr.length / 2) - 1]) / 2
        median1 = (medianarr1[medianarr1.length / 2] + medianarr1[(medianarr1.length / 2) - 1]) / 2
    }
} else {
    if (medianarr.length % 2 != 0 && medianarr1.length % 2 == 0) {
        median = medianarr[Math.floor(medianarr.length / 2)]
        median1 = (medianarr1[medianarr1.length / 2] + medianarr1[(medianarr1.length / 2) - 1]) / 2
    } else {
        median = (medianarr[medianarr.length / 2] + medianarr[(medianarr.length / 2) - 1]) / 2
        median1 = medianarr1[Math.floor(medianarr1.length / 2)]
    }
}

console.log((median + median1) / 2)

// 
function insertAtPosition(arr, element, position) {
    // Check if the position is within the array bounds
    if (position < 0 || position > arr.length) {
        console.log("Invalid position");
        return;
    }

    // Shift elements to the right to make space for the new element
    for (let i = arr.length; i > position; i--) {
        arr[i] = arr[i - 1];
    }

    // Insert the element at the specified position
    arr[position] = element;

    return arr;
}

// Example usage:
let arrofshft = [1, 2, 3, 4, 5];
let newElement = 99;
let position = 2;

console.log(insertAtPosition(arrofshft, newElement, position));


// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose 
// sum is equal to K


let mainarr = [1, 5, 7, 1]
let output = 0
let req = 6

for (let index = 0; index < mainarr.length; index++) {
    const element = mainarr[index];
    for (let j = index; j < mainarr.length; j++) {
        const element1 = mainarr[j];
        if (element + element1 == req) {
            output++
        }
    }
}

console.log(output);

// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. The 
// task is to implement a method to count how many possible ways the child can run up the stairs. 
function countWaysToClimb(n) {
    // Base cases
    if (n === 0) return 1;  // 1 way to stay at the start
    if (n === 1) return 1;  // Only 1 way (1-step)
    if (n === 2) return 2;  // Two ways (1+1 or 2)
    if (n === 3) return 4;  // Four ways (1+1+1, 1+2, 2+1, or 3)

    // Initialize dp array
    let dp = new Array(n + 1);
    dp[0] = 1;  // 1 way to stay at the start
    dp[1] = 1;  // 1 way to reach the first step
    dp[2] = 2;  // 2 ways to reach the second step
    dp[3] = 4;  // 4 ways to reach the third step

    // Fill the dp array for steps greater than 3
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    // The final result will be stored in dp[n]
    return dp[n];
}

// Example usage:
console.log(countWaysToClimb(5));  // Output: 13
console.log(countWaysToClimb(10)); // Output: 274

// 
function getPermutations(nums) {
    if (nums.length === 1) return [nums];

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        const perms = getPermutations(remaining);

        for (let perm of perms) {
            result.push([current, ...perm]);
        }
    }
    return result;
}

const nmsc = [1, 2, 3];
const opt = getPermutations(nmsc);
console.log("Output:", opt);

// Reverse swap alphabet 

function ReverseAlphabet(stringinp) {
    let char = stringinp.split('')
    let left = 0
    let right = char.length - 1

    function isAlphabet(w) {
        return /^[a-zA-Z]$/.test(w)
    }

    while (left < right) {
        if (!isAlphabet(char[left])) {
            left++
        } else if (!isAlphabet(char[right])) {
            right--;
        } else {
            [char[left], char[right]] = [char[right], char[left]]
            left++
            right--
        }
    }
    console.log(char.join(''));
}

ReverseAlphabet("a!!!b.c.d,e'f,ghi")

//

function minCoins(coins, sum) {
    let dp = Array(sum + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= sum; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[sum] === Infinity ? -1 : dp[sum];
}
console.log(minCoins([9, 6, 5, 1], 50));

// Find if a given string can be represented from a substring by iterating the substring “n” times.

function isRepeatedSubstring(s) {
    const doubled = (s + s).slice(1, -1);
    return doubled.includes(s);
}

// Reverse Without .rev()

function Stringreverse(str) {
    let newstr = ''
    for (const element of str) {
        newstr = element + newstr
    }
    return newstr
}

let drt = Stringreverse("Harsh")
console.log(drt);

// Chef program mohit 

function ChefFun(testCases) {
    for (let i = 0; i < testCases.length; i++) {
        let [a, b, c] = testCases[i];

        // Check individual scores
        if (a < 10 || b < 10 || c < 10) {
            console.log("FAIL");
        }
        // Check total score
        else if (a + b + c < 100) {
            console.log("FAIL");
        }
        // All conditions passed
        else {
            console.log("PASS");
        }
    }
}


const inputchef = [
    [9, 100, 100],
    [30, 40, 50],
    [30, 20, 40],
    [0, 98, 8],
    [90, 80, 80]
];

ChefFun(inputchef);

// Password Checker 

function passchecker(str) {
    let predef = ["abcd", "1234", "456", "password", "admin", "username"]

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=+{}\[\]:;<>,.?/~])[A-Za-z\d!@#$%^&*()\-=+{}\[\]:;<>,.?/~]{8,16}$/;

    predef.map((ed) => {
        if (str.includes(ed)) return "Can't use simple password"
    })
    if (regex.test(str)) { return "Valid Password" }
    else { return "Not Valid Password" }
}

let RTU = passchecker("admin")
console.log(RTU);

// Longest common Prefix

function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            console.log(prefix, " Prefix clg");
            if (!prefix) return "";
        }
    }

    return prefix;
}

const Arrofprefix = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(Arrofprefix))


// chunk of arr
function chunkArray(arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

// Example usage:
const inp = [[1, 2, 3, 4, 5], 2];
const optofchunk = chunkArray(inp);
console.log(optofchunk); // Output: [[1, 2],[3, 4],[5]]

// Factorial Reminders

function countPrimes(n) {
    if (n < 2) return 0;
    const arr = Array(n + 1).fill(true);
    arr[0] = arr[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }

    return arr.filter(Boolean).length;
}

function RotateArray(array){
    let M = array.length
    let N = array[0].length


    const Rotated = Array.from({ length: N }, () => Array(M));

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            Rotated[j][M-1-i] = array[i][j] 
        }
        
    }

    return Rotated;
}
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const ansofrotarr = RotateArray(matrix)
console.log(ansofrotarr);