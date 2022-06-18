import {sum } from "./module.js"
// hoisting : đưa tất cả khai báo biến lên đầu của file đó
let a = 1;
const b = 2;

console.log(y);
var x =7;
var y =9;
console.log(a)
console.log(b)

// global scope và local scpoe
// những phần giá trị trong ngoặc nhọn thì chỉ có thể khai báo trong ngoặc nhọn đó tuy vây
// var có thể làm 1 global 
// không thể thay đổi giá trị của const
// Data types

// Primitive
// String
// Number 
// null 
// undefined
//Reference
// Object
// Array
if(true){
    var g =2;
    console.log(x)
}
console.log(g);

const arr = [];
arr.push(1)
const obj = {}
obj.name="minh"
console.log(arr)
console.log(obj)

//Arrow function có hoisting
// luôn lấy context to nhất gần nó nhất
// con function là lấy nơi nó thuộc về
const getData = () =>{

}
function getNewData(){

}

const button = document.querySelector("#button")
button.addEventListener("click",()=>{
    console.log(this)
})
button.addEventListener("click",function hello(){
    console.log(this)
})
// Console
console.log("minh"+123)
console.log(`minh${"minh"}`+123)
console.log(sum(3,2))

// Sread và rest
// spread
const newObj =  {
    name : "minh"
}
const arr1 = [1,2,3];
const arr2 = [...arr1]
console.log(arr1)
console.log(arr2)
function sum1(...arg){
    console.log(arg)
}
sum1(1,2,3,4,5)

//destructuring
