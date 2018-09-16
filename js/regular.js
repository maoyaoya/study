/**
 * var box = new RegExp('box');
   console.log(box);
 * 
 * var box = /box/;
   console.log(box);

 * var pattern = new RegExp('Box', 'i');  //第一个参数是内容，第二个参数是 i、g、m
var str = 'box';
console.log(pattern.test(str));

console.log(/Box/i.test('box')); //true

var pattern = /Box/i;
var str = 'this is a  box';
console.log(pattern.test(str));  //true,表示字符串中是否包含模式的正则，所以就不能用单纯的字符串进行比较

exec如果有返回的是一个数组，如果没有返回的是null
返回匹配到的值


                  字符串方法
var pattern = /Box/i;
var str = 'this is a  box';
var a = str.match(pattern);
console.log(a[0]); //证明了返回的是数组

var pattern = /Box/i;
var str = 'this is a box';
console.log(str.search(pattern));  //返回第一个下标，无需全局，查找到一个就给返回，找不到返回-1

var pattern = /Box/i;
var str = 'this is a box  this is a box';
console.log(str.replace(pattern, 'tom'));//this is a tom  this is a box


              静态属性
var pattern = /Box/i;
var str = 'this is a box?';
pattern.test(str);  //必须执行一下才能生效
//alert(RegExp.input);//当前匹配的字符串  this is a box
//alert(RegExp.leftContext);//匹配字符串的前子串， this is a 
//alert(RegExp.rightContext); //?
alert(RegExp.lastMatch);//box


var pattern = /g..gle/;             //.符号可以匹配除了换行符之外的任意字符
var str = 'this is a google';
console.log(pattern.test(str));


var pattern = /go*gle/;  //*表示0个1个或者多个字符，+号表示至少 要有一个字符，？1个或0个
var str = 'this is a google';
console.log(pattern.test(str));
//o{2,4}表示匹配o2-4次，包括2、4,o{3}表示三个o，
//o{3.}表示3个或3个以上

var pattern = /[a-z]oogle/;
var str = 'google';
console.log(pattern.test(str));//true

var pattern = /go{3.}gle/;  //*表示0个1个或者多个字符，+号表示至少 要有一个字符，？1个或0个
var str = 'goooooogle';
console.log(pattern.test(str));
//o{2,4}表示匹配o2-4次，包括2、4,o{3}表示三个o，
//o{3.}表示3个或3个以上 false

var pattern = /[0-9]oogle/;
var str = /444444oogle/;
console.log(pattern.test(str));//true,匹配的是后面
// \w字母数字下划线  \W非字母数字下划线

pattern中的一些
\s表示空格匹配
\b表示到达边界
    | 表示或
静态属性RegExp.$1表示获取括号中第一个分组对应的匹配字符串

var pattern = /[a-z]+/;  //使用了贪婪
var str = 'abhsbdh';
console.log(str.replace(pattern, '1'));  //1

var pattern = /[a-z]+?/;  //使用了惰性,如果开启全局，所有都变成1
var str = 'abhsbdh';
alert(str.replace(pattern, '1'));  //1bhsbdh


var pattern = /(\d+)(?:[a-z])/;
var str = '123abc';
console.log(pattern.exec(str));
 */
var pattern = /(a?(b?(c?)))/;
var str = 'abc';
console.log(pattern.exec(str));   // ["abc", "abc", "bc", "c"]