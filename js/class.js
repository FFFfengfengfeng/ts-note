"use strict";
// Typescript中的类
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
// 类的定义
var PersonDefine = /** @class */ (function () {
    function PersonDefine(name) {
        this.name = name;
    }
    PersonDefine.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return PersonDefine;
}());
var define = new PersonDefine('FFF');
console.log(define.run());
// 继承
var WebExtend = /** @class */ (function (_super) {
    __extends(WebExtend, _super);
    function WebExtend(name) {
        return _super.call(this, name) || this;
    }
    WebExtend.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C";
    };
    return WebExtend;
}(PersonDefine));
var extend = new WebExtend('FFF');
console.log(extend.work());
console.log(extend.run());
// ts类里面的修饰符
// ts定义属性的时候有三种修饰符
// public 公有修饰符, 在当前类,子类,类的外面都可以访问(默认是公有修饰符)
// protected 保护类型, 在当前类,子类可以访问,类的外部没法访问
// private 私有修饰符, 在当前类可以访问, 子类, 类外部没法访问
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.printName = function () {
        return "\u8FD9\u4E2A\u662F" + this.name;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.run = function () {
        return this.name + "\u662F\u8DD1\u7684";
    };
    return Dog;
}(Animal));
var dog = new Dog('狗');
console.log(dog.run());
// 静态属性和静态方法
// 为什么要用静态属性和静态方法, jq的$.ajax就是用静态方法
// ts中实现静态属性和静态方法用static
var Student = /** @class */ (function () {
    function Student(stage) {
        this.stage = stage;
    }
    // 静态方法 静态方法不能访问类的属性和方法, 但可以访问静态属性
    Student.getBehaviour = function () {
        return "" + Student.behaviour;
    };
    // 实例方法
    Student.prototype.ouput = function () {
        switch (this.stage) {
            case 1:
                return "\u5C0F\u5B66\u751F";
                break;
            case 2:
                return "\u4E2D\u5B66\u751F";
                break;
            case 3:
                return "\u5927\u5B66\u751F";
                break;
            default:
                return "\u5C0F\u5B66\u751F";
                break;
        }
    };
    // 静态属性
    Student.behaviour = '学习';
    return Student;
}());
// 多态 - 父类定义的方法不去实现, 让继承他的子类去实现, 每一个子类的该方法都有不同的表现
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function () { };
    return Car;
}());
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(name) {
        return _super.call(this, name) || this;
    }
    Bicycle.prototype.run = function () {
        return this.name + "\u7528\u4EBA\u529B";
    };
    return Bicycle;
}(Car));
var Train = /** @class */ (function (_super) {
    __extends(Train, _super);
    function Train(name) {
        return _super.call(this, name) || this;
    }
    Train.prototype.run = function () {
        return this.name + "\u7528\u5185\u71C3\u673A";
    };
    return Train;
}(Car));
// 抽象类和抽奖方法
// 1.抽象类: 它是提供其他类继承的基类, 不能直接被实例化, 子类继承可以被实例化
// 2.abstract修饰的方法(抽象方法)只能放在抽象类里面
// 3.抽象类和抽象方法用来定义标准(比如定义标准为: 抽象类Animal有抽象方法eat, 要求它的子类必须包含eat方法)
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    return Cat;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.live = function () {
        return this.name + "\u751F\u6D3B\u5728\u5C71\u91CC";
    };
    return Tiger;
}(Cat));
var tiger = new Tiger('老虎');
console.log(tiger.live());
