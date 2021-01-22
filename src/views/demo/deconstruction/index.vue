<template>
  <div></div>
</template>
<script>
// 解构赋值 ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
//   1.如果解构不成功，变量的值就等于undefined。

let [foo, [[bar], baz]] = [1, [[2], 3]]; //foo // 1
//bar // 2
//baz // 3

let [, , third] = ["foo", "bar", "baz"];
let [x, , y] = [1, 2, 3];

let [x, y, ...z] = ["a"];
// x // "a"
// y // undefined
// z // []

//2.解构赋值允许指定默认值。

let [foo = true] = [];
let [x, y = "b"] = [];
let [x, y = "b"] = [];

//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

let [x = 1] = [undefined]; //x // 1
let [x = 1] = [null];
//x // null

function f() {
  console.log("aaa");
}
let [x = f()] = [1];

// 对象的解构赋值

let { foo, bar } = { foo: "aaa", bar: "bbb" };

let { baz } = { foo: "aaa", bar: "bbb" };

// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。

// 例一
let { log, sin, cos } = Math;

// 例二
const { log } = console;
log("hello"); // hello


//与数组一样，解构也可以用于嵌套结构的对象。
let obj = {
  p: ["heloo", { y: "world" }]
};

let {
  p: [x, { y }]
} = obj;

//字符串的解构赋值

const [a, b, c, d, e] = 'hello';

//a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"

//函数的参数也可以使用解构赋值。
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3

function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

export default {};
</script>
<style scoped>
</style>
