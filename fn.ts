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
function run():string {
    return 'hello world';
}

// 2.函数表达式
let run2 = function ():string {
    return 'hello world';
}

// ts中定义方法传参
function paramFun(name:string, age:number):string {
    return `姓名: ${name} --- 年龄: ${age}`;
}

// 函数没有返回值的方法用void
function voidFun():void{
    console.log('hello world');
}

// 可选参数
function electParam(name:string, age?:number):string {
    if (age) {
        return `${name} --- ${age}`;
    }

    return `${name} --- 年龄保密`;
}
console.log(electParam('FFF'));

// 默认参数
function defaultParam(name:string, age:number = 20):string {
    return `${name} --- ${age}`;
}
console.log(defaultParam('FFF'));

// 剩余参数
// 当有很多参数或者参数不确定,可以使用三点运算符
function sum(...result: Array<number>): number {
    let sum = 0;

    for (let i = 0, len = result.length; i < len; i ++) {
        sum += i;
    }

    return sum;
}

function sum2(a: number = 2, b: number = 3, ...arr: Array<number>): number {
    let sum = a * b;

    for(let i of arr) {
        sum += i;
    }

    return sum;
}

// 函数重载
function getInfo(name: string): string
function getInfo(name: string, age: number): string
function getInfo(name: any, age?: any): any {
    if (age) {
        return `姓名: ${name} , 年龄: ${age}`;
    } else {
        return `姓名: ${name}`;
    }
}