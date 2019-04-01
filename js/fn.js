"use strict";
/**
 * Typescript函数
 * 函数定义
 * 可选参数
 * 默认参数
 * 剩余参数
 * 函数重载
 * 箭头函数
 */
// 函数定义
// 1.函数声明
function run() {
    return 'hello world';
}
// 2.函数表达式
var run2 = function () {
    return 'hello world';
};
// ts中定义方法传参
function paramFun(name, age) {
    return "\u59D3\u540D: " + name + " --- \u5E74\u9F84: " + age;
}
// 函数没有返回值的方法用void
function voidFun() {
    console.log('hello world');
}
// 可选参数
function electParam(name, age) {
    if (age) {
        return name + " --- " + age;
    }
    return name + " --- \u5E74\u9F84\u4FDD\u5BC6";
}
console.log(electParam('FFF'));
// 默认参数
function defaultParam(name, age) {
    if (age === void 0) { age = 20; }
    return name + " --- " + age;
}
console.log(defaultParam('FFF'));
// 剩余参数
// 当有很多参数或者参数不确定,可以使用三点运算符
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0, len = result.length; i < len; i++) {
        sum += i;
    }
    return sum;
}
function sum2(a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 3; }
    var arr = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arr[_i - 2] = arguments[_i];
    }
    var sum = a * b;
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var i = arr_1[_a];
        sum += i;
    }
    return sum;
}
function getInfo(name, age) {
    if (age) {
        return "\u59D3\u540D: " + name + " , \u5E74\u9F84: " + age;
    }
    else {
        return "\u59D3\u540D: " + name;
    }
}
