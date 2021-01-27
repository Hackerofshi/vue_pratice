<template>
  <diV>
    <el-button type="primary" size="default" @click="t1">Promise</el-button>
    <el-button type="danger" size="default" @click="t2">Promise2</el-button>
    <el-button type="danger" size="default" @click="t3">Promise3</el-button>
    <el-button type="danger" size="default" @click="t4">Promise4</el-button>
  </diV>
</template>
<script>
import { log } from "util";
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}

let promise = new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve();
});

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });

  return promise;
};

const promise = new Promise(function(resolve, reject) {
  throw new Error("test");
});

promist.catch(function(error) {
  console.log(error);
});

const promise = new Promise(function(resolve, reject) {
  try {
    throw new Error("test");
  } catch (e) {
    reject(e);
  }
});
//promise.prototype.finally()
//finally()方法用于指定不promise对象最后状态如何，都会执行的操作。
promise
  .then(result => {})
  .catch(error => {})
  .finally(() => {});

server
  .listen(port)
  .then(function() {})
  .finally(server.stop);

promise.finally(() => {});

//等同于
promise.then(
  result => {
    return result;
  },
  error => {
    throw error;
  }
);

Promise.prototype.finally = function(callback) {
  let P = this.constuctor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

Promise.resolve(2).then(
  () => {},
  () => {}
); // resolve 的值是 undefined

Promise.resolve(2).finally(() => {});

Promise.reject(3).then(
  () => {},
  () => {}
);

Promise.reject(3).finally(() => {});

// Promise.all() 方法用于将多个Promise实例，包装成一个新的Promise实例

const p = Promise.all([p1, p2, p3]);

//上面代码中，Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。

//（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

//（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

const promise = [2, 3, 5, 7, 11, 13].map(function(id) {
  return getJSON("/post/" + id + ".json");
});

Promise.all(promise)
  .then(function(posts) {})
  .catch(function(reason) {});

const databasePromise = connectDatabase();

const booksPromise = databasePromise.then(findAllBooks);

const userPromise = databasePromise.then(getCurrentUser);

Promise.all([booksPromise, userPromise]).then(([books, user]) =>
  pickTopRecommendations(books, user)
);

//上面代码中，booksPromise和userPromise是两个异步操作，只有等到它们的结果都返回了，才会触发pickTopRecommendations这个回调函数。

//注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

const p1 = new Promise((resolve, reject) => {
  resolve("hello");
})
  .then(result => result)
  .catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error("报错了");
})
  .then(result => result)
  .catch(e => e);

Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(e => console.log(e));
//上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。

//如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
const p1 = new Promise((resolve, reject) => {
  resolve("hello");
}).then(result => result);

const p2 = new Promise((resolve, reject) => {
  throw new Error("报错了");
}).then(result => result);

Promise.all([p1, p2])
  .then(result => consolve.log(result))
  .catch(e => console.log(e));

//Promise.race() 方法同样是降多个Promise实例，包装成一个新的Promise实例

const p = Promise.race([p1, p2, p3]);

//上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
//Promise.race()方法的参数与Promise.all()方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve()方法，将参数转为 Promise 实例，再进一步处理。

const p = Promise.race([
  fect("/resource-that-may-take-a-while"),
  new Promise(function(resolve, rekect) {
    setTimeout(() => reject(new Error("request timeout")), 5000);
  })
]);

p.then(console.log).catch(console.error);

//Promise.allSettled() 方法接受Promise实例作为参数，包装成一个新的Promise实例，只要等到所有这些参数实例都返回结果
// 不管是fulfilled还是rejected，包装实例才会结束

const promises = [fetch("api-1"), fetch("/api-1"), fetch("api-3")];

await Promise.allSettled(promises);

removeLoadingIndicator();
//上面代码对服务器发出三个请求，等到三个请求都结束，不管请求成功还是失败，加载的滚动图标就会消失。

const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function(results) {
  console.log(results);
});

//上面代码中，Promise.allSettled()的返回值allSettledPromise，状态只可能变成fulfilled。它的监听函数接收到的参数是数组results。该数组的每个成员都是一个对象，对应传入Promise.allSettled()的两个 Promise 实例。每个对象都有status属性，该属性的值只可能是字符串fulfilled或字符串rejected。fulfilled时，对象有value属性，rejected时有reason属性，对应两种状态的返回值。

const promises = [fetch("index.html"), fetch("https://does-not-exist/")];

const results = await Proise.allSettled(promises);

const successfulPromises = results.filter(p => p.status === "fulfilled");

const errors = results.filter(p => p.status === "rejected").map(p => p.reason);

const urls = [
  /**/
];

const requests = urls.map(x => fetch(x));

try {
  await Promise.all(requests);
} catch {
  console.log("至少一个请求失败，其他请求可能还没有结束");
}

//Promise.any()  接受一组Promise实例作为参数，包装成一个新的Promise实例返回。只要
//参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会
//变成rejected状态

//Promise.any()跟Promise.race()方法很像，只有一点不同，就是不会因为某个Promise变成rejected状态而结束
const promises = [
  fetch("/endpoint-a").then(() => "a"),
  fetch("/endpoint-b").then(() => "b"),
  fetch("endpoint-c").then(() => "c")
];
try {
  const first = await Promise.any(promises);
  console.log(first);
} catch (error) {
  console.log(error);
}

//上面代码中，Promise.any()方法的参数数组包含三个 Promise 操作。其中只要有一个变成fulfilled，Promise.any()返回的 Promise 对象就变成fulfilled。如果所有三个操作都变成rejected，那么await命令就会抛出错误。

//Promise.any()抛出的错误，不是一个一般的错误，而是一个 AggregateError 实例。它相当于一个数组，每个成员对应一个被rejected的操作所抛出的错误。
//new AggregateError() extends Array -> AggregateError
const err = new AggregateError();

err.push(new Error("first error"));
err.push(new Error("second error"));
throw err;
//捕捉错误时，如果不用try...catch结构和 await 命令，可以像下面这样写。

Promise.any(promises).then(
  first => {},
  error => {}
);

var resolved = Promise.resolve(42);
var rejected = Promise.reject(-1);
var alsoRejected = Promise.reject(Infinity);

Promise.any([resolved.rejected, alsoRejected]).then(function(result) {
  console.log("result");
});

Promise.any([rejected.alsoRejected]).catch(function(results) {
  console.log(result);
});

Promise.any([rejected, alsoRejected]).catch(function(results) {
  console.log(results);
});
//Promise.resolve 有时需要将现有对象转为Promise对象，Promise.resolve()方法就起到这个作用
const jsPromise = Promise.resolve($.ajax("/whatever.json"));

Promise.resolve();
Promise.resolve("foo");

//等价于
new Promise(resolve => resolve("foo"));
//Promise.resolve()方法的参数分成四种情况。

// （1）参数是一个 Promise 实例

// 如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。

// （2）参数是一个thenable对象

// thenable对象指的是具有then方法的对象，比如下面这个对象。

let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);
});
//上面代码中，thenable对象的then()方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then()方法指定的回调函数，输出42。

//(3)参数不是具有then()方法的对象，或者根本就不是对象
//如果参数是一个原始值，或者是一个不具有then()方法的对象，则Promise.resolve()方法返回一个新的Promise对象，状态为resolved

const p = Promise.resolve("hello");
p.then(function(s) {
  console.log(s);
});
//上面代码生成一个新的 Promise 对象的实例p。由于字符串Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 Promise 实例的状态从一生成就是resolved，所以回调函数会立即执行。Promise.resolve()方法的参数，会同时传给回调函数。

//(4)不带有任何参数
// Promise.resolve()方法允许使用时不带任何参数，直接返回一个resolved状态的Promise对象
//所以，如果希望得到一个Promise对象，比较方便的方法就是直接调用Promise.resolve()方法。

const p = Promise.resolve();
p.then(function() {});

//上面代码的变量p就是一个 Promise 对象。

//需要注意的是，立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。
setTimeout(function() {
  console.log("three");
}, 0);
Promise.resolve().then(function() {
  console.log("two");
});

console.log("one");
//// one
// two
// three
//上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。

//Promise.reject()
//Promise.reject(reason)方法也返回一个新的Promise实例，改实例的状态为rejected
const p = Promise.reject("出错了");
//等同于
const p = new Promise((resolve, reject) => reject("出错了"));
p.then(null, function(s) {
  console.log(s);
});
//上面代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。

//Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。
Promise.reject("出错了").catch(e => {
  console.log(e === "出错了");
});
//上面代码中，Promise.reject()方法的参数是一个字符串，后面catch()方法的参数e就是这个字符串。

//应用
const preloadImage = function(path) {
  return new Promise(function(resolve, reject) {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
//Generator 函数与 Promise 的结合 § ⇧
//使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个Promise对象。

function getFoo() {
  return new Promise(function(resolve, reject) {
    resolve("foo");
  });
}

const g = function*() {
  try {
    const foo = yield getFoo();
  } catch (e) {
    console.log(e);
  }
};

function run(generator) {
  const it = generator();
  function go(result) {
    if (result.done) {
      return result.value;
    }
    return result.value.then(
      function(value) {
        return go(it.next(value));
      },
      function(error) {
        return go(it.throw(error));
      }
    );
  }
}

//13 Promise.try() 实际开发中，经常遇到一个情况：不知道或者不想区分，函数f是同步函数还是异步函数
//但是Promise来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch
//处理f抛出的错误，一般就会采用下面的写法
Promise.resolve.then(f);
//上面写法有一个缺点，就是如果f是同步函数，那么它会在本轮时间循环的末尾执行。

const f = () => console.log("now");
Promise.resolve().then(f);
console.log("next");

//上面的代码中，函数f是同步，但是用Promise包装了以后，就变成异步执行了。
//那么有没有一种方法，让同步函数同步执行，异步函数异步执行，并且让他们具有统一的api呢?回答是可以的
//并且还有两种写法
//第一种写法是用async函数来写

const f = () => console.log("now")(async () => f())();
console.log("next");
//上面代码中，第二行是一个立即执行的匿名函数，会立即执行里面的async函数，因此如果f是同步的，就会得到同步的结果；

// (async ()=> f())
// ().then(...).catch(...)

//第二种写法是使用new Promise()

const f = () =>
  console.log("now")(() => new Promise(resolve => resolve(f())))();

console.log("next");
//上面代码也是使用立即执行的匿名函数，执行new Promise()。这种情况下，同步函数也是同步执行的。

//鉴于这是一个很常见的需求，所以现在有一个提案，提供Promise.try方法替代上面的写法。

const f = () => console.log("now");
Promise.try(f);
console.log("next");

// now
// next

function getUsername(userId) {
  return database.users.get({ id: userId }).then(function(user) {
    return user.name;
  });
}

//上面代码中，database.users.get()返回一个 Promise 对象，如果抛出异步错误，可以用catch方法捕获，就像下面这样写。
database.users
  .get({ id: userId })
  .then()
  .catch();

Promise.try(() => database.users.get({ id: userId }))
  .then()
  .catch();

function* helloWorldGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}

var hw = helloWorldGenerator();

//上面代码定义了一个 Generator 函数helloWorldGenerator，它内部有两个yield表达式（hello和world），即该函数有三个状态：hello，world 和 return 语句（结束执行）。
// 然后，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。
// 下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。

hw.next();
// { value: 'hello', done: false }

hw.next();
// { value: 'world', done: false }

hw.next();
// { value: 'ending', done: true }

hw.next();
// { value: undefined, done: true }

// 第一次调用，Generator 函数开始执行，直到遇到第一个yield表达式为止。next方法返回一个对象，它的value属性就是当前yield表达式的值hello，done属性的值false，表示遍历还没有结束。

// 第二次调用，Generator 函数从上次yield表达式停下的地方，一直执行到下一个yield表达式。next方法返回的对象的value属性就是当前yield表达式的值world，done属性的值false，表示遍历还没有结束。

// 第三次调用，Generator 函数从上次yield表达式停下的地方，一直执行到return语句（如果没有return语句，就执行到函数结束）。next方法返回的对象的value属性，就是紧跟在return语句后面的表达式的值（如果没有return语句，则value属性的值为undefined），done属性的值true，表示遍历已经结束。

// 第四次调用，此时 Generator 函数已经运行完毕，next方法返回对象的value属性为undefined，done属性为true。以后再调用next方法，返回的都是这个值。
var readFile = require("fs-readfile-peomise");
readFile(fileA)
  .then(function(data) {
    console.log(data.toSting());
  })
  .then(function() {
    return readFile(fileB);
  })
  .then(function(data) {
    console.log(data.toSting());
  })
  .catch(function(err) {
    console.log(err);
  });

//async 基本用法

//async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName("goog").then(function(result) {
  console.log(result);
});

function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint("hello world", 50);

//上面代码指定 50 毫秒以后，输出hello world。

//由于async函数返回的是 Promise 对象，可以作为await命令的参数。所以，上面的例子也可以写成下面的形式。
async function timeout(ms) {
  await new Promist(resolve => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint("hello world", 50);

//async 函数有多种形式
async function foo() {}

//函数表达式
const foo = async function() {};

//对象的方法
let obj = { async foo() {} };

obj.foo().then();

class Storage {
  constructor() {
    this.cachePromise = caches.open("avatars");
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match("/avatars/${name}.jpg");
  }
}

const storage = new Storage();
storage.getAvatar("jake").then();
const foo = async () => {};

//语法 函数语法规则总体比较简单 ，难道是错误处理机制
// 返回Promise对象

// async 函数返回一个Promise对象
// async 函数内部return 函数返回的值，会成为方法回调函数的参数
async function f() {
  return "hello world";
}

f().then(v => console.log(v));

async function f() {
  throw new Error("出错了");
}

f().then(
  v => console.log("resolve", v),
  e => console.log("reject", e)
);
//Promise 对象的状态变化
// async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
async function f() {
  return await 123;
}

f().then(v => console.log(v));

//上面代码中，await命令的参数是数值123，这时等同于return 123。

// 另一种情况是，await命令后面是一个thenable对象（即定义了then方法的对象），那么await会将其等同于 Promise 对象。

class Sleep {
  constructor(timeout) {
    this.timeout = timeout;
  }

  then(resolve, reject) {
    const startTime = Date.now();
    setTimeout(() => resolve(Date.now() - startTime), this.timeout);
  }
}

(async () => {
  const sleepTime = await new Sleep(1000);
  console.log(sleepTime);
})();

//上面代码中，await命令后面是一个Sleep对象的实例。这个实例不是 Promise 对象，但是因为定义了then方法，await会将其视为Promise处理。

//这个例子还演示了如何实现休眠效果。JavaScript 一直没有休眠的语法，但是借助await命令就可以让程序停顿指定的时间。下面给出了一个简化的sleep实现。

function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}

//用法
async function one2FiveInAsync() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}

one2FiveInAsync();
//await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。

async function f() {
  await Promist.reject("出错了");
}
f()
  .then(v => console.log(v))
  .catch(e => console.log(e));

//注意，上面代码中，await语句前面没有return，但是reject方法的参数依然传入了catch方法的回调函数。这里如果在await前面加上return，效果是一样的。

async function f() {
  await Promise.reject("出错了");
  await Promist.resolve("hello world"); // 不会执行
}
//上面代码中，第二个await语句是不会执行的，因为第一个await语句状态变成了reject。

//有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
async function f() {
  try {
    await Promise.reject("出错了");
  } catch (e) {}

  return await Promise.resolve("hello world");
}

f().then(v => console.log(v));

//另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。

async function f() {
  await Promise.reject("出错").catch(e => console.log(e));
  return await Promise.resolve("hello world");
}
// 出错了
// hello world

// 错误处理
// 如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。
async function f() {
  await new Promise(function(resolve, reject) {
    throw new Error("出错了");
  });
}

f()
  .then(v => console.log(v))
  .catch(e => console.log(e));
//出错了
//上面代码中，async函数f执行后，await后面的 Promise 对象会抛出一个错误对象，导致catch方法的回调函数被调用，它的参数就是抛出的错误对象。具体的执行机制，可以参考后文的“async 函数的实现原理”。

// 防止出错的方法，也是将其放在try...catch代码块之中。

async function f() {
  try {
    await new Promise(function(resolve, reject) {
      throw new Error("出错了");
    });
  } catch (e) {}
  return await "hello world";
}
//如果有多个await命令，可以统一放在try...catch结构中。
async function main() {
  try {
    const val1 = await firstStep();
    const val2 = await secondStep();
    const val3 = await thirdStep(val1, val2);
  } catch (err) {
    console.error(err);
  }
}

//下面的例子使用try...catch结构，实现多次重复尝试。
const superagent = require('superagent')
const NUM_RETRIES = 3
async function test(){
  let i;
  for(i=0;i<NUM_RETRIES;++i){
    try {
      await superagent.get('http://google.com/this-throw-an-error')
      break
    } catch (err) {

    }
  }
  console.log(i)
}
test()

//使用注意点
// 第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
async function myFunction(){
  try{
    await somthingThatReturnsApromist();

  }catch(err){
    console.log(err)
  }
}


async function myFunction(){
  await somethingThatReturnsAPromise().catch(
    function(err){
      console.log(err)
    }
  )
}



// 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

let foo = await getFoo();
let bar = await getBar();

//上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。

let [foo,bar] = await Promise.all([getFoo,getBar()])
;
//写法二
let fooPromise = getFoo()
let barPromise = getBar()
let foo = await fooPromise()
let bar = await = barPromise()

//第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。
async function dbFuc(db){
  let docs = [{},{},{}]
   // 报错
  docs.forEach(function(doc){
    await db.post(doc)
  })
}




export default {
  methods: {
    t1() {
      timeout(100).then(value => {
        console.log(value);
      });
    },
    t2() {
      promise.then(function() {
        console.log("resolved.");
      });
    },
    t3() {
      getJSON("/posts.json").then(
        function(json) {
          console.log("Contents: " + json);
        },
        function(error) {
          console.error("出错了", error);
        }
      );
    },
    //Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
    t4() {
      Promise.resolve().then(function() {
        console.log("two");
      });
    }
  }
};
</script>
<style scoped>
</style>
