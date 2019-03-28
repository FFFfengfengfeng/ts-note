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
let flag:boolean = true;
flag = false; // 正确
// flag = 123;  // 错误

/**
 * 数据类型
 */

// 布尔类型
let bo:boolean = true;

// 数字类型
let num:number = 123;

// 字符串类型
let str:string = 'hello world!';

// 数组类型
// 第一种
let arr1:number[] = [1, 2, 3];
// 第二种
let arr2:Array<number> = [1, 2, 3];
