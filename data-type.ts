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

// 元组类型
let tum:[number, string] = [123, 'hello world'];

// 枚举类型
enum Code {
    success = 1,
    error = 2
};

let success:Code = Code.success;
console.log(`正确: ${success}`);

let error:Code = Code.error;
console.log(`错误: ${error}`);

// 任意类型
let an:any = 123;
an = 'str';

// void类型
// 表示没有返回值

// never类型
// 表示不存在的类型,如Error
