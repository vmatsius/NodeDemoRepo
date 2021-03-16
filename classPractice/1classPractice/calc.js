var a=parseInt(process.argv[2])
var op=process.argv[3]
var b=parseInt(process.argv[4])
var ans;
//console.log(process.argv)
// console.log('op1: ', a)
// console.log('op2: ', b)
// console.log('operation: ', op)


if(op=='+')
ans=a+b;

if(op=='-')
ans=a-b;

if(op=='/')
ans=a/b;

if(op=='*')
ans=a*b;

console.log("Answer is: ", ans)