// Typescript泛型
// 传入的参数类型和返回的参数类型可以指定

function dataT<T>(value: T): T {
    return value;
}

// 类的泛型
// 最小堆算法,需要同时支付返回数字和字符串两种类型

// class MinClass {
//     public list: Array<number> = [];
//     add(num: number) {
//         this.list.push(num);
//     }
//     min():number {
//         let minNum = this.list[0];

//         for(let i = 0, len = this.list.length; i < len; i ++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i];
//             }
//         }

//         return minNum;
//     }
// }

class MinClass<T> {
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value);
    }
    min(): T {
        let minNum = this.list[0];

        for(let i = 0, len = this.list.length; i < len; i ++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }

        return minNum;
    }
}

var m1 = new MinClass<string>();
var m2 = new MinClass<number>();

// 泛型接口
// 有一个函数类型接口
interface ConfigFn {
    (value: string): string
}

let setData: ConfigFn = function(value: string): string {
    return value;
}

// 泛型接口两种写法
interface ConfigA {
    <T>(value:T):T;
}

let setDataA:ConfigA = function<T>(value:T):T{
    return value;
}

interface ConfigB<T> {
    (value:T):T;
}

let setDataB:ConfigB<string> = function<T>(value:T):T{
    return value;
}