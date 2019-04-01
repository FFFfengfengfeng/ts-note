// Typescript中的类

// 类的定义
class PersonDefine {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    run(): string {
        return `${this.name}在运动`;
    }
}

let define = new PersonDefine('FFF');
console.log(define.run());

// 继承
class WebExtend extends PersonDefine {
    constructor(name: string) {
        super(name);
    }
    work(): string{
        return `${this.name}在工作`;
    }
}
let extend = new WebExtend('FFF');
console.log(extend.work());
console.log(extend.run());

// ts类里面的修饰符
// ts定义属性的时候有三种修饰符
// public 公有修饰符, 在当前类,子类,类的外面都可以访问(默认是公有修饰符)
// protected 保护类型, 在当前类,子类可以访问,类的外部没法访问
// private 私有修饰符, 在当前类可以访问, 子类, 类外部没法访问

class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    printName(): string {
        return `这个是${this.name}`;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    run(): string {
        return `${this.name}是跑的`;
    }
}

let dog = new Dog('狗');
console.log(dog.run());

// 静态属性和静态方法
// 为什么要用静态属性和静态方法, jq的$.ajax就是用静态方法
// ts中实现静态属性和静态方法用static
class Student {
    // 公有属性
    public stage: number;
    // 静态属性
    static behaviour: string = '学习';
    // 静态方法 静态方法不能访问类的属性和方法, 但可以访问静态属性
    static getBehaviour(): string {
        return `${Student.behaviour}`;
    }

    constructor(stage: number) {
        this.stage = stage;
    }
    // 实例方法
    ouput(): string {
        switch (this.stage) {
            case 1:
                return `小学生`;
                break;
            case 2:
                return `中学生`;
                break;
            case 3:
                return `大学生`;
                break;
            default:
                return `小学生`;
                break;
        }
    }
}

// 多态 - 父类定义的方法不去实现, 让继承他的子类去实现, 每一个子类的该方法都有不同的表现

class Car {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    run() {}
}

class Bicycle extends Car {
    constructor(name: string) {
        super(name);
    }
    run(): string {
        return `${this.name}用人力`;
    }
}

class Train extends Car {
    constructor(name: string) {
        super(name);
    }
    run(): string {
        return `${this.name}用内燃机`;
    }
}

// 抽象类和抽奖方法
// 1.抽象类: 它是提供其他类继承的基类, 不能直接被实例化, 子类继承可以被实例化
// 2.abstract修饰的方法(抽象方法)只能放在抽象类里面
// 3.抽象类和抽象方法用来定义标准(比如定义标准为: 抽象类Animal有抽象方法eat, 要求它的子类必须包含eat方法)

abstract class Cat {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract live(): any;
}

class Tiger extends Cat {
    constructor(name: string) {
        super(name);
    }

    live(): string {
        return `${this.name}生活在山里`;
    }
}

let tiger = new Tiger('老虎');
console.log(tiger.live());