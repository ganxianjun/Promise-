## 基本类型
- 布尔 boolean
- 字符串 string
- 数字 number
- 数组(元组) number[] 或者 Array<number>知道数据的类型和个数
- 枚举 enum 指定数据的类型的对象 enum Num {firstName: string}
- 任意值 any
- void 没有返回值 undefined 或者null
- undefined 和 null 只能等于自身
- never 没有返回的结果
- 断言 (<> 或者 as)
- 接口 interface 

## typescript 的核心规则之一是对值所具有的结构进行类型检测。
- 可选属性 
- 只读属性
- 函数类型
- 可索引的类型
interface num {
    [index: number]: string
}

let arr: num;
arr = ['tom', 'lili'];
let str: string = arr[0];

## 类的修饰符
公共，私有和受保护的修饰符
- public
- private
- protected
- readonly
- 静态属性
- 
