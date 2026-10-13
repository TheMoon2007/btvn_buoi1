//Bai1
export function productInfo(name, price) {
    return `Sản phẩm: ${name}, Giá: ${price.toLocaleString("en-US")} VNĐ`;
}
console.log("Bài 1:", productInfo("Sách", 20000));

//Bai2
export function greet(name) {
    return `Xin chào, ${name}!`;
}
console.log("Bài 2:", greet("An"));

//Bai3
export function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("Bài 3:", sumUpTo(5));

//Bai4
export function square(n) {
    return n * n;
}
console.log("Bài 4:", square(6));

//Bai5
export function isEven(n) {
    return n % 2 === 0;
}
console.log("Bài 5:", isEven(7));

//Bai6
export function firstElement(arr) {
    return arr[0];
}
console.log("Bài 6:", firstElement([1, 2, 3]));

//Bai7
export function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log("Bài 7:", sum(1, 2, 3, 4));

//Bai8  
export function getUserInfo(user) {
    const { name, age } = user;
    return `Name: ${name}, Age: ${age}`;
}
const user = { name: "Nam", age: 30 };
console.log("Bài 8:", getUserInfo(user));

//Bai9
export function getNames(people) {
    return people.map(person => person.name).join(", ");
}
const people = [{ name: "An" }, { name: "Bình" }];
console.log("Bài 9:", getNames(people));

//Bai10
export function stringLength(str) {
    return str.length;
}
console.log("Bài 10:", stringLength("Hello World"));

//Bai11
export function toUpperCase(str) {
    return str.toUpperCase();
}
console.log("Bài 11:", toUpperCase("javascript"));

//Bai12
export function formatCurrency(amount) {
    return `${amount.toLocaleString("en-US")} VNĐ`;
}
console.log("Bài 12:", formatCurrency(1000000));

//Bai13
export function max(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.max(...arr);
}
console.log("Bài 13:", max([10, 5, 20, 8]));

//Bai14
export function isPrime(n) {
    if (!Number.isInteger(n) || n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
console.log("Bài 14:", isPrime(7));


//Bai15
export function repeatString(str, n) {
    return Array(n).fill(str).join(" ");
}
console.log("Bài 15:", repeatString("Hello", 3));

//Bai16
export function sumOdd(arr) {
    return arr
        .filter(n => n % 2 !== 0)
        .reduce((total, n) => total + n, 0);
}
console.log("Bài 16:", sumOdd([1, 2, 3, 4]));

//Bai17
export function sumGreaterThan(arr, n) {
    return arr
        .filter(num => num > n)
        .reduce((total, num) => total + num, 0);
}
console.log("Bài 17:", sumGreaterThan([1, 2, 3, 4], 2));

//Bai18
export function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}
console.log("Bài 18:", formatDate("2024-11-28"));

//Bai19
export function firstThree(arr) {
    return arr.slice(0, 3);
}
console.log("Bài 19:", firstThree([1, 2, 3, 4, 5]));

//Bai20
export function containsChar(str, char) {
    return str.includes(char);
}
console.log("Bài 20:", containsChar("javascript", "j"));

//Bai21
export function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log("Bài 21:", mergeArrays([1, 2], [3, 4]));

//Bai22
export function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}
console.log("Bài 22:", countOccurrences([1, 2, 2, 3, 2], 2));

//Bai23
export function filterOdd(arr) {
    return arr.filter(n => n % 2 !== 0);
}
console.log("Bài 23:", filterOdd([1, 2, 3, 4]));

//Bai24
export function greaterThan(arr, n) {
    return arr.filter(num => num > n);
}
console.log("Bài 24:", greaterThan([1, 2, 3, 4], 2));

//Bai25
export function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("n phải là số nguyên không âm");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
console.log("Bài 25:", factorial(5));

//Bai26
export function separateEvenOdd(arr) {
    return {
        even: arr.filter(n => n % 2 === 0),
        odd: arr.filter(n => n % 2 !== 0)
    };
}
console.log("Bài 26:", separateEvenOdd([1, 2, 3, 4]));

//Bai27
export function sortAsc(arr) {
    return [...arr].sort((a, b) => a - b);
}
console.log("Bài 27:", sortAsc([3, 1, 4, 2]));

//Bai28
export function sumEvenIndex(arr) {
    return arr.reduce(
        (total, num, index) =>
            index % 2 === 0 ? total + num : total,
        0
    );
}
console.log("Bài 28:", sumEvenIndex([1, 2, 3, 4]));

//Bai29
export function multiplyByTwo(arr) {
    return arr.map(n => n * 2);
}
console.log("Bài 29:", multiplyByTwo([1, 2, 3]));

//Bai30
export function arrayToString(arr) {
    return arr.join("");
}
console.log("Bài 30:", arrayToString(["a", "b", "c"]));
