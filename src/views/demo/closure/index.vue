<template></template>
<script>
//Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。

var n = 999;

function f1() {
  alert(n);
}
f1(); // 999

//另一方面，在函数外部自然无法读取函数内的局部变量。

function f1() {
  var n = 999;
}

alert(n); // error

//这里有一个地方需要注意，函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量！
function f1() {
  n = 999;
}

f1();

alert(n); // 999

//如何通过外部读取局部变量

function f1() {
  var n = 999;
  function f2() {
    alert(n);
  }
  return f2;
}

var result = f1();

result(); //999

//闭包的概念

//上一节代码中的f2函数就是闭包函数，
//各种专业文献上的"闭包"（closure）定义非常抽象，很难看懂。我的理解是，闭包就是能够读取其他函数内部变量的函数。

function f1() {
  var n = 999;
  nAdd = function () {
    n += 1;
  };

  function f2() {
    alert(n);
  }

  return f2;
}

var result = f1();

result(); // 999

nAdd();

result(); // 1000

export default {};
</script>
