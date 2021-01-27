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



</script>
