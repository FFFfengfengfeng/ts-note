"use strict";
// Typescript泛型
// 传入的参数类型和返回的参数类型可以指定
function dataT(value) {
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
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0, len = this.list.length; i < len; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m1 = new MinClass();
var m2 = new MinClass();
var setData = function (value) {
    return value;
};
var setDataA = function (value) {
    return value;
};
var setDataB = function (value) {
    return value;
};
