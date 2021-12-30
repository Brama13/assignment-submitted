//take to 3 inputs from user and show minimum of three//
var a = prompt("enter the num1");
var b = prompt("enter the num2");
var c = prompt("enter the num3");

if(a<b && a<c) {
  alert("a is small");
} else if(b<a && b<c) {
  alert("b is small");
} else {
  alert("c is small");
}