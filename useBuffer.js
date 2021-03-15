var buf1=Buffer.from('123456789')
var buf2=Buffer.from('Hello ')

console.log(Buffer.concat([buf1,buf2]).toString())

//buf2.copy(buf1, 2)

//console.log(buf1.toString())