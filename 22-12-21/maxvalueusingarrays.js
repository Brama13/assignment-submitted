//take 3 prompts and find max using arrays and Math.max() and .push()//

var arr = [];

var i = prompt("enter the number1");
i = parseInt(i);
arr.push(i);

var i = prompt("enter the number2");
i = parseInt(i);
arr.push(i);

var i = prompt("enter the number3");
i = parseInt(i);
arr.push(i);

var max = Math.max(arr[0], arr[1], arr[2]);
alert(max);


