function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function sumbtxy(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
}

function fact(n) {
    let fact = 1;
    if (n === 0 || n === 1) {
        return fact;
    } else {
        for (let i = 2; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}

let num1 = 3;
let num2 = 2;

switch (6) {
    case 1:
        console.log(num1 + "+" + num2 + "=" + add(num1, num2));
        break;
    case 2:
        console.log(num1 + "+" + num2 + "=" + add(num1, num2));
        break;
    case 3:
        console.log(num1 + "-" + num2 + "=" + sub(num1, num2));
        break;
    case 5:
        console.log("Sum of numbers between " + num1 + " and " + num2 + " = " + sumbtxy(num1, num2));
        break;
    case 6:
        console.log("Factorial of " + num1 + " is " + fact(num1));
        break;

}
