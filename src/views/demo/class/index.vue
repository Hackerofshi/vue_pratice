<template></template>
<script>
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this, x + "," + this.y + ")";
};

var p = new Point(1, 2);

//可以写成这个样子
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return "(" + this.x + "," + this.y + ")";
  }
}

export default class myClass {
  foo(baz) {
    this[bar](baz);
  }

  [bar](baz) {
    return (this[snaf] = baz);
  }
}

const inst = new myClass();

Reflect.ownKeys(myClass.prototype);

function fetch(url, { body = "", method = "GET", headers = {} }) {
  console.log(method);
}

fetch("http://example.com");
function fetch(url, { body = "", method = "GET", headers = {} }) {
  console.log(method);
}

fetch("http://example.com");

function m1({ x = 0, y = 0 } = {}) {
  return [x, y];
}
function m2({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1(); // [0, 0]
m2(); // [0, 0]

// x 和 y 都有值的情况
m1({ x: 3, y: 8 }); // [3, 8]
m2({ x: 3, y: 8 }); // [3, 8]

// x 有值，y 无值的情况
m1({ x: 3 }); // [3, 0]
m2({ x: 3 }); // [3, undefined]

// x 和 y 都无值的情况
m1({}); // [0, 0];
m2({}); // [undefined, undefined]

m1({ z: 3 }); // [0, 0]
m2({ z: 3 }); // [undefined, undefined]

function f(x = 1, y) {
  return [x, y];
}

f();
f(2);
//f(,1)

f(undefined, 1);
function f(x, y = 5, z) {
  return [x, y, z];
}

f();
f(1);
f(1, 2);
f(1, undefined, 2);

function foo(x = 2, y = 5) {
  console.log(x, y);
}

foo(undefined, null);

var x = 1;
function f(x, y = x) {
  console.log(y);
}

f(2);

let x = 1;

function f(y = x) {
  let = 2;
  console.log(y);
}

f();

let foo = "footer";
function bar(func = () => foo) {
  let foo = "inner";
  console.log(func());
}

bar();

var x = 1;

function foo(
  x,
  y = function() {
    x = 2;
  }
) {
  var x = 3;
  y();
  console.log(x);
}
foo();

//上面代码中，函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。

var x = 1;
function foo(
  x,
  y = function() {
    x = 2;
  }
) {
  x = 3;
  y();
  console.log(x);
}

foo();

function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}

function sortNumbers() {
  return Array.prototype.slice.call(argments).sort();
}
</script>
