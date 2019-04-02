"use strict";
// Typescript接口
// 接口定义: 接口是对传入参数进行约束; 或者对类里面的属性和方法进行声明和约束
// 实现这个接口的类必须实现该接口里面属性和方法; typescript的接口用interface关键字定义
// 接口作用: 接口定义了某一批所需要遵守的规范, 接口不关心这些类的内部状态数据, 也不关心这些类里面方法的实现细节,
// 它只规定这些类必须提供某些方法, 提供这些方法的类就可以满足实际需求
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printName(name) {
    return name;
}
var obj = {
    firstName: '小',
    secondName: '明',
    age: 20
};
console.log(printName(obj));
function ajax(config) {
    var xhr = new XMLHttpRequest;
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (config.dataType == 'json') {
                return JSON.parse(xhr.responseText);
            }
            else {
                return xhr.responseText;
            }
        }
    };
}
var md5 = function (key, value) {
    return "" + key + value;
};
// 可索引接口
// 对索引和传入参数约束(一般用于数组, 对象)
// 定义数组
var a1 = [1, 3];
var a2 = ['1', '2'];
var userarr = ['a', 'b'];
console.log(userarr);
var userobj = {
    name: '小明',
    sex: '男'
};
// 类实现接口要用implements关键字, 必须实现接口里面声明的方法和属性
var aa = /** @class */ (function () {
    function aa(name) {
        this.name = name;
    }
    aa.prototype.eat = function (food) {
        console.log(this.name + "\u5403" + food);
    };
    return aa;
}());
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        return "" + this.name + code;
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.work = function () {
        return this.name + "\u5DE5\u4F5C";
    };
    Web.prototype.eat = function (food) {
        return this.name + "\u5403" + food;
    };
    return Web;
}(Programmer));
