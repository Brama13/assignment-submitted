//take n input from user and to print first n prime numbers.

var n=prompt();
var count=1;
for(var i=2;i<=n;i++) {
  for(var j=2;j<=i/2;j++) {
   if(i%j==0) {
     count=0;
     break;
   }
  }
  if(count==1) {
  console.log(i+"br");
  }
}