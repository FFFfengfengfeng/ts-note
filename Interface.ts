// Typescript接口
// 接口定义: 接口是对传入参数进行约束; 或者对类里面的属性和方法进行声明和约束
// 实现这个接口的类必须实现该接口里面属性和方法; typescript的接口用interface关键字定义
// 接口作用: 接口定义了某一批所需要遵守的规范, 接口不关心这些类的内部状态数据, 也不关心这些类里面方法的实现细节,
// 它只规定这些类必须提供某些方法, 提供这些方法的类就可以满足实际需求

// 接口分类
// 属性接口
interface FullName {
    firstName: string;
    
    secondName: string;

    age?: number;
}

function printName(name: FullName) {
    return name;
}

let obj = {
    firstName: '小',
    secondName: '明',
    age: 20
};
console.log(printName(obj));

// 属性接口应用: 原生js封装ajax
interface Config {
    // 请求类型
    type: string;
    // 请求地址
    url: string;
    // 请求参数
    data?: string;
    // 数据格式
    dataType: string;
    // 成功回调
    success: Function;
}

function ajax(config: Config) {
    let xhr = new XMLHttpRequest;

    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (config.dataType == 'json') {
                return JSON.parse(xhr.responseText);
            } else {
                return xhr.responseText;
            }
        }
    }
}

// 函数类型接口
interface encrypt {
    (key: string, value: string): string;
}
let md5: encrypt = (key: string, value: string): string => {
    return `${key}${value}`;
}

// 可索引接口
// 对索引和传入参数约束(一般用于数组, 对象)
// 定义数组
let a1: number[] = [1, 3];
let a2: Array<string> = ['1', '2'];

interface UserArr {
    [index: number]: string;
}

let userarr: UserArr = ['a', 'b'];
console.log(userarr);

// 对象约束
interface UserObj {
    [index: string]: string;
}
let userobj: UserObj = {
    name: '小明',
    sex: '男'
}

// 类类型接口
interface Person {
    name: string;
    eat(str: string): void;
}

// 类实现接口要用implements关键字, 必须实现接口里面声明的方法和属性
class aa implements Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(`${this.name}吃${food}`);
    }
}

// 接口继承
interface Male extends Person {
    work(): void;
}

class Programmer {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    coding(code: string): string {
        return `${this.name}${code}`;
    }
}

class Web extends Programmer implements Person {
    constructor(name: string) {
        super(name);
    }
    work(): string {
        return `${this.name}工作`;
    }
    eat(food: string): string {
        return `${this.name}吃${food}`;
    }
}

