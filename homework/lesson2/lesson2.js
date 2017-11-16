//alert("aa")

// 数据类型

console.log("## 第一章 数据类型");
console.log("\n");
console.log("\n");
// 1.字符串
console.log("## 1.字符串");
var age = "thirty three";

var mood = 'happy';
var mood = "happy";
var mood = "dont' ask";
var mood = 'don\'t ask';

var height = "about 5'10\" tall";

console.log(age);
console.log(mood);
console.log(height);

// 数值
console.log("\n");
console.log("## 2.数值")

var age = 33.25;
var temperature = -20;
var temperature = -20.33333333;

console.log(age);
console.log(temperature);

// 布尔值
console.log("\n");
console.log("## 3.布尔值")
var sleeping = true;
var married = true;
var married2 = "true";
console.log(sleeping);
console.log(married);
console.log(married2);

// 数组
console.log("\n");
console.log("## 4.数组")
var beatles = Array(4);
var beatles = Array();
beatles[0] = "John";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";

var beatles2 = Array("a","b","c","d");
var years = [1940,1941,1942,1943];
var lennon = ["John",1940,false];
var remix = Array(lennon);

console.log(beatles);
console.log(beatles2);
console.log(years);
console.log(remix);

// 对象
console.log("\n");
console.log("## 4.对象")
var lennon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = false;

var lennon1 = {name:"John", year:1994, living:false}

// 声明成数组对象
var beatles = {};
beatles.vocalist = lennon;
var name = beatles.vocalist.name;

console.log(lennon);
console.log(lennon1);
console.log(name);

