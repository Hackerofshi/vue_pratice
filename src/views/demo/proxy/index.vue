<template></template>
<script>
import { log } from "util";
var person = {
  name: "张三"
};

var proxy =
  (person,
  {
    get: function(target, propkey) {
      if (propkey in target) {
        return target[propkey];
      } else {
        throw new ReferenceError('prop name"' + propkey + '" does not exist.');
      }
    }
  });

proxy.name;
proxy.age;

let proto = new Proxy(
  {},
  {
    get(target, propertykey, reciver) {
      console.log("GET " + propertykey);
      return target[propertykey];
    }
  }
);

let obj = Object.create(proto);
obj.foo;

function createArray(...elements) {
  let handler = {
    get(target, propKey, reciver) {
      let index = Number(propKey);
      if (index < 0) {
        propkey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };
  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray("a", "b", "c");
arr[-1];

var pipe = function(value) {
  var funcStack = [];
  var oproxy = new Proxy(
    {},
    {
      get: function(pipeObject, fnName) {
        return funcStack.reduce(function(val, fn) {
          return fn(val);
        }, value);
      }
    }
  );
  funcStack.push(window[fnName]);

  return oproxy;
};

var double = n => n * 2;
var pow = n => n * n;

var reverseInt = n =>
  n
    .toSting()
    .split("")
    .reverse()
    .join("") | 0;

pipe().double.pow.reverseInt.get;

const dom = new Porxy(
  {},
  {
    get(target, propertykey) {
      return function(attrs = {}, ...children) {
        const el = document.createElement(property);
        for (let child of children) {
          if (typeof child === "string") {
            child = document.createTextNode(child);
          }
          el.appendChild(child);
        }

        return el;
      };
    }
  }
);

const el = dom.div(
  {},
  "Hello, my name is ",
  dom.a({ href: "//example.com" }, "Mark"),
  ". I like:",
  dom.ul(
    {},
    dom.li({}, "The web"),
    dom.li({}, "Food"),
    dom.li({}, "…actually that's it")
  )
);

document.body.appendChild(el);

const proxy = new Proxy(
  {},
  {
    get: function(target, key, receiver) {
      return receiver;
    }
  }
);

proxy.getReceiver === proxy;

const proxy = new Proxy(
  {},
  {
    get: function(target, key, receiver) {
      return receiver;
    }
  }
);

const d = Object.create(proxy);

d.a === d; //a
const target = Object.defineProperties(
  {},
  {
    foo: {
      value: 123,
      writeable: false,
      configurable: false
    }
  }
);

const handler = {
  get(target, propKey) {
    return "abc";
  }
};

const proxy = new Proxy(target, handler);
proxy.foo;

let validator = {
  set: function(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age not an integer");
      }
      if (value > 200) {
        throw new RangeError("the age seems invalid");
      }
      obj[prop] = value;
    }
  }
};
let person = new Proxy({}, validator);
person.age = 100;
person.age; // 100

person.age = "young";
person.age = 3000;

const handler = {
  get(target, key) {
    invariant(key, "get");
    return target[key];
  },
  set(target, key, value) {
    invariant(key, "set");
    target[key] = value;
    return true;
  }
};

function invariant(key, action) {
  if (key[0] === "_") {
    throw new Error('invalid attempt to ${ation} private "${key}" ');
  }
}
const target = {};
const proxy = new Proxy(target, handler);
proxy._prop;

proxy._prop = "c";

const handler = {
  set: function(obj, prop, value, recevier) {
    obj[prop] = receiver;
  }
};
const proxy = new Proxy({}, handler);
const myObj = {};
Object.setPrototypeOf(myObj, proxy);

myObj.foo = "bar";

myObj.foo === myObj;

const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver;
  }
};

const proxy = new Proxy({}, handler);
const myObj = {};

Object.setPrototypeOf(myObj, proxy);
myObj.foo = "bar";
myObj.foo = myObj;

const obj = {};
Object.defineProperty(obj, "foo", {
  value: "bar",
  writable: false
});

const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = "baz";
  }
};

const proxy = new Proxy(obj, handler);
proxy.foo = "baz";
proxy.foo;

//apply()

var handler = {
  apply(target, ctx, args) {
    return Reflect.apply(...arguments);
  }
};

var target = function() {
  return "I am the target";
};
var handler = {
  apply: function() {
    return "I am the proxy";
  }
};

var p = new Proxy(target, handler);
p();

var twice = {
  apply(target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};

function sum(left, right) {
  return left + right;
}

var proxy = new Proxy(sum, twice);
proxy(1, 2);
proxy, call(null, 5, 6);
proxy.apply(null, [7, 8]);

Reflect.apply(proxy, null, [9, 10]);

var handler = {
  has(target, key) {
    if (key[0] === "_") {
      return false;
    }

    return key in target;
  }
};

var target = { _prop: "foo", prop: "foo" };

var proxy = new Proxy(target, handler);
"_prop" in proxy;

var obj = { a: 10 };
Object.preventExtensions(obj);

var p = new Proxy(obj, {
  has: function(target, prop) {
    return false;
  }
});

"a" in p;

let stu1 = { name: "张三", score: 59 };
let stu2 = { name: "李四", score: 99 };

let handler = {
  has(target, prop) {
    if (prop === "score" && target[prop] < 60) {
      console.log("${target.name} 不及格");
    }
    return prop in target;
  }
};

let oproxy1 = new Proxy(stu1, handler);
let oproxy2 = new Proxy(stu2, handler);

"score" in oproxy1;
"score" in oproxy2;

for (let b in oproxy2) {
  console.log(oproxy2[b]);
}

for (let a in oproxy1) {
  console.log(oproxy1[a]);
}

//construct()用于拦截了new命令，下面是拦截对象的写法。

const handler = {
  construct(target, args, newTarget) {
    return new target(...args);
  }
};

//construct() 接收三个参数
//target :目标对象；
// args: 构造函数的参数数组。
// newTarget:  创造实例对象，new命令作用的构造函数
const P = new Proxy(function() {}, {
  construct: function(target, args) {
    console.log("called:" + args.join(","));
    return { value: args[0] * 10 };
  }
});

new p(1).value;

const p1 = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    return 1;
  }
});

new p1(); //报错

//另外，由于construct()拦截的是构造函数，所以它的目标对象必须是函数，否则就会报错。

const p = new Proxy(
  {},
  {
    construct: function(target, argumentsList) {
      return {};
    }
  }
);

new p();
//上面例子中，拦截的目标对象不是一个函数，而是一个对象（new Proxy()的第一个参数），导致报错。

// 注意，construct()方法中的this指向的是handler，而不是实例对象。

const handler = {
  construct: function(target, args) {
    console.log(this === handler);

    return new target(...target);
  }
};

let p = new Proxy(function() {}, handler);
new p();

//deleteProperty()
//deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete名令删除

var handler = {
  deleteProperty(target, key) {
    invariant(key, "delete");
    delete target[key];
    return true;
  }
};

function invariant(key, action) {
  if (key[0] === "") {
    throw new Error('invalid attempt to ${ation} private"${key} property');
  }
}

var target = { _prop: "foo" };
var proxy = new Proxy(target, handler);
delete proxy._prop;

//上面代码中，deleteProperty方法拦截了delete操作符，删除第一个字符为下划线的属性会报错。

// 注意，目标对象自身的不可配置（configurable）的属性，不能被deleteProperty方法删除，否则报错。

// defintProperty() 方法拦截了Object.defineProperty()操作
//defineProperty()

var handler = {
  defineProperty(target, key, decriptor) {
    return false;
  }
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = "bar";
//上面代码中，defineProperty()方法内部没有任何操作，只返回false，导致添加新属性总是无效。注意，这里的false只是用来提示操作失败，本身并不能阻止添加新属性。

//getOwnPropertyDescriptor() 方法拦截Object.getOwnPropertyDescriptor,返回一个属性描述对象或者undefined。

var handler = {
  getOwnPropertyDescriptor(target, key) {
    if (key[0] === "-") {
      return;
    }
    return Object.getOwnPropertyDescriptor(target, key);
  }
};

var target = { _foo: "bar", baz: "tar" };
var proxy = new Proxy(target, handler);
Object.getOwnPropertyDescriptor(proxy, "wat"); //// undefined
Object.getOwnPropertyDescriptor(proxy, "_foo"); // undefined
Object.getOwnPropertyDescriptor(proxy, "baz"); // { value: 'tar', writable: true, enumerable: true, configurable: true }
//上面代码中，handler.getOwnPropertyDescriptor()方法对于第一个字符为下划线的属性名会返回undefined。

//getPrototypeOf() 方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作

//- object.prototype.__proto__
//- Object.prototype.__isPrototypeOf()
//- Object.getPrototypeOf()
//- Reflect.getPrototypeOf()
// - instanceof
var proto = {};

var p = new Proxy(
  {},
  {
    getPrototypeOf(target) {
      return proto;
    }
  }
);

Object.getPrototypeOf(p) === proto; //上面代码中，getPrototypeOf()方法拦截Object.getPrototypeOf()，返回proto对象。

//isExtensible() 方法拦截 Object.isExtensible()操作

var p = new Proxy(
  {},
  {
    isExtensible: function(target) {
      console.log("called");
      return true;
    }
  }
);

Object.isExtensible(p); //上面代码设置了isExtensible()方法，在调用Object.isExtensible时会输出called。

var p = new Proxy(
  {},
  {
    isExtensible: function(target) {
      return false;
    }
  }
);

Object.isExtensible(p); //// Uncaught TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'true')

//ownKeys()
//ownKeys()放方法用来拦截对象自身属性的读取操作，具体来说，拦截以下操作。
// -Object.getOwnPropertyNames()
//- Object.getOwnPropertySymbols()
// -Object.keys()
// -for...in 循环

let target = {
  a: 1,
  b: 2,
  c: 3
};

let handler = {
  ownKeys(keys) {
    return ["a"];
  }
};
let handler = {
  ownKeys(target) {
    return ["a"];
  }
};

let proxy = new Proxy(target, handler);
Object.key(proxy); //上面代码拦截了对于target对象的Object.keys()操作，只返回a、b、c三个属性之中的a属性。

let target = {
  _bar: "foo",
  _prop: "bar",
  prop: "baz"
};

let handler = {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== "0");
  }
};

let proxy = new Proxy(target, handler);
for (let key of Object.keys(proxy)) {
  console.log(target[key]); // "baz"
}

//注意，使用Object.keys()方法时，有三类属性会被ownKeys()方法自动过滤，不会返回。

//目标对象上不存在的属性
//属性名为 Symbol 值
//不可遍历（enumerable）的属性

let target = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.for("secret")]: "4"
};

Object.defineProperty(target, "key", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: "static"
});

let handler = {
  ownKeys(target) {
    return ["a", "d", Symbol.for("secret"), "key"];
  }
};

let proxy = new Proxy(target, handler);
Object.keys(proxy);
//上面代码中，ownKeys()方法之中，显式返回不存在的属性（d）、Symbol 值（Symbol.for('secret')）、不可遍历的属性（key），结果都被自动过滤掉。
var p = new Proxy(
  {},
  {
    ownKeys: function(target) {
      return ["a", "b", "c"];
    }
  }
);

Object.getOwnPropertyNames(p);
const obj = { hello: "world" };
const proxy = new Proxy(obj, {
  ownKeys: function() {
    return ["a", "b"];
  }
});

for (let key in proxy) {
  console.log(key);
}
//上面代码中，ownkeys()指定只返回a和b属性，由于obj没有这两个属性，因此for...in循环不会有任何输出。

var obj = [];
var p = new Proxy(obj, {
  ownKeys: function(target) {
    return [123, true, undefined, null, {}, []];
  }
});

Object.getOwnPropertyNames(p);
//上面代码中，ownKeys()方法虽然返回一个数组，但是每一个数组成员都不是字符串或 Symbol 值，因此就报错了。

var obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10
});

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return ["b"];
  }
});

Object.getOwnPropertyNames(p); //上面代码中，obj对象的a属性是不可配置的，这时ownKeys()方法返回的数组之中，必须包含a，否则会报错。

var obj = {
  a: 1
};

Object.preventExtensions(obj);
var p = new Proxy(obj, {
  ownKeys: function(target) {
    return ["a", "b"];
  }
});

Object.getOwnPropertyNames[p]; //上面代码中，obj对象是不可扩展的，这时ownKeys()方法返回的数组之中，包含了obj对象的多余属性b，所以导致了报错。

//preventExtensions() preventExtensions()方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。

var proxy = new Proxy(
  {},
  {
    preventExtensions: function(target) {
      return true;
    }
  }
);
Object.preventExtesions(proxy); //上面代码中，proxy.preventExtensions()方法返回true，但这时Object.isExtensible(proxy)会返回true，因此报错。

var proxy = new Proxy(
  {},
  {
    preventExtensions: function(target) {
      console.log("called");
      Object.preventExtensions(targe);
      return true;
    }
  }
);

Object.preventExtensions(proxy);

//setPrototypeOf() 方法主要用来拦截 Object.setProto

var handler = {
  setPrototypeOf(target, proto) {
    throw new Error("Changeing the prototype is forbidden");
  }
};
var proto = {};
var target = function() {};
var proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, proto); //上面代码中，只要修改target的原型对象，就会报错。

//Proxy.revicable()
Proxy.revocable; //方法返回一个可取消的Proxy实例
let target = {};
let handler = {};
let { proxy, revoke } = Proxy.revocable(target, handler);
proxy.foo = 123;
proxy.foo; //123；

revoke();
proxy.foo; //Proxy.revocable()方法返回一个对象，该对象的proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例。上面代码中，当执行revoke函数之后，再访问Proxy实例，就会抛出一个错误。

//this 问题

// 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。

const target = {
  m: function() {
    console.log(this === proxy);
  }
};

const handler = {};
const proxy = new Proxy(target, handler);
target.m();
proxy.m();

const _name = new WeakMap();
class Person {
  constructor(name) {
    _name.set(this, name);
  }
  get name() {
    return _name.get(this);
  }
}

const jane = new Person("Jane");
jane.name;
const proxy = new Proxy(jane, {});
proxy.name;

//上面代码中，目标对象jane的name属性，实际保存在外部WeakMap对象_name上面，通过this键区分。由于通过proxy.name访问时，this指向proxy，导致无法取到值，所以返回undefined。

const target = new Date();
const handler = {};
const proxy = new Proxy(target, handler);
proxy.getDate();

const target = new Date("2015-01-01");
const handler = {
  get(target, prop) {
    if (prop === "getDate") {
      return target.getDate.bind(target);
    }
    return Reflect.get(target,prop)
  }
};

const proxy = new Proxy(target,handler)
;
proxy.getDate()

const handler =  {
  get:function(target,key,receiver){
    consol.log(this === handler);
    return 'hello ,'+key;
  },
  set:function(target,key,value){
    console.log(this === handler);
    target[key] = value;
    return true;
  }
}


const proxy = new Proxy({},handler)
proxy.foo
proxy.foo = 1;










export default {};
</script>
<style lang="less" scoped>
</style>
