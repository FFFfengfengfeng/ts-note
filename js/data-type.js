"use strict";
/**
 * Typescript数据类型
 * 布尔类型 boolean
 * 数字类型 number
 * 字符串类型 string
 * 数组类型 array
 * 元组类型 tuple
 * 枚举类型 enum
 * 任意类型 any
 * null和undefined
 * void类型
 * never类型
 */
/**
 * 变量定义
 * ts变量必须指定类型,赋值也必须为指定类型
 */
var flag = true;
flag = false; // 正确
// flag = 123;  // 错误
/**
 * 数据类型
 */
// 布尔类型
var bo = true;
// 数字类型
var num = 123;
// 字符串类型
var str = 'hello world!';
// 数组类型
// 第一种
var arr1 = [1, 2, 3];
// 第二种
var arr2 = [1, 2, 3];
// 元组类型
var tum = [123, 'hello world'];
// 枚举类型
var Code;
(function (Code) {
    Code[Code["success"] = 1] = "success";
    Code[Code["error"] = 2] = "error";
})(Code || (Code = {}));
;
var success = Code.success;
console.log("\u6B63\u786E: " + success);
var error = Code.error;
console.log("\u9519\u8BEF: " + error);
// 任意类型
var an = 123;
an = 'str';
// void类型
// 表示没有返回值
// never类型
// 表示不存在的类型,如Error
